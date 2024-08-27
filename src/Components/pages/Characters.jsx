import { API_URL } from "../../../env";
import ButtonFilter from "../atoms/ButtonFilter";
import InputSearch from "../atoms/InputSearch";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import CardCharacter from "../molecules/CardCharacter";
import ButtonEstandar from "../atoms/ButtonEstandar";
const Characters = () => {
   const [characters, setCharacters] = useState([]); // Renombrado para indicar que es un array
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1); // Nuevo estado para manejar el total de páginas
   const [query, setQuery] = useState("")
   const [clas, setClas] = useState(false)
   const [raza, setRaza] = useState("")
   const [genre, setGenre] = useState("")
   const inputRef = useRef(null);

   useEffect(() => {
      const fetchCharacters = async () => {
         try {
            let url = `${API_URL}/characters`;
            let params = { page: page };
            if (query) params.name = query; // Add query to params if present
            if (raza) params.race = raza
            if (genre) params.gender = genre

            const response = await axios.get(url, { params });
            setCharacters(response.data.items || response.data); // Asegúrate de que `items` existe o usa `response.data` directamente
            setClas(true);
            console.log(response)
            if (!query && !raza) {
               setTotalPages(response.data.meta.totalPages); // Solo actualizar totalPages si no hay filtros
               setClas(false);
            }
         } catch (error) {
            console.error("Error fetching characters:", error);
         }
      };
      fetchCharacters();
   }, [page, query, raza, genre]); // Fetch characters whenever page, query, or raza changes

   const handleNextPage = () => {
      if (page < totalPages) setPage(prevPage => prevPage + 1); // Incrementar la página si no estamos en la última
   };

   const handleSelect = (value) => {
      if (value === "") {
         setRaza(""); // Restablecer el filtro de raza cuando se selecciona "Todos"
      } else {
         setRaza(value);
      }
   };

   const handleSelect2 = (value) => {
      if (value === "") {
         setGenre(""); // Restablecer el filtro de raza cuando se selecciona "Todos"
      } else {
         setGenre(value);
      }
   };

   const handlePrevPage = () => {
      if (page > 1) setPage(prevPage => prevPage - 1); // Decrementar si no estamos en la primera página 
   };

   const handleSearch = (event) => {
      setQuery(event.target.value); // Actualizar el estado 'query' cuando el valor del input cambia
      console.log(event.target.value);
   };

   return (
      <div className="l-container secction__separator">
         <div className="filterSection">
            <div className="filterSection__button">
               <ButtonFilter onSelect={handleSelect} options={['Human', 'Saiyan', 'Namekian', 'Majin', 'Frieza Race', 
               'God', 'Angel', 'Evil', 'Nucleico', 'Nucleico benigno', 'Android', 'Jiren Race']} />
               <ButtonFilter onSelect={handleSelect2} options={['Male', 'Female']} />
            </div>
            <div className="filterSection__input">
               <InputSearch ref={inputRef} text={"Busca a tu personaje Favorito"} onChange={handleSearch} />
            </div>
         </div>
         <div className={`cardSection secction__separator ${clas ? 'gridTrue' : ''}`}>
            {characters && characters.map((char) => (
               <CardCharacter key={char.id} character={char} />
            ))}
         </div>
         <div className="buttonSection secction__separator">
            <ButtonEstandar className={`fa-solid fa-arrow-left-long`} text={"Anterior"} onClick={handlePrevPage} disabled={page === 1} />
            <ButtonEstandar className={`fa-solid fa-arrow-right`} text={"Siguiente"} onClick={handleNextPage} disabled={page === totalPages}/>
         </div>
      </div>
   );
};

export default Characters;
import { useState, useRef } from "react";
import CardCharacter from "../molecules/CardCharacter";
import CharacterInfo from "../molecules/CharacterInfo";
import FilterButtons from "./FilterButtons";
import InputSearch from "../atoms/InputSearch";
import PaginationButtons from "../organisms/PaginationButtons";
import useInformation from "../../../hook.js/useInformation";

const Characters = () => {
  const [query, setQuery] = useState("");
  const [raza, setRaza] = useState("");
  const [genre, setGenre] = useState("");
  const [info, setInfo] = useState({}); // Cambiamos el estado a un objeto para manejar múltiples personajes
  const inputRef = useRef(null);
  const [page, setPage] = useState("");

  const endpoint = `/characters`;
  const characters = useInformation({ endpoint, genre, race: raza, query, page });

  const handleSearch = (event) => {
    setQuery(event.target.value); // Actualiza el estado del query con el valor del input
  };

  const handleInfoToggle = (id) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [id]: !prevInfo[id] // Cambia el estado para el personaje con el id específico
    }));
  };

  return (
    <>
      <div className="l-container secction__separator">
        <div className="filterSection">
          <FilterButtons setRaza={setRaza} setGenre={setGenre} />
          <InputSearch ref={inputRef} text="Search..." onChange={handleSearch} />
        </div>
        <div className={`cardSection secction__separator ${query ? 'gridTrue' : ''}`}>
          {Array.isArray(characters) && characters.length > 0 ? (
            characters.map((char) => (
              <CardCharacter
                key={char.id}
                character={char}
                onclick={() => handleInfoToggle(char.id)} // Pasa el id del personaje
              />
            ))
          ) : (
            <p>No characters found</p>
          )}
        </div>
        <PaginationButtons setPages={setPage} />
      </div>
      <div>
        {Array.isArray(characters) && characters.length > 0 ? (
          characters.map((char) => (
            <CharacterInfo
              key={char.id}
              id ={char.id}
              // Aqui del estado info se accede a la posición en la cual esta guardada el ID 
              info={info[char.id] || false} // Obtiene el estado de visibilidad del personaje
              setInfo={() => handleInfoToggle(char.id)} // Cambia el estado de visibilidad del personaje
            />
          ))
        ) : (
          <p>No characters found</p>
        )}
      </div>
    </>
  );
};

export default Characters;
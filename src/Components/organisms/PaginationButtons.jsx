import { useState, useEffect } from "react";
import ButtonEstandar from "../atoms/ButtonEstandar";
import axios from "axios";
import { API_URL } from "../../../env";

const PaginationButtons = ({ setPages }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Inicialmente se establece en 1 para evitar errores

  // Llama al hook y extrae la información necesaria

  // Usa useEffect para actualizar totalPages cuando pagesData cambia
  useEffect(() => {
   const fetchCharacters = async () => {
      try {
        let url = `${API_URL}/characters`;
        const response = await axios.get(url);
        setTotalPages(response.data.meta.totalPages);
        console.log(response.data.meta.totalPages)
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
  }, []);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page+1);
      setPages(page+1) 
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setPages(page - 1)
    }
  };


  return (
    <div className="buttonSection secction__separator">
      <ButtonEstandar
        className="fa-solid fa-arrow-left-long"
        text={"Anterior"}
        onClick={handlePrevPage}
        disabled={page === 1}
      />
      <ButtonEstandar
        className="fa-solid fa-arrow-right"
        text={"Siguiente"}
        onClick={handleNextPage}
        disabled={page === totalPages}
      />
    </div>
  );
};

export default PaginationButtons;
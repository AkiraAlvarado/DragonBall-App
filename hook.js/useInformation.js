import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../env";

const useInformation = ({ endpoint, genre, race, query, page }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let url = `${API_URL}${endpoint}`;
        const params = {};
        if (genre) {
          params.gender=genre
          params.page = 1
        }
        if (race){
          params.page=1
          params.race=race
        }
        if(query){
          params.name=query
          params.page=1
        }
        if(page>=2){ params.page = page}  
        const response = await axios.get(url, { params });
        setData(response.data.items || response.data);
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
  }, [endpoint, genre, race, query, page]);

  return data;
};

export default useInformation;
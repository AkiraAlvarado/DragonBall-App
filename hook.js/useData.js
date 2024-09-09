import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../env";

const useInformation = ({ endpoint, id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let url = `${API_URL}${endpoint}/${id}`;
        const response = await axios.get(url)
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
  }, [endpoint, id]);

  return data;
};

export default useInformation;
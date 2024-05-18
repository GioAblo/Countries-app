import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../App';

const useCountries = () => {
  const { setError, search } = useContext(AppContext);
  const [countries, setCountries] = useState([]);

  const getCountriesByRegion = async () => {
    try {
      let response;
      if (
        search === "Asia" ||
        search === "Africa" ||
        search === "South America" ||
        search === "North America" ||
        search === "Europe" ||
        search === "Oceania"
      ) {
        response = await axios.get(`https://restcountries.com/v3.1/region/${search}`);
      } else {
        response = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
      }
      setCountries(response.data);
      setError("");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("There is no such country!");
        setCountries([]);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (search) {
      getCountriesByRegion();
    } else {
      // If no search query, fetch all countries
      axios.get("https://restcountries.com/v3.1/all")
        .then((res) => {
          setCountries(res.data);
          setError("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [search]);

  return countries;
};

export default useCountries;
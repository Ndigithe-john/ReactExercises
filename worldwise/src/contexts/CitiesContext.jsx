import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an error loading data");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(cityId) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${cityId}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("There was an error loading city data");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, getCity, currentCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

const useCities = () => {
  const value = useContext(CitiesContext);
  if (value === undefined)
    throw new Error("CitiesContext was used outside the cities provider");
  return value;
};

CitiesProvider.propTypes = {
  children: PropTypes.any,
};

export { CitiesProvider, useCities };

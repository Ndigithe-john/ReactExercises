import PropTypes from "prop-types";

import Spinner from "@components/Spinner/Spinner";
import CountryItem from "./CountryItem";

import styles from "./CountryList.module.css";
import Message from "@components/Message";

const CountryList = ({ cities, isLoading }) => {
  console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="add your first city by clicking on the map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { county: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);
  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

CountryList.propTypes = {
  cities: PropTypes.object,
  isLoading: PropTypes.bool,
};
export default CountryList;

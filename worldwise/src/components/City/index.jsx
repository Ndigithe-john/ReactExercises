import PropTypes from "prop-types";

import Spinner from "@components/Spinner/Spinner";
import CityItem from "./CityItem";

import styles from "./CityList.module.css";
import Message from "@components/Message";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="add your first city by clicking on the map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.object,
  isLoading: PropTypes.bool,
};
export default CityList;

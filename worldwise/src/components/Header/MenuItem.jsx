import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MenuItem({ url, label }) {
  return (
    <li>
      <Link to={url}>{label}</Link>
    </li>
  );
}

MenuItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
};
export default MenuItem;

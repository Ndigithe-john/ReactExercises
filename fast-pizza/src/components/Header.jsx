import SearchOrder from "@features/order/SearchOrder";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />

      <p>John</p>
    </header>
  );
}

export default Header;

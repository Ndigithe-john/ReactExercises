import "../index.css";
import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";

const Navbar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Search />
      <Logo />
      <NumResults movies={movies} />
    </nav>
  );
};
export default Navbar;

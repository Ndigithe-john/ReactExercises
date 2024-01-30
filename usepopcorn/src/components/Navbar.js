import "../index.css";
import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Search />
      <Logo />
      <NumResults />
    </nav>
  );
};
export default Navbar;

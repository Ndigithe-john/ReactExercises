import { useRef } from "react";
import "../index.css";
import { useKey } from "./useKey";

const Search = ({ query, setQuery }) => {
  const inputElement = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.focus();
    setQuery("");
  });
  return (
    <input
      ref={inputElement}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;

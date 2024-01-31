import "../index.css";
import WatchedBox from "./WatchedBox";
import ListBox from "./ListBox";

function Main({ movies }) {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
}
export default Main;

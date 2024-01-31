import "../index.css";
import WatchedBox from "./WatchedBox";

function Main({ children }) {
  return (
    <main className="main">
      {children}
      <WatchedBox />
    </main>
  );
}
export default Main;

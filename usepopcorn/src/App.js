import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import Loader from "./components/Loader";
import Error from "./components/Error";
import tempMovieData from "./data.js/tempMovieData";
import tempWatchedData from "./data.js/tempWatchedData";
const KEY = "308c28b2";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=hjklkjh`
        );
        console.log(res);
        if (!res.ok) {
          throw new Error("something went wrong while fetching movies");
        }
        const data = await res.json();
        console.log(data);
        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        setMovies(data.Search);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        {/* <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          }
        /> */}
        <Box>
          {/* {isLoading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : (
            <MovieList movies={movies} />
          )} */}
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <Error message={error} />}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}

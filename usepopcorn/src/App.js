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
import SelectedMovie from "./components/SelectedMovie";
const KEY = "308c28b2";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Game of thrones");
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // useEffect(() => {
  //   console.log("After Initial Render ");
  // }, []);
  // useEffect(() => {
  //   console.log("After Every Render");
  // });
  // console.log("During Render");
  // useEffect(() => {
  //   console.log("After Query Change");
  // }, [query]);
  function handleSelectedMovie(movieID) {
    setSelectedId((selectedID) => (movieID === selectedID ? null : movieID));
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }
  function handleAddWatched(movie) {
    setWatched([...watched, movie]);
  }
  function handleDeleteWatched(movieID) {
    setWatched((watched) =>
      watched.filter((movie) => movie.imdbID !== movieID)
    );
  }
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok) {
          throw new Error("something went wrong while fetching movies");
        }
        const data = await res.json();
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
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();
  }, [query]);

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
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
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              handleSelectedMovie={handleSelectedMovie}
            />
          )}
          {error && <Error message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

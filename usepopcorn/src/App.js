import { useState } from "react";
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
import { useMovies } from "./components/useMovies";
import { useLocalStorageState } from "./components/useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectedMovie(movieID) {
    setSelectedId((selectedID) => (movieID === selectedID ? null : movieID));
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }
  function handleAddWatched(movie) {
    setWatched([...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }
  function handleDeleteWatched(movieID) {
    setWatched((watched) =>
      watched.filter((movie) => movie.imdbID !== movieID)
    );
  }

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

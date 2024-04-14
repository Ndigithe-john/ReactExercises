import { useEffect, useState } from "react";
const KEY = "308c28b2";
const SelectedMovie = ({ selectedId, onCloseMovie }) => {
  const [movie, setMovie] = useState({});
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actor: actor,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await response.json();
      setMovie(data);
    }
    getMovieDetails();
  }, []);
  return (
    <div className="details">
      <headr>
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>
        <img src={poster} alt={title} />
      </headr>
      {selectedId}
    </div>
  );
};

export default SelectedMovie;

import { useEffect, useState } from "react";
import StarRating from "./StarRating";
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
  }, [selectedId]);
  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>
        <img src={poster} alt={title} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐</span> {imdbRating} IMDb rating
          </p>
        </div>
      </header>
      <section>
        <div className="rating">
          <StarRating maxRating={10} size={18} />
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actor}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  );
};

export default SelectedMovie;

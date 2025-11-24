import MovieContext from "../context/MovieContext";
import { useContext, useEffect } from "react";
import MovieCard from "../components/MovieCard.jsx";

const SavedList = ({ title, className }) => {
  const { savedMovies, getSavedMovies } = useContext(MovieContext);

  useEffect(() => {
    getSavedMovies();
  }, []);

  return (
    <div
      className={
        className ? className + " flex flex-col" : "w-93.5 flex flex-col"
      }
    >
      <p className="font-semibold">{title}</p>
      <div className="max-w-full overflow-x-scroll flex gap-5 pt-5">
        {savedMovies.map((movie, idx) => (
          <MovieCard
            className="shrink-0 w-44.25 h-65.75"
            key={idx}
            poster={movie.poster}
            name={movie.title}
            movieId={movie.movie_id}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedList;

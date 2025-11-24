import MovieContext from "../context/MovieContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Poster } from "./ui/Poster";

const MovieCardSearch = ({ poster, name, movieId }) => {
  const { getMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleClick = async (id) => {
    await getMovie(id);
    navigate("/movies/movie/" + id);
  };

  return (
    <div
      onClick={() => {
        handleClick(movieId);
      }}
      className="shrink-0 flex justify-between items-center w-full h-full rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="w-1/2 flex justify-center">
        <Poster className="w-30 h-18" src={poster} alt={name + " Poster"} />
      </div>
      <div className="w-1/2 flex justify-center">
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};

export default MovieCardSearch;

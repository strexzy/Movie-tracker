import { useNavigate } from "react-router";

const MovieCard = ({ poster, name, movieId }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/movies/movie/" + id);
  };

  return (
    <div
      onClick={() => {
        handleClick(movieId);
      }}
      className="relative w-49 h-71.75 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:-translate-y-2 transition duration-200 ease-in"
    >
      <img
        className="w-full h-full object-cover"
        src={poster}
        alt={name + " Poster"}
      />
      <div className="absolute top-3 left-3.5 right-0 text-white">
        <p className="">⭐ 8.7</p> {/* No rating on api*/}
      </div>
    </div>
  );
};

export default MovieCard;

import MovieContext from "../context/MovieContext";
import { useContext, useState, useEffect } from "react";
import Flag from "../assets/flag.svg";
import FlagChecked from "../assets/flagChecked.svg";
import FlagRemove from "../assets/flagRemove.svg";

const SaveButton = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [buttonProps, setButtonProps] = useState({
    flag: Flag,
    text: "Add to watchlist",
  });
  const { movie, savedMovies, errorMovieMessage, saveMovie, deleteSavedMovie } =
    useContext(MovieContext);

  const handleClick = async () => {
    if (isSaved) {
      deleteSavedMovie(movie.id);
      if (!errorMovieMessage) {
        setIsSaved(false);
        setButtonProps({
          flag: Flag,
          text: "Add to watchlist",
        });
      } else {
        alert("Error while deliting from favorite");
      }
    } else {
      saveMovie(movie);
      if (!errorMovieMessage) {
        setIsSaved(true);
        setButtonProps({
          flag: FlagChecked,
          text: "Added to watch list",
        });
        setTimeout(() => {
          setButtonProps({ flag: FlagRemove, text: "Remove movie/series" });
        }, 3000);
      } else {
        alert("Error while saving");
      }
    }
  };

  useEffect(() => {
    savedMovies.forEach((savedMovie) => {
      if (savedMovie.movie_id == movie.id) {
        setIsSaved(true);
        setButtonProps({ flag: FlagRemove, text: "Remove movie/series" });
      }
    });
  }, []);

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className="w-49.25 h-11.25 rounded-[30px] bg-input-gray flex justify-center items-center gap-2.5 cursor-pointer"
    >
      <img src={buttonProps.flag} alt="" className="" />
      <p className="">{buttonProps.text}</p>
    </div>
  );
};

export default SaveButton;

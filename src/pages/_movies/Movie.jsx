import MovieContext from "../../context/MovieContext";
import { useContext } from "react";
import { Title } from "../../components/ui/Title";
import { Poster } from "../../components/ui/Poster";
import SaveButton from "../../components/SaveButton";
import GenreList from "../../components/GenreList";
import { VideoPlayer } from "../../components/ui/VideoPlayer";
import { Article } from "../../components/ui/Article";
import { Rating } from "../../components/ui/Rating";

const Movie = () => {
  const { movie } = useContext(MovieContext);

  return (
    <main className="grow flex flex-col">
      {movie.notLoaded ? (
        "Loading"
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <Title className="text-left">{movie.title}</Title>
            <SaveButton />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <Poster className="w-49 h-72.75" src={movie.poster} />
              <div className="max-w-100 flex flex-wrap flex-col gap-5">
                <GenreList genres={movie.genres} />
                <Article>{movie.overview}</Article>
                <Rating rating="9.1" reviewsCount="8k" />
              </div>
            </div>
            <VideoPlayer />
          </div>
        </>
      )}
    </main>
  );
};

export default Movie;

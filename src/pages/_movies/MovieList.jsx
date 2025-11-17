import { useEffect, useContext } from "react";
import MovieContext from "../../context/MovieContext";
import MovieCard from "../../components/MovieCard";

const MovieList = () => {
  const { trending, getTrending } = useContext(MovieContext);

  useEffect(() => {
    getTrending();
    console.log(trending);
  }, []);

  return (
    <main className="grow overflow-y-hidden flex flex-col">
      <p className="text-black font-medium text-[15px]">
        Recently trending movies
      </p>
      {trending.length > 0 ? (
        <div className="overflow-scroll flex flex-wrap justify-center gap-5 mt-4.25 pb-5">
          {trending.map((movie) => (
            <MovieCard key={movie.id} name={movie.name} poster={movie.poster} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="">Loading content...</h1>
        </div>
      )}
    </main>
  );
};

export default MovieList;

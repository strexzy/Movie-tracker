import MovieCardSearch from "./MovieCardSearch";

const MovieSearchList = ({ search, visibilityChanger }) => {
  return (
    <div className="absolute z-10">
      <div
        className="fixed left-0 w-full -z-10 h-screen bg-black-transparent"
        onClick={() => {
          visibilityChanger(false);
        }}
      ></div>
      <div className="z-20 w-157.5 max-h-100 overflow-scroll scroll-smooth bg-input-gray rounded-2xl flex flex-col justify-start gap-2 py-3 mt-3">
        {search.map((movie, idx) => {
          return (
            <MovieCardSearch
              key={idx}
              poster={movie.poster}
              name={movie.title}
              movieId={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieSearchList;

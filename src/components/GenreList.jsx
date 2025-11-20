import { Genre } from "./ui/Genre";

const GenreList = ({ genres }) => {
  return (
    <div className={"max-w-100 flex gap-5"}>
      {genres.map((genre, idx) => {
        if (idx < 3)
          return (
            <Genre key={idx}>
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </Genre>
          );
      })}
    </div>
  );
};

export default GenreList;

import { Input } from "./ui/Input";
import { useForm } from "react-hook-form";
import MovieContext from "../context/MovieContext";
import { useContext, useState } from "react";
import MovieSearchList from "./MovieSearchList";

const SearchBar = () => {
  const { search, getSearch } = useContext(MovieContext);
  const [isVisible, setIsVisible] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ searchField }) => {
    getSearch(searchField.trim());
    setIsVisible(true);
  };

  return (
    <div className="w-157.5">
      <form className="relative" onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="🔍 Search a movie or a series"
          {...register("searchField")}
        />
        {isVisible && (
          <MovieSearchList
            className="absolute"
            visibilityChanger={setIsVisible}
            search={search}
          />
        )}
      </form>
    </div>
  );
};

export default SearchBar;

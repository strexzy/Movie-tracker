import axios from "axios";
import { createContext, useEffect, useState } from "react";

const MovieContext = createContext(null);

export const MovieProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState([]);
  const [movie, setMovie] = useState({});
  const [errorMovieMessage, setErrorMovieMessage] = useState("");

  const getTrending = async () => {
    const url = "http://localhost:4000/api/movies/trending";
    try {
      const response = await axios.get(url);
      setTrending(response.data.results);
    } catch (error) {
      const errorResponse = await error.response.data;
      setErrorMovieMessage(errorResponse.message);
    }
  };

  const getSearch = async (queryParameter) => {
    const url =
      "http://localhost:4000/api/movies/search?query=" + queryParameter;
    try {
      const response = await axios.get(url);
      setSearch(response.data);
    } catch (error) {
      const errorResponse = await error.response.data;
      setErrorMovieMessage(errorResponse.message);
    }
  };

  const getMovie = async (movieId) => {
    const url = "http://localhost:4000/api/movies/details/" + movieId;
    try {
      const response = await axios.get(url);
      setMovie(response.data);
    } catch (error) {
      const errorResponse = await error.response.data;
      setErrorMovieMessage(errorResponse.message);
    }
  };

  const saveMovie = async (movieData) => {
    const url = "http://localhost:4000/api/movies/save";
    try {
      const response = await axios.post(url, movieData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
    } catch (error) {
      const errorResponse = await error.response.data;
      setErrorMovieMessage(errorResponse.message);
    }
  };

  const deleteSavedMovie = async (movieId) => {
    const url = "http://localhost:4000/api/movies/saved/" + movieId;
    try {
      const response = await axios.delete(url);
      console.log(response);
    } catch (error) {
      const errorResponse = await error.response.data;
      setErrorMovieMessage(errorResponse.message);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        trending,
        search,
        movie,
        errorMovieMessage,
        getTrending,
        getSearch,
        getMovie,
        saveMovie,
        deleteSavedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;

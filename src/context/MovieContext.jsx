import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";

const MovieContext = createContext(null);

export const MovieProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState([]);
  const [movie, setMovie] = useState({ notLoaded: true });
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMovieMessage, setErrorMovieMessage] = useState(null);

  const { isAuth } = useContext(AuthContext);

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
      setSearch(response.data.results);
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

  const saveMovie = async ({ id, title, year, poster }) => {
    const url = "http://localhost:4000/api/movies/save";
    try {
      const response = await axios.post(
        url,
        { movie_id: id, title, year, poster },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response);
    } catch (error) {
      const errorResponse = await error.response.data;
      setErrorMovieMessage(errorResponse.message);
      console.log(errorResponse);
    }
  };

  const getSavedMovies = async () => {
    const url = "http://localhost:4000/api/mymovies";
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      setSavedMovies(response.data.movies);
    } catch (error) {
      const errorResponse = await error.response.data;
      setErrorMovieMessage(errorResponse.message);
    }
  };

  const deleteSavedMovie = async (movieId) => {
    const url = "http://localhost:4000/api/movies/" + movieId;
    try {
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      const errorResponse = await error.response.data;
      setErrorMovieMessage(errorResponse.message);
    }
  };

  useEffect(() => {
    getSavedMovies();
  }, [isAuth]);

  return (
    <MovieContext.Provider
      value={{
        trending,
        search,
        movie,
        savedMovies,
        errorMovieMessage,
        getTrending,
        getSearch,
        getMovie,
        getSavedMovies,
        saveMovie,
        deleteSavedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;

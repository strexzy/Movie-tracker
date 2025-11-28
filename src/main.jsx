import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./pages/_root/RootLayout.jsx";
import ErrorFh from "./pages/_error/ErrorFh.jsx";
import Home from "./pages/_root/Home.jsx";
import AuthLayout from "./pages/_auth/AuthLayout.jsx";
import SignIn from "./pages/_auth/SignIn.jsx";
import SignUp from "./pages/_auth/SignUp.jsx";
import MoviesLayout from "./pages/_movies/MoviesLayout.jsx";
import MovieList from "./pages/_movies/MovieList.jsx";
import Movie from "./pages/_movies/Movie.jsx";
import Watching from "./pages/_movies/Watching.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";

const router = createBrowserRouter([
  {
    path: "*",
    Component: ErrorFh,
  },
  {
    path: "/",
    Component: RootLayout,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      { index: true, Component: SignIn },
      { path: "register", Component: SignUp },
    ],
  },
  {
    path: "movies",
    Component: MoviesLayout,
    children: [
      { index: true, path: "trending", Component: MovieList },
      { path: "movie/:movieId", Component: Movie },
      { path: "watching", Component: Watching },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MovieProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </MovieProvider>
    </AuthProvider>
  </StrictMode>,
);

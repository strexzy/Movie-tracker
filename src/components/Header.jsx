import Logo from "../assets/logo.svg";
import SearchBar from "./SearchBar.jsx";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className=" flex justify-between items-center py-10">
      <NavLink to="/">
        <img src={Logo} alt="Movie tracker logo" className=" w-32.5 h-26.5" />
      </NavLink>
      <SearchBar />
      <nav className=" flex items-center gap-10">
        <NavLink
          to="/movies/trending"
          className={({ isActive }) =>
            isActive ? " font-medium text-xl text-black" : " text-gray-500"
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/movies/watching"
          className={({ isActive }) =>
            isActive ? " font-medium text-xl text-black" : " text-gray-500"
          }
        >
          Watching
        </NavLink>
        <NavLink
          to="/preferences"
          className={({ isActive }) =>
            isActive ? " font-medium text-xl text-black" : " text-gray-500"
          }
        >
          Preferences
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

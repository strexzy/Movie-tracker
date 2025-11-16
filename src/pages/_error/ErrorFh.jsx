import { Link } from "react-router";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import Header from "../../components/Header.jsx";
import { Title } from "../../components/ui/Title.jsx";
import NotFoundImg from "../../assets/notFound.svg";

const ErrorFh = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <section className="h-full w-full max-w-7xl mx-auto flex flex-col">
      <Header />
      <main className=" grow flex flex-col justify-start items-center">
        <img src={NotFoundImg} alt="404 Icon" className="w-50 mt-25" />
        <Title className="text-center text-3xl font-bold">
          Seems that page you are looking for doesn't exist...
        </Title>
        <Link
          className="mt-25 text-3xl bg-input-gray p-4 rounded-2xl"
          to={isAuth ? "/" : "/auth"}
        >
          Back to homepage
        </Link>
      </main>
    </section>
  );
};

export default ErrorFh;

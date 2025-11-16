import { Outlet } from "react-router";
import LogoReg from "../../assets/logoReg.svg";
import AuthContext from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";

const AuthLayout = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <section className="flex flex-row-reverse">
      <div className="w-1/2 h-screen flex flex-col justify-center items-center bg-input-gray">
        <div className="h-9/10 flex flex-col justify-center items-center">
          <img src={LogoReg} alt="Company logo" className="" />
        </div>
        <p className="font-medium">Built with ❤️ by Strxzy </p>
      </div>
      <Outlet />
    </section>
  );
};

export default AuthLayout;

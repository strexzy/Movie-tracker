import { Input } from "../../components/ui/Input.jsx";
import { AuthButton } from "../../components/ui/AuthButton.jsx";
import { ErrorMsg } from "../../components/ui/ErrorMsg.jsx";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext.jsx";

const SignIn = () => {
  const { isAuth, authorizeUser, errorMessage } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await authorizeUser(data.username, data.password);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <div className="w-1/2 flex flex-col justify-center items-center">
      <div>
        <h1 className="mb-10 text-6xl text-center font-bold text-black">
          SIGN IN
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="w-full flex flex-col items-center gap-3.75"
        >
          <Input
            {...register("username", {
              required: { value: true, message: "Username is required" },
              pattern: {
                value: /^[a-zA-Z0-9_]{3,16}$/,
                message:
                  "Username must be 3–16 characters and contain only letters, numbers, or _",
              },
            })}
            placeholder="Enter your login"
            className="max-w-98.25"
            autoComplete="username"
          />
          {errors.username && <ErrorMsg>{errors.username.message}</ErrorMsg>}
          <Input
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Enter your password"
            type="password"
            className="max-w-98.25"
            autoComplete="current-password"
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}
          <AuthButton
            disabled={!isValid || isSubmitting ? true : false}
            className={isValid ? "mt-10" : "mt-10 opacity-50"}
            type="submit"
          >
            Login
          </AuthButton>
        </form>
        <NavLink to="register">
          <p className="mt-3.75 text-[15px] text-transparent-gray">
            You don’t have an account?{" "}
            <span className="font-medium">SignUp</span>
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default SignIn;

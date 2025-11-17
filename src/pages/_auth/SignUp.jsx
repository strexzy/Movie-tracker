import { Input } from "../../components/ui/Input.jsx";
import { AuthButton } from "../../components/ui/AuthButton.jsx";
import { ErrorMsg } from "../../components/ui/ErrorMsg.jsx";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../context/AuthContext.jsx";

const SignUp = () => {
  const { registerUser, errorAuthMessage } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange" });

  const passwordValue = watch("password");

  const onSubmit = async (data) => {
    await registerUser(
      data.username,
      data.email,
      data.password,
      data.confirmPassword,
    );
  };

  return (
    <div className="w-1/2 flex flex-col justify-center items-center">
      <div>
        <h1 className="mb-10 text-6xl text-center font-bold text-black">
          SIGN UP
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
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Enter your email"
            className="max-w-98.25"
            autoComplete="email"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
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
          <Input
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Password confirmation is required",
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
            placeholder="Repeat your password"
            type="password"
            className="max-w-98.25"
            autoComplete="current-password"
          />
          {errors.confirmPassword && (
            <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>
          )}
          {errorAuthMessage && <ErrorMsg>{errorAuthMessage}</ErrorMsg>}
          <AuthButton
            disabled={!isValid || isSubmitting ? true : false}
            className={isValid ? "mt-10" : "mt-10 opacity-50"}
            type="submit"
          >
            Register
          </AuthButton>
        </form>
        <NavLink to="/auth">
          <p className="mt-3.75 text-[15px] text-transparent-gray">
            Already have an account? <span className="font-medium">SignIn</span>
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default SignUp;

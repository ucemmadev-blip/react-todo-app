import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login-hero.png";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Login() {
  const { login } = useAuth();
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setAuthError("");
      await login(data.email, data.password);
      console.log("User logged in successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      setAuthError("Invalid email or password.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4 py-8">
      <div className="w-full max-w-6xl flex flex-col-reverse gap-10 md:flex-row md:items-center">
        <div className="w-full md:w-1/2 max-w-md mx-auto">
          {authError && (
            <p className="text-red-500 text-sm mb-3">{authError}</p>
          )}
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <p className="text-gray-600 mb-6">
            Welcome back! Please enter your credentials to access your account.
          </p>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Enter Email"
                className="w-full border dark:border-slate-600 rounded-md py-4 px-3 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                })}
                placeholder="Enter Password"
                className="w-full border dark:border-slate-600 rounded-md py-4 px-3 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#FF6767] text-white rounded-lg"
              >
                Login
              </button>
            </div>
            <p className="text-sm text-gray-700">
              Don't have an account?
              <span
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <img
            src={loginImage}
            alt="login-img"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

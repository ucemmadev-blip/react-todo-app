import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login-hero.png";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      console.log("User logged in successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div>
      <div className="flex h-screen justify-between mx-10 mt-15 gap-4 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <p className="text-gray-600 mb-6">
            Welcome back! Please enter your credentials to access your account.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter Email"
              className="w-2xl border dark:border-slate-600 rounded-md py-4.5 px-2 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter Password"
              className="w-2xl border dark:border-slate-600 rounded-md py-4.5 px-2 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 "
            />
            {/* <label htmlFor="terms" className="text-gray-600">
              <input type="checkbox" />
              Remember Me
            </label> */}

            <div className="mb-5">
              <button
                type="submit"
                className="px-4 py-2 bg-[#FF6767] text-white rounded-lg"
              >
                Login
              </button>
            </div>
            <p>
              Don't have an account?
              <span
                href="/login"
                className="text-blue-500 hover:underline"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
        <div>
          <img src={loginImage} alt="login-img" />
        </div>
      </div>
    </div>
  );
}

export default Login;

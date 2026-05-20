import { data, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import signupImage from "../assets/signup-hero.png";
import { useForm } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { first, last } from "firebase/firestore/pipelines";

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signup } = useAuth();

  const onSubmit = async (data) => {
    try {
      const userCredential = await signup(data.email, data.password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        createdAt: new Date().toISOString(),
      });
      console.log("User signed up successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4 py-8">
      <div className="w-full max-w-6xl flex flex-col-reverse gap-10 md:flex-row md:items-center">
        <div className="w-full md:w-1/2 max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-4">Sign up</h1>
          <p className="text-gray-600 mb-6">
            Create an account to manage your tasks and boost your productivity!
          </p>

          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                {...register("firstName", {
                  required: "First name is required",
                })}
                placeholder="Enter First Name"
                className="w-full border dark:border-slate-600 rounded-md py-4 px-3 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Enter Last Name"
                className="w-full border dark:border-slate-600 rounded-md py-4 px-3 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register("username", { required: "Username is required" })}
                placeholder="Enter Username"
                className="w-full border dark:border-slate-600 rounded-md py-4 px-3 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
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
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
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

            <div>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                placeholder="Confirm Password"
                className="w-full border dark:border-slate-600 rounded-md py-4 px-3 bg-transparent mb-5 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#FF6767] text-white rounded-lg"
              >
                Register
              </button>
            </div>
            <p className="text-sm text-gray-700">
              Already have an account?
              <span
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </form>
        </div>

        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <img
            src={signupImage}
            alt="signup-img"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;

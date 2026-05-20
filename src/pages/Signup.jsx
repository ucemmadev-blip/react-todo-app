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
    <div>
      <div className="flex h-screen justify-between mx-10 mt-15 gap-4">
        <div>
          <img src={signupImage} alt="signup-img" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Sign up</h1>
          <p className="text-gray-600 mb-6">
            Create an account to manage your tasks and boost your productivity!
          </p>

          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              placeholder="Enter First Name"
              className="w-2xl border dark:border-slate-600 rounded-md py-4.5 px-2 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Enter Last Name"
              className="w-2xl border dark:border-slate-600 rounded-md py-4.5 px-2 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              placeholder="Enter Username"
              className="w-2xl border dark:border-slate-600 rounded-md py-4.5 px-2 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter Email"
              className="w-2xl border dark:border-slate-600 rounded-md py-4.5 px-2 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter Password"
              className="w-2xl border dark:border-slate-600 rounded-md py-4.5 px-2 bg-transparent mb-3 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
              placeholder="Confirm Password"
              className="w-2xl border dark:border-slate-600 rounded-md py-4.5 px-2 bg-transparent mb-5 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />

            <div className="mb-5">
              <button
                type="submit"
                className="px-4 py-2 bg-[#FF6767] text-white rounded-lg"
              >
                Register
              </button>
            </div>
            <p>
              Already have an account?
              <span
                href="/login"
                className="text-blue-500 hover:underline"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

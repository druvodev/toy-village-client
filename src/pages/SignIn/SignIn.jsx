import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = () => {
  const { SignInUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    document.title = "ToyVillage || Sign In";
  }, []);

  // SignIn with email and password
  const handleEmailSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Automatic remove error message
    if (error) {
      setTimeout(() => {
        setError("");
      }, 5000);
    }

    // SignIn user with email and password and error checking
    SignInUser(email, password)
      .then(() => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          return setError("Sorry, your password is incorrect!");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          return setError(
            "Email not found. Please try again or create a new account!"
          );
        } else {
          setError(error.message);
        }
      });
    setLoading(false);
  };

  // Sign In with Google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="mx-auto py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        SignIn Your Account
      </h1>
      <form
        onSubmit={handleEmailSignIn}
        className="w-full max-w-3xl mx-auto bg-white p-4 sm:p-8 rounded-md sm:shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            type="email"
            id="email"
            name="email"
            placeholder="xxxxx@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <div className="w-full flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus-within:border-pink-500">
            <input
              className="outline-none w-full"
              type={isShow ? "text" : "password"}
              id="password"
              name="password"
              placeholder="******"
              required
            />
            {isShow ? (
              <FaEye
                onClick={() => setIsShow(false)}
                className="w-5 h-5 text-gray-400"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setIsShow(true)}
                className="w-5 h-5 text-gray-400"
              />
            )}
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="mr-2"
            />
            <label htmlFor="remember-me" className="text-gray-500">
              Remember me
            </label>
          </div>
          <button className="font-semibold">Forgot Password?</button>
        </div>
        <p className="h-6">
          {error && (
            <small className="text-red-500 flex items-center gap-1">
              <CgDanger /> {error}
            </small>
          )}
        </p>
        <button
          className="w-full bg-pink-500 text-white text-lg font-bold py-3 px-4 my-2 rounded-md hover:bg-pink-600 transition duration-300"
          type="submit"
        >
          SignIn
        </button>
        <div className="divider">OR</div>
        <ul className="flex gap-5 items-center justify-center mt-1 mb-4">
          <li
            onClick={() => handleGoogleSignIn()}
            className="w-full px-4 py-3 rounded-md shadow-md shadow-pink-200 border border-pink-100 flex
            hover:bg-gray-100 justify-center"
          >
            <img
              className="h-8"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png"
              alt="logo"
            />
          </li>
        </ul>
        <hr />
        <p className="text-center mt-2">
          Don't you have an account yet?{" "}
          <span className="text-pink-500 font-semibold underline underline-offset-2">
            <Link to={"/signUp"}>SignUp</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;

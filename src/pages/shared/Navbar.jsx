import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [signIn, setSignIn] = useState(location.pathname === "/signIn");

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  console.log(user);
  return (
    <div className="navbar h-[80px] border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to={"/toys"}>All Toys</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to={`/myToys/${user?.email}`}>My Toys</Link>
                </li>
                <li>
                  <Link to={"/addToy"}>Add Toy</Link>
                </li>
              </>
            ) : (
              ""
            )}
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <img
            className="h-full hidden sm:block"
            src="https://i.ibb.co/dfdrhxx/image-1.png"
            alt=""
          />
          Toy<span className="text-pink-500">Village</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to={"/toys"}>All Toys</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to={`/myToys/${user?.email}`}>My Toys</Link>
              </li>
              <li>
                <Link to={"/addToy"}>Add Toy</Link>
              </li>
            </>
          ) : (
            ""
          )}
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end  ">
        {user ? (
          <div className="flex gap-3">
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full profileTooltip">
                <img
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/Ws1r9fp/images.png"
                  }
                />
                <Tooltip anchorSelect=".profileTooltip" place="left">
                  {user?.displayName}
                </Tooltip>
              </div>
            </div>
            <span
              onClick={() => logOut()}
              className="bg-rose-50 text-red-500 hover:bg-rose-100 w-12 h-12 text-2xl rounded-full flex items-center justify-center cursor-pointer shadow-md"
            >
              <FiLogOut />
            </span>
          </div>
        ) : !signIn ? (
          <Link
            onClick={() => toggleSignIn()}
            to={"/signIn"}
            className="border border-pink-500 bg-pink-500 text-white font-semibold rounded-md px-4 py-2 text-lg"
          >
            Sign In
          </Link>
        ) : (
          <Link
            onClick={() => toggleSignIn()}
            to={"/signUp"}
            className="border border-pink-500 hover:bg-pink-500 hover:text-white duration-200 font-semibold rounded-md px-4 py-2 text-lg"
          >
            Sign Up
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

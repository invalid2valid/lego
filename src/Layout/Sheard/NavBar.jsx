import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  //   const liList = ["Home", "All Toys", "My Toys", "Add A Toy", "Blogs"];
  // console.log(user?.displayName, user?.photoURL);
  const liList = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "text-[#9BA4B5]" : "text-[#212A3E]"
        }
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#9BA4B5]" : "text-[#212A3E]"
        }
        to={"alltoys"}
      >
        All Toys
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#9BA4B5]" : "text-[#212A3E]"
        }
        to={"blog"}
      >
        Blogs
      </NavLink>
      {user && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#9BA4B5]" : "text-[#212A3E]"
            }
            to={"mytoys"}
          >
            My Toys
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#9BA4B5]" : "text-[#212A3E]"
            }
            to={"addatoy"}
          >
            Add A Toy
          </NavLink>{" "}
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            {liList}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-xl text-[#394867]"
        >
          LE <span className="text-[#9BA4B5]">GO</span> EL
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-10">{liList}</ul>
      </div>
      {user ? (
        <>
          <div className="navbar-end flex  justify-left gap-5 items-center ">
            <img
              className="h-10 rounded-full border-2 border-[#394867] w-10"
              src={user?.photoURL}
              alt="userPhoto"
              data-tooltip-id="username"
              data-tooltip-content={user.displayName}
            />
            <Tooltip place="left" id="username" />
            <button onClick={logOut}> Log out</button>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-end flex  justify-left gap-5 items-center">
            <NavLink
              to={"/login"}
              className={(isActive) => (isActive ? "text-[#9BA4B5]" : "")}
            >
              Log In
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;

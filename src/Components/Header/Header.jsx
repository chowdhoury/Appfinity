import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import './Header.css'

const Header = () => {
  const navLinks = (
                    <>
                      <NavLink to={"/"}>Home</NavLink>
                      <NavLink to={"/apps"}>Apps</NavLink>
                      <NavLink to={"/installation"}>Installation</NavLink>
                    </>
  );
  return (
    <div className="navbar bg-[#FFF] border-b border-[#E9E9E9] lg:px-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="flex gap-1 items-center" to={"/"}>
          <img className="h-10" src={logo} />
          <h2 className="font-bold bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Appfinity
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-8 text-[16px]">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"https://github.com/chowdhoury"}>
          <button className="cursor-pointer flex items-center gap-[10px] rounded-sm bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-[#FFF] px-4 py-3 text-[16px] font-semibold">
            <FaGithub></FaGithub>
            <h2>Contribute</h2>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

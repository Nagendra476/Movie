import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../Images/image2.jpg";

const Navbar = () => {
  const [city, setCity] = useState(["Hyderabad", "KPHB"][1]);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="bg-white shadow-md w-full fixed top-0 z-50">

        {/* FULL WIDTH TOP BAR */}
        <div className="w-full flex items-center justify-between px-4 py-3">

          {/* LEFT - LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={logoImg}
              alt="logo"
              className="h-10 w-10 rounded-full object-cover shadow"
            />
            <h1 className="text-xl font-bold text-red-600 tracking-wide">
              MovieBox
            </h1>
          </div>

          {/* CENTER - SEARCH BAR */}
          <div className="hidden md:flex flex-1 mx-8">
            <input
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports...."
              className="w-full bg-gray-100 px-5 py-2 rounded-lg outline-none text-gray-700 shadow-inner border border-gray-200 focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* RIGHT - CITY + SIGN IN + MENU */}
          <div className="flex items-center gap-5">

            {/* City Selector */}
            <div className="hidden md:flex items-center gap-1 cursor-pointer font-medium text-gray-700 hover:text-red-600 transition">
              <span>{city}</span>
              <span>▼</span>
            </div>

            {/* Sign In Button */}
            <button className="hidden md:block bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 shadow">
              Sign In
            </button>

            {/* Hamburger Menu */}
            <button
              className="md:hidden text-gray-800 text-3xl"
              onClick={() => setIsMobileMenu(!isMobileMenu)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* FULL WIDTH BOTTOM NAV LINKS */}
        <div className="hidden md:flex bg-white border-t text-gray-700 justify-between w-full px-10 py-3 text-sm font-medium">

          {/* LEFT LINKS */}
          <div className="flex gap-8">
            <Link to="/" className="hover:text-red-600 transition">Movies</Link>
            <Link to="/login" className="hover:text-red-600 transition">Login</Link>
            <Link to="/practice" className="hover:text-red-600 transition">Practice</Link>
            <Link to="/employee" className="hover:text-red-600 transition">Employee</Link>
            <Link to="/navbar2" className="hover:text-red-600 transition">Navbar2</Link>
            <Link to="/flag" className="hover:text-red-600 transition">Flag</Link>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex gap-8">
            <Link to="#" className="hover:text-red-600 transition">ListYourShow</Link>
            <Link to="#" className="hover:text-red-600 transition">Corporates</Link>
            <Link to="#" className="hover:text-red-600 transition">Offers</Link>
            <Link to="#" className="hover:text-red-600 transition">Gift Cards</Link>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenu && (
        <div className="md:hidden bg-white shadow-md p-5 space-y-4 text-gray-700 mt-[60px]">

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 px-4 py-2 rounded-md outline-none border border-gray-300"
          />

          <Link to="/" className="block py-2 border-b">Movies</Link>
          <Link to="/practice" className="block py-2 border-b">Practice</Link>
          <Link to="/employee" className="block py-2 border-b">Employee</Link>
          <Link to="/login" className="block py-2 border-b">Login</Link>
          <Link to="/navbar2" className="block py-2 border-b">Navbar2</Link>
          <Link to="/flag" className="block py-2 border-b">Flag</Link>

          <button className="bg-red-500 w-full text-white py-2 rounded-lg shadow mt-2">
            Sign In
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;

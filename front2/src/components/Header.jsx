import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import fucker from "../assets/img/fucker.svg";
import heart from "../assets/img/heart.svg";
import notify from "../assets/img/notify.svg";
import setting from "../assets/img/setting.svg";
import search from "../assets/img/search.svg";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 bg-gray-50 border-b border-gray-300">
      {/* Logo */}
      <Link to="/" className="mb-2 sm:mb-0 flex-shrink-0">
        <img src={logo} alt="Logo" className="h-8" />
      </Link>

      {/* Search Bar */}
      <div className="relative flex items-center w-full sm:max-w-md mb-2 sm:mb-0">
        <input
          type="text"
          placeholder="Search something here"
          className="w-full px-4 py-2 text-gray-700 bg-white border rounded-full outline-none border-gray-300 focus:border-blue-500"
        />
        <Link to="/search" className="absolute right-3">
          <img src={search} alt="Search" className="h-5 w-5 text-gray-500" />
        </Link>
      </div>

      {/* Notification and Profile Icons */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <Link to="/profile" className="relative">
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-full hover:border-gray-400 transition">
            <img src={fucker} alt="Profile" className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        </Link>
        <Link to="/favorites" className="relative">
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-full hover:border-gray-400 transition">
            <img src={heart} alt="Favorites" className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        </Link>
        <Link to="/notifications" className="relative">
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-full hover:border-gray-400 transition">
            <img src={notify} alt="Notifications" className="h-5 w-5 sm:h-6 sm:w-6" />
            <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
          </div>
        </Link>
        <Link to="/settings" className="relative">
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-full hover:border-gray-400 transition">
            <img src={setting} alt="Settings" className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        </Link>
      </div>
    </div>
  );
}

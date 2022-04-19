import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { ROUTES } from "../constant/routes";

const Navbar = () => {
  const { pathname } = useLocation();
  const activeLinkClass = (path) => {
    const active = pathname === path ? "text-blue-700" : "text-gray-700";
    return active;
  };
  return (
    <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Save Up Logo" />
        </a>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className={`block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent ${activeLinkClass(
                  ROUTES.HOME
                )} md:p-0`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.ADD_EXPENSES}
                className={`block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent ${activeLinkClass(
                  ROUTES.ADD_EXPENSES
                )} md:p-0`}
              >
                Add Expenses
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <button className="px-6 py-1 rounded bg-slate-900 text-white text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

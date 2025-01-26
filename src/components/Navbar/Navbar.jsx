import React from "react";
import DarkMode from "./DarkMode";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const menuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blogs",
  },
];

const dropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#trendingproducts",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#bestselling",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#toprated",
  },
];

const Navbar = ({ handlePopup }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-1000 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white 
                                            duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}

                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-2 font-semibold text-gray-500 dark:hover:text-white py-2 "
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-500" />
                    </span>
                  </a>

                  <div
                    className="absolute z-[9999] hidden group-hover:block w-36 rounded-md bg-white shadow-md dark:bg-gray-900 p-2
                                     dark:text-white"
                  >
                    <ul className="space-y-2">
                      {dropdownLinks.map((menu) => (
                        <li key={menu.id}>
                          <a
                            href={menu.link}
                            className="text-gray-500 dark:hover:text-white duration-200 w-full p-2 inline-block hover:bg-primary/20 rounded-md font-semibold"
                          >
                            {menu.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar and right section */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative hidden sm:block group">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary duration-200 absolute top-1/2 -translate-y-1/2 right-3 dark:text-gray-400" />
            </div>

            <button className="relative p-3" onClick={handlePopup}>
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                5
              </div>
            </button>

            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

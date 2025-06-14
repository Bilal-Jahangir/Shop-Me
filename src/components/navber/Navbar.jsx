import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";

const menu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "#",
  },
];
const dropDownList = [
  {
    id: 1,
    name: "Top Trending",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
];
function Navbar({ handleOrderPopUp }) {
  return (
    <div className="shadow-md bg-white dark:bg-text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
            <div>
                <a 
                href="#"
                className="font-bold text-xl items-center flex gap-1">
                    <FiShoppingBag size='30'/>
                    SHOP ME
                </a>
            </div>
            <div className="flex justify-between items-center gap-4">
                <div className="relative group hidden sm:block">
                    <input type="text" 
                    className="w-[200px] group-hover:w-[300px] transition-all
                    duration-300 rounded-lg border-1 border-gray-300 py-1
                    px-2 text-sm focus:outline-none focus:border-1 focus:border-primary
                    dark:border-gray-500 dark:bg-slate-800"/>
                    <IoMdSearch className="txet-slate-800 group-hover:text-primary 
                    absolute top-1/2 -translate-y-1/2 right-3"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

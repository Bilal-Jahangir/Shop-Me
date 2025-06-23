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
                    <button
                    onClick={handleOrderPopUp}
                    className="bg-gradient-to-t from-primary to bg-secondary
                    transition-all duration-200 text-white py-1 px-4
                    rounded-full flex items-center gap-3 group">
                      <span className="group-hover:block hidden
                       transition-all duration-200">
                        Order
                      </span>
                      <FaCartShopping className="text-xl text-white 
                      drop-shadow-sm cursor-pointer"/> 
                    </button>
                    {/* <div>darkmode</div> */}
            </div>
        </div>
      </div>
      <div data-aos='zoom-in' className="flex justify-center ">
        <ul className="sm:flex hidden items-center gap-4">
          {menu.map((data)=>(
            <li
            key={data.id}
            >
              <a href={data.link} 
              className="inline-block px-4 hover:text-primary duration-200">
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown 
                className="transition-all duration-200 group-hover:rotate-180"/>
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px]
            rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {dropDownList.map((data)=>(
                  <li key={data.id}>
                    <a href={data.links}
                    className="inline-block w-full rounded-md py-2 text-black hover:bg-primary/20">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

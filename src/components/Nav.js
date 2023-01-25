import { useState } from "react";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="px-0 flex py-6 justify-between w-[1100px] mr-auto ml-auto items-center">
      <img
        className="w-[224px] h-[52px] cursor-pointer inline object-contain"
        src="./icons_assets/Logo.svg"
        alt="Little Lemon Logo"
      ></img>
      <ul className="list-none sm:flex hidden justify-end items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` font-bold  hover:text-yellow-primary transition-all duration-200 ease-in cursor-pointer text-[18px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-8"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          onClick={() => setToggle((prev) => !prev)}
          src={toggle ? "./icons_assets/close.svg" : "./icons_assets/menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain  bg-black"
        ></img>
      </div> */}
    </nav>
  );
};

export default Nav;

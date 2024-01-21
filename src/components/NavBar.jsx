import React from "react";
import { headerLogo } from "../assets1/images";
import { hamburger } from "../assets1/icons";
import { navLinks } from "../constants";
const NavBar = () => {
  return (
    <header className="padding-x absolute z-10  w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={125} height={30} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label1}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={24} height={24} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

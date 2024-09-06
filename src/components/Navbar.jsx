import React, { useState } from "react";
import Routing from "../utils/Routing";
import '../styles/Navbar.css';
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="w-full h-20 bg-[#172554] navbar fixed z-10">
      <div className="max-w-[80%] h-full mx-auto flex items-center justify-between select-none">
        <h2 className="font-bold text-3xl">Portfolio</h2>
        <div className={`links flex tabbox font-semibold text-md ${isMenuOpen ? "block" : "hidden"} md:flex`}>
          {["Home", "About", "Skill", "Projects", "Contact"].map(
            (elem, index) => (
              <a className="tabicons" key={index} onClick={closeMenu}>{elem}</a>
            )
          )}
        </div>
        <div className="menu md:hidden" onClick={toggleMenu}>
          <CiMenuBurger className="w-7 h-7 cursor-pointer" />
        </div>
      </div>
      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="dropdown md:hidden">
          {["Home", "About", "Skill", "Projects", "Contact"].map((elem, index) => (
            <a className="dropdown-item" key={index} onClick={closeMenu}>
              {elem}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;



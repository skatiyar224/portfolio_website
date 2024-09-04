import React from "react";
import Routing from "../utils/Routing";

function Navbar() {
  return (
    <div className="w-full h-20 bg-[#172554]">
      <div className=" max-w-[80%] h-full mx-auto flex items-center justify-between select-none">
        <h2 className="font-bold text-3xl">Portfolio</h2>
        <div className="links flex gap-10 font-semibold text-md">
          {["Home", "About", "Skill", "Projects", "Contact"].map(
            (elem, index) => (
              <a>{elem}</a>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

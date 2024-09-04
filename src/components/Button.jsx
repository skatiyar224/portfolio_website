import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Button({ title = "More About Me" }) {
  return (
    <div className="text-black">
      <button
        style={{ boxShadow: "0 0 1em #06b6d4" }}
        className="w-[12rem] bg-[#20ddff] px-5 py-2 mt-6 rounded-full flex items-center justify-between overflow-hidden relative group"
      >
        {title}
        <span className="transition-transform duration-300 group-hover:translate-x-2">
          <FaArrowRightLong />
        </span>
        <div className="absolute inset-0 bg-cyan-500 opacity-20 rounded-full transition-transform duration-500 scale-0 group-hover:scale-150"></div>
      </button>
    </div>
  );
}

export default Button;

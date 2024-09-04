import React from "react";
import Button from "./Button";
import Portfolio_image from "../assets/Portfolio_image.jpg";

function About() {
  return (
    <div className="max-w-[80%] mx-auto flex items-center justify-between pb-6">
      <div className="w-full px-5 py-10">
        <div
          style={{boxShadow: "0 0 4.5rem #06b6d4"}}
          className="w-[20em] h-[20em] mt-10 rounded-full relative overflow-hidden"
        >
          <img
            className="object-cover w-full h-full"
            src={Portfolio_image}
            alt="Image"
          />
        </div>
      </div>

      <div className="w-full  mt-[10%] px-3 py-3">
        <h1 className="text-[3rem]">About <span className="text-[#06b6d4]">Me</span></h1>
        <h3 className="text-[1.3rem]"> FrontEnd Developer</h3>
        <div className="mt-5 font-light">
          <span>I am a passionate Full Stack Developer with a solid foundation in both front-end and back-end technologies. My expertise includes HTML, CSS, JavaScript, React.js, Redux, Node.js, and Express.js. I enjoy crafting intuitive, responsive user interfaces and developing efficient server-side applications. I am committed to continuous learning and staying updated with the latest industry trends. I thrive on solving complex problems and creating innovative web solutions that enhance user experiences and drive business success..</span>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default About;

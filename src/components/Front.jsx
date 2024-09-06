import React from "react";
import Button from "./Button";
import { Typewriter } from "react-simple-typewriter";
import Portfolio_image from "../assets/Portfolio_image.jpg";
import "../styles/Front.css";

function Front() {
  return (
    <div className="w-full full-page">
      <div className="max-w-[80%] front-container mx-auto flex items-center justify-between">
        <div className="w-full text-area  mt-[10%] px-3 py-3">
          <h3 className="text-[1.7rem] intro-text leading-none">
            Hello, it's me
          </h3>
          <h1 className="text-[3rem] name">Shivam Katiyar</h1>
          <h3 className="text-[1.3rem] role">
            And I am a FullStack{" "}
            <span className="text-[#06b6d4] highlight">
              <Typewriter
                words={["Developer", "Designer"]}
                loop={false}
                cursor={true}
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h3>
          <div className="mt-5 description">
            <span>
              I am a Full Stack Developer with expertise in HTML, CSS,
              JavaScript, React.js, Node.js, and Express.js, passionate about
              creating seamless, innovative web applications..
            </span>
          </div>
        </div>

        <div className="w-full px-5 py-10 image-area">
          <div
            style={{ boxShadow: "0 0 4.5rem #06b6d4" }}
            className="w-[25em] h-[25em] mt-10 rounded-full ml-20 image-box overflow-hidden"
          >
            <img
              className="object-cover image"
              src={Portfolio_image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;

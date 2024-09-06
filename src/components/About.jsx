import React from "react";
import Button from "./Button";
import Portfolio_image from "../assets/Portfolio_image.jpg";
import "../styles/About.css";  // Link to your CSS file

function About() {
  return (
    <div className="about-container">
      <div className="image-container">
        <div className="image-box">
          <img className="image" src={Portfolio_image} alt="Image" />
        </div>
      </div>

      <div className="text-container">
        <h1>About <span className="highlight">Me</span></h1>
        <h3>FrontEnd Developer</h3>
        <div className="description">
          <span>
            I am a passionate Full Stack Developer with a solid foundation in
            both front-end and back-end technologies. My expertise includes
            HTML, CSS, JavaScript, React.js, Redux, Node.js, and Express.js...
          </span>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default About;

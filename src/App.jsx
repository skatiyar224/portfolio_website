import React from "react";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="w-full bg-[#0F172A] font-['satoshi_variable']  text-white">
      <Navbar />
      <Front />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

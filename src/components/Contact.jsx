import React from "react";
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="max-w-[80%] wrapper mx-auto flex items-center justify-between pb-8">
      <div className="w-full box2 mt-[10%] px-3 py-3">
        <h1 className="">
          Contact <span className="text-[#06b6d4]">Me</span>
        </h1>
        <h3 className="text-[1rem] leading-none">Let's Work Together</h3>
        <div className="mt-3 description">
          <span>
            If you’d like to get in touch, feel free to reach out via email or
            phone. I’m always open to discussing new projects, creative ideas,
            or opportunities to collaborate. You can also use the form to send
            me a direct message—I’ll get back to you as soon as possible.
            Looking forward to connecting!
          </span>
        </div>
        <div className="mt-10">
          <p className="text-md pb-1 flex flex-row items-center">
            <span className="text-[#2cdfff] text-xl">
              <FaAngleRight />
            </span>
            skatiyar224@gamil.com
          </p>
          <p className="text-md  pb-1 flex flex-row items-center gap-1">
            <span className="text-[#2cdfff] text-md">
              <MdWifiCalling3 />
            </span>
            +91 6395129521
          </p>
        </div>
      </div>

      <div className="flex input flex-col px-8 py-6">
        <div className="">
          <form action="">
            <input
              className="w-full mt-5 p-3 rounded-md bg-zinc-600 opacity-60 outline-none"
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              className="w-full mt-5 p-3 rounded-md bg-zinc-600 opacity-60 outline-none"
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              className="w-full mt-5 p-3 rounded-md bg-zinc-600 opacity-60 outline-none"
              type="text"
              placeholder="Enter Your Subject"
            />
            <input
              className="w-full mt-5 p-3 rounded-md bg-zinc-600 opacity-60 outline-none"
              type="text"
              placeholder="Enter Your Message"
            />
            <Button title={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

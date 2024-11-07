import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import zakaria from "../asset/zakaria.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full px-10 flex justify-between h-screen bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          ZAKARIA MENERVA
        </h1>
        <h2 className="text-4xl sm:text-8xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer,
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack web developer, dedicated to creating and sometimes
          designing high-quality digital experiences. My current focus is on
          building responsive web applications that provide engaging user
          interactions.
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <a
              target={"_blank"}
              href="https://drive.google.com/file/d/1iWn-MsmPaHrQXU8Z3mmyAYJLaeipjAPU/view?usp=sharing"
            >
              Get Resume
            </a>
            <span className="group-hover:rotate-90 duration-300 ">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <img src={zakaria} alt="" className="rounded-full" />
      </div>
    </div>
  );
};

export default Home;

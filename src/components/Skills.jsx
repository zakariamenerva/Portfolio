import React from "react";

import HTML from "../asset/html.png";
import CSS from "../asset/css.png";
import JavaScript from "../asset/javascript.png";
import ReactImg from "../asset/react.png";
import Node from "../asset/node.png";
import GitHub from "../asset/github.png";
import php from "../asset/php.png";
import mysql from "../asset/mysql.png"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4" style={{ color: "red" }}>
            These are the technologies I've worked with
          </p>

        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript Icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={ReactImg} alt="React JS Icon " />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={GitHub} alt="GITHUB Icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={Node} alt="Node JS Icon" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={php} alt="php Icon" />
            <p className="my-4">PHP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={mysql} alt="my sql Icon" />
            <p className="my-4">MY SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

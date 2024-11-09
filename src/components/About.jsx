import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <h1 className="text-5xl text-center font-bold inline border-b-4 border-pink-600">
              About
            </h1>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm MENERVA, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I'm passionate about creating impactful web applications that enhance lives. I specialize in developing websites for a diverse range of clients, from individuals to corporations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

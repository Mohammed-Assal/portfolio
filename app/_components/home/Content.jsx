import React from "react";

function Content() {
  return (
    <div className="md:w-[60%] w-full text-center md:text-left md:mb-0">
      <h1 className="text-7xl font-bold text-white md:max-w-[78%] w-full text-center">
        Hello, I'M <span className="text-green-400">Assal</span>
      </h1>
      <p className="text-lg text-gray-400 mt-4 mb-[130px] md:mb-0 md:max-w-[78%] w-full md:text-center">
        Mohammed Assal, 21 years old, based in Morocco. I am a Full-Stack
        Developer with experience in{" "}
        <span className="font-semibold">MERN stack</span>,{" "}
        <span className="font-semibold">WordPress</span>,{" "}
        <span className="font-semibold">SEO</span>, and{" "}
        <span className="font-semibold">Optimization</span>. I am skilled in
        building scalable web applications and enhancing performance. Always
        eager to learn and contribute to innovative projects.
      </p>
    </div>
  );
}

export default Content;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const projects = [
  {
    title: "QuarkBooker – Smart Booking",
    description:
      "A platform for managing bookings with detailed analytics and real-time insights.",
    image:
      "https://res.cloudinary.com/lm5gli3m/image/upload/v1794870967/currentbooking-optimized_y1up8c.webp",
    liveLink: "https://app.quarkbooker.com",
    tech: ["Next.js", "TailwindCSS", "Node.js", "MongoDB", "Cloudinary"],
  },
  {
    title: "QuarkBooker – Showcase & Blog",
    description:
      "Corporate showcase website for a booking company, featuring an integrated blog.",
    image:
      "https://res.cloudinary.com/lm5gli3m/image/upload/v1794870808/landingpage-quarkbooker_kjoo8l.webp",
    liveLink: "https://www.quarkbooker.com",
    tech: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"],
  },
  {
    title: "Olive Extra",
    description:
      "Modern landing page and digital presence showcasing premium olive oil ",
    image:
      "https://res.cloudinary.com/lm5gli3m/image/upload/v1794871435/olive-landingpage-optimized_vcnw0m.webp",
    liveLink: "https://www.oliveextra.com",
    tech: ["Next.js", "TailwindCSS", "AWS"],
  },
  {
    title: "Clayoira Analytics",
    description:
      "Web analytics tool providing detailed visitor insights and traffic metrics.",
    image:
      "https://res.cloudinary.com/lm5gli3m/image/upload/v1794871619/clay-landingpage-optimized_swityt.webp",
    liveLink: "https://www.clayoria.com",
    tech: ["React.js", "CSS", "AWS"],
  },
  {
    title: "Mooria Export Services",
    description:
      "B2B export platform highlighting international logistics and product catalogs.",
    image:
      "https://res.cloudinary.com/lm5gli3m/image/upload/v1794873306/landingpage-export_gba3ot.webp",
    liveLink: "https://export.mooriagroup.com",
    tech: ["React.js", "TailwindCSS"],
  },
  {
    title: "Mooria Group",
    description:
      "Corporate web platform built with modern UI/UX & fast performance.",
    image:
      "https://res.cloudinary.com/lm5gli3m/image/upload/v1794873157/landingpage-mooria_wcmrbc.webp",
    liveLink: "https://www.mooriagroup.com",
    tech: ["React.js", "TailwindCSS"],
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="md:w-[60%] w-full mx-auto px-3 md:px-0 mb-28 md:mb-0">
      {/* Main Card Container (Nafs l-background dyal Footer) */}
      <div className="max-w-[540px] mx-auto bg-[#171717] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
        
        {/* Top Browser Bar + Counter */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#1f1f1f] border-b border-gray-800">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-xs font-mono text-gray-400">
            0{currentIndex + 1} / 0{projects.length}
          </span>
        </div>

        {/* Project Image + Hover Overlay */}
        <div className="relative group w-full h-[220px] sm:h-[250px] bg-black overflow-hidden">
          <Image
            src={current.image}
            alt={current.title}
            fill
            quality={95}
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle gradient bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-60" />
        </div>

        {/* Project Details */}
        <div className="p-5 text-left">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold text-gray-100">
              {current.title}
            </h3>

            {/* Action Links */}
            <div className="flex items-center gap-2 shrink-0">
              {current.githubLink && (
                <a
                  href={current.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Source Code"
                  className="p-2 rounded-full bg-[#242424] text-gray-300 hover:text-white hover:bg-gray-700 transition"
                >
                  <FaGithub className="text-lg" />
                </a>
              )}
              {current.liveLink && (
                <a
                  href={current.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-400/10 border border-green-400/30 text-green-400 text-xs font-semibold hover:bg-green-400 hover:text-black transition"
                >
                  <span>Live</span>
                  <BiLinkExternal className="text-sm" />
                </a>
              )}
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            {current.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {current.tech.map((item, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#222222] text-gray-300 border border-gray-700/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Controls (Arrows + Dots f blassa wa7da n9iya) */}
      <div className="max-w-[540px] mx-auto flex items-center justify-between mt-4 px-2">
        <button
          onClick={prevProject}
          aria-label="Previous Project"
          className="p-2.5 rounded-full bg-[#171717] border border-gray-800 text-gray-300 hover:text-green-400 hover:border-green-400/50 transition"
        >
          <FaArrowLeft className="text-sm" />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-green-400 w-6"
                  : "bg-gray-600 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextProject}
          aria-label="Next Project"
          className="p-2.5 rounded-full bg-[#171717] border border-gray-800 text-gray-300 hover:text-green-400 hover:border-green-400/50 transition"
        >
          <FaArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
}

export default Projects;
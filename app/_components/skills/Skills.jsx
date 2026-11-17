import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaWordpress,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa"; // Importing React Icons
import { SiExpress } from "react-icons/si";
import { FaJira } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import "../../globals.css";
const frontendSkills = [
  {
    name: "Next.js",
    description: "React framework for server-side rendering",
    icon: <FaReact className="text-[22px]" />,
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces",
    icon: <FaReact className="text-[22px]" />,
  },
  {
    name: "HTML5",
    description: "Markup language for creating webpages",
    icon: <FaHtml5 className="text-[22px]" />,
  },
  {
    name: "Javascript",
    description: "Javascript",
    icon: <FaJs className="text-[22px]" />,
  },
  {
    name: "CSS3",
    description: "Style sheet language used for presentation",
    icon: <FaCss3 className="text-[22px]" />,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: <RiTailwindCssFill className="text-[22px]" />,
  },
  {
    name: "Bootstrap",
    description: "CSS framework for responsive design",
    icon: <FaBootstrap className="text-[22px]" />,
  },
  {
    name: "Redux JS",
    description: "Redux JS",
    icon: <SiRedux className="text-[22px]" />,
  },
];

const backendSkills = [
  {
    name: "Node.js",
    description: "JavaScript runtime for backend development",
    icon: <FaNodeJs className="text-[22px]" />,
  },
  {
    name: "Express.js",
    description: "Backend web framework for Node.js",
    icon: <SiExpress className="text-[22px]" />,
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    icon: <FaDatabase className="text-[22px]" />,
  },
];
const Otherskills = [
  {
    name: "AWS",
    description: "Cloud platform services",
    icon: <FaAws className="text-[22px]" />,
  },
  {
    name: "Git",
    description: "Version control system",
    icon: <FaGitAlt className="text-[22px]" />,
  },
  {
    name: "Jira",
    description: "Project management tool",
    icon: <FaJira className="text-[22px]" />,
  },
  {
    name: "WordPress",
    description: "Content management system",
    icon: <FaWordpress className="text-[22px]" />,
  },
];

const Skills = () => {
  return (
    <div className="md:w-[60%] w-full">
      {/* Frontend Skills */}
      <div>
        <h3 className="text-3xl font-semibold text-white mb-6">
          Frontend Skills
        </h3>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className=" flex icon-container space-x-2 items-center rounded-lg shadow-lg text-gray-400"
            >
              <div className=" icon text-[10px] mr-1">{skill.icon}</div>

              <h4 className="text-[16px] font-semibold">{skill.name}</h4>
              <span className="tooltip">{skill.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Skills */}
      <div className="mt-12">
        <h3 className="text-3xl font-semibold text-white mb-6">
          Backend Skills
        </h3>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
          {backendSkills.map((skill, index) => (
            <div
              key={index}
              className=" flex icon-container space-x-2 items-center rounded-lg shadow-lg text-gray-400"
            >
              <div className=" icon text-[10px] mr-1">{skill.icon}</div>

              <h4 className="text-[16px] font-semibold">{skill.name}</h4>
              <span className="tooltip">{skill.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-3xl font-semibold text-white mb-6">Other Skills</h3>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
          {Otherskills.map((skill, index) => (
            <div
              key={index}
              className=" flex icon-container space-x-2 items-center rounded-lg shadow-lg text-gray-400"
            >
              <div className=" icon text-[10px] mr-1">{skill.icon}</div>

              <h4 className="text-[16px] font-semibold">{skill.name}</h4>
              <span className="tooltip">{skill.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-[100px]"></div>
    </div>
  );
};

export default Skills;

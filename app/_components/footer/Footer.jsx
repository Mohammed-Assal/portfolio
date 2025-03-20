import React from "react";
import {
  FaEnvelope,
  FaFileAlt,
  FaFolderOpen,
  FaHome,
  FaRegStar,
} from "react-icons/fa";

function Footer({
  Home = "Home",
  Projects = "Projects",
  Skills = "Skills",
  Resume = "Resume",
  Contact = "Contact",
  activeTab,
  onTabChange,
  ...props
}) {
  const tabs = [
    {
      name: Home,
      icon: <FaHome className="icon hover:text-gray-200 hover:cursor-pointer  text-gray-400 text-2xl" />,
      value: "Home",
    },
    {
      name: Projects,
      icon: <FaFolderOpen className="icon text-gray-400 text-2xl hover:text-gray-200 hover:cursor-pointer" />,
      value: "Projects",
    },
    {
      name: Skills,
      icon: <FaRegStar className="icon text-gray-400 hover:text-gray-200 hover:cursor-pointer text-2xl" />,
      value: "Skills",
    },
    {
      name: Resume,
      icon: <FaFileAlt className="icon text-gray-400 hover:text-gray-200 hover:cursor-pointer text-2xl" />,
      value: "Resume",
    },
    {
      name: Contact,
      icon: <FaEnvelope className="icon text-gray-400 hover:text-gray-200 hover:cursor-pointer text-2xl" />,
      value: "Contact",
    },
  ];
  return (
    <div
      {...props}
      className="fixed bottom-0 bg-[#171717]  w-full md:mt-0 mt-3 md:max-w-[400px] max-w-[430px] mb-7 flex justify-around py-3 border rounded-[35px] border-gray-400"
    >
      {tabs.map(({ name, icon, value }) => (
        <div
          key={value}
          onClick={() => onTabChange(value)}
          className={`icon-container   ${
            activeTab === value ? "text-green-600" : "text-gray-700"
          }`}
        >
          {icon}
          <span className="tooltip">{name}</span>
        </div>
      ))}
    </div>
  );
}

export default Footer;

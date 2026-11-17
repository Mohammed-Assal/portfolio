import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFileAlt,
  FaFolderOpen,
  FaHome,
  FaRegStar,
} from "react-icons/fa";
import { RiFileEditFill } from "react-icons/ri";

function Footer({
  Home = "content",
  Projects = "projects",
  Skills = "skills",
  Resume = "resume",
  Contact = "contact",
  activeTab,
  onTabChange,
  ...props
}) {
  // Style mo7ad l ga3 l-icons bach ykono bhal bhal
  const iconClass =
    "icon text-gray-400 text-2xl hover:text-gray-200 hover:cursor-pointer transition-colors";

  const tabs = [
    {
      name: Home,
      icon: <FaHome className={iconClass} />,
      value: "content",
    },
    {
      name: Projects,
      icon: <FaFolderOpen className={iconClass} />,
      value: "projects",
    },
    {
      name: Skills,
      icon: <FaRegStar className={iconClass} />,
      value: "skills",
    },
    {
      name: Resume,
      icon: <FaFileAlt className={iconClass} />,
      value: "resume",
    },
    {
      name: Contact,
      icon: <FaEnvelope className={iconClass} />,
      value: "contact",
    },
  ];

  return (
    <div
      {...props}
      className="fixed bottom-0 bg-[#171717] mx-auto w-full md:mt-0 mt-3 md:max-w-[400px] max-w-[430px] mb-7 flex justify-around items-center py-3 border rounded-[35px] border-gray-400"
    >
      {/* Tabs dyal Components */}
      {tabs.map(({ name, icon, value }) => (
        <div
          key={value}
          onClick={() => onTabChange(value)}
          className={`icon-container ${
            activeTab === value ? "text-green-600" : "text-gray-700"
          }`}
        >
          {icon}
          <span className="tooltip">{name}</span>
        </div>
      ))}

      {/* Link dyal Page Blog b nafs design */}
      <Link href="/blog" className="icon-container text-gray-700">
        <RiFileEditFill className={iconClass} />
        <span className="tooltip">blog</span>
      </Link>
    </div>
  );
}

export default Footer;
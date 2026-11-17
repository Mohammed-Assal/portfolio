"use client";
import { useState } from "react";
import "../../globals.css";
import Footer from "../footer/Footer";
import Content from "./Content";
import Skills from "../skills/Skills";
import Resume from "../resume/Resume";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("content");
  const renderContent = () => {
    switch (activeTab) {
      case "resume":
        return <Resume />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Content />;
    }
  };
  return (
    <div className="min-h-screen  bg-[#171717] flex flex-col items-center justify-between overflow-hidden">
      <div className=" max-w-[90%]  w-full md:px-16 px-3  ">
        <>{renderContent()}</>

       
      </div>

      <Footer activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

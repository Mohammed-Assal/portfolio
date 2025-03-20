"use client";
import { useState } from "react";
import "../../globals.css";
import Footer from "../footer/Footer";
import Content from "./Content";
import Imagesection from "./Imagesection";
import Skills from "../skills/Skills";
import Resume from "../resume/Resume";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Content");
  const renderContent = () => {
    switch (activeTab) {
      case "Content":
        return <Content />;
      case "Resume":
        return <Resume />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <Content />;
    }
  };
  return (
    <div className="min-h-screen  bg-[#171717] flex flex-col items-center justify-between overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full md:px-16 px-3 md:pt-[100px] pt-[80px]">
        <>{renderContent()}</>

        <Imagesection />
      </div>

      <Footer activeTab={activeTab} onTabChange={setActiveTab}/>
    </div>
  );
}

"use client";
import { useState } from "react";
import Select from "./Select";
import AddBlog from "./AddBlog/AddBlog";
import ShowRequests from "./ShowRequests/ShowRequests";

const ManagementBlogs = () => {
  const [activeTab, setActiveTab] = useState("Add blog");
  const renderContent = () => {
    switch (activeTab) {
      case "Add blog":
        return <AddBlog />;
      case "Show Blogs":
        return <ShowRequests />;

      default:
        return <AddBlog />;
    }
  };
  return (
    <div className=" bg-gray-100   min-h-screen">
      <div>
        <Select activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default ManagementBlogs;

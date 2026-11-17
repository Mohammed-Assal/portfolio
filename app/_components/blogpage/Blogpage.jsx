"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getallblogsAPI } from "@/services/user.service";
import {
  FaEnvelope,
  FaFileAlt,
  FaFolderOpen,
  FaHome,
  FaRegStar,
} from "react-icons/fa";
import { RiFileEditFill } from "react-icons/ri";

function BlogPage() {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getallblogsreq();
  }, []);

  const getallblogsreq = async () => {
    try {
      const response = await getallblogsAPI();
      console.log(response.data);
      setBlogData(response.data);
      setIsLoading(false);
    } catch (err) {
      if (err.response) {
        console.error("Error response:", err.response.data);
      } else if (err.request) {
        console.error("No response received:", err.request);
      } else {
        console.error("Axios error:", err.message);
      }
    }
  };

  const iconClass =
    "icon text-gray-400 text-2xl hover:text-gray-200 hover:cursor-pointer transition-colors";

  const navLinks = [
    { name: "content", icon: <FaHome className={iconClass} />, href: "/" },
    { name: "projects", icon: <FaFolderOpen className={iconClass} />, href: "/" },
    { name: "skills", icon: <FaRegStar className={iconClass} />, href: "/" },
    { name: "resume", icon: <FaFileAlt className={iconClass} />, href: "/" },
    { name: "contact", icon: <FaEnvelope className={iconClass} />, href: "/" },
  ];

  return (
    <div className="p-6 pb-28 w-full min-h-screen bg-[#171717] flex flex-col items-center">
      <div className="w-full">
        <h1 className="text-3xl text-white font-bold text-center mb-6">
          Mohammed Assal Blogs
        </h1>

        {isLoading ? (
          <div className="text-center text-white text-lg">Loading...</div>
        ) : (
          <div className="columns-1 md:columns-3 lg:columns-6 gap-4">
            {blogData.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.title.replace(/\s+/g, "-")}`}
                className="relative mb-4 block"
              >
                <img
                  src={post.image?.url}
                  alt={post.title}
                  className="w-full h-auto max-h-[300px] rounded-lg"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-10 text-gray-800 text-xs px-2 py-1 rounded">
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
                <div className="absolute bottom-2 left-0 w-full text-center bg-black bg-opacity-10 text-black text-sm px-2 py-1">
                  <span className="block truncate max-w-full">{post.title}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Footer Dock (nafs design dyal Home) */}
      <div className="fixed bottom-0 bg-[#171717] mx-auto w-full md:mt-0 mt-3 md:max-w-[400px] max-w-[430px] mb-7 flex justify-around items-center py-3 border rounded-[35px] border-gray-400">
        {navLinks.map(({ name, icon, href }) => (
          <Link key={name} href={href} className="icon-container text-gray-700">
            {icon}
            <span className="tooltip">{name}</span>
          </Link>
        ))}

        {/* Blog Icon (Active f had l-page) */}
        <Link href="/blog" className="icon-container text-green-600">
          <RiFileEditFill className="icon text-green-400 text-2xl hover:cursor-pointer" />
          <span className="tooltip">blog</span>
        </Link>
      </div>
    </div>
  );
}

export default BlogPage;
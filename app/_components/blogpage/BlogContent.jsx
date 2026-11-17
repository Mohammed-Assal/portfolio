"use client";

import { useEffect, useState } from "react";
import { getSingleBlogAPI } from "@/services/user.service";
import Footer from "../footer/Footer";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function BlogContent({ params }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await getSingleBlogAPI(params.id);

        setBlog(res.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-100">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-100">Blog not found</p>
      </div>
    );
  }

  return (
    <article className="max-w-5xl  pt-[10px] mx-auto md:p-6 p-2">
      <header className="mb-8">
        <h1 className="md:text-5xl text-center text-2xl font-bold text-gray-100 mb-5">
          {blog.title}
        </h1>
        <div className="flex  text-[16px] mt-1  items-center  justify-between text-gray-200">
          <span>By BookFlow Team</span>
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>
      </header>

      {blog.image && (
        <div className="mb-8">
          <img
            src={blog.image?.url}
            alt={blog.title}
            className="md:w-[40%] w-[70%] mx-auto h-auto rounded-md"
          />
        </div>
      )}

      <section className=" mb-[70px] text-justify last:text-justify break-words text-gray-200 md:text-[18px] text-[16px] max-w-none">
        {blog.centent}
      </section>
      <div className="   ml-[31%] bottom-2">
        <Link
          href={"/"}
          className="text-[25px] flex  items-center space-x-2 hover:text-green-200 text-green-400 mt-20"
        >
          <FaHome className="icon hover:cursor-pointer   text-2xl" />
          <span>Back To Home</span>
        </Link>
      </div>
    </article>
  );
}

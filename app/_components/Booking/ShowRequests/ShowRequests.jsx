"use client";
import {
  acceptblogAPI,
  getblogsAPI,
  rejectblogAPI,
} from "@/services/user.service";
import Image from "next/image";
import { useEffect, useState } from "react";

const ShowRequests = () => {
  const [blogData, setBlogData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getallblogsreq();
  }, []);

  const [error, setError] = useState(null);

  const getallblogsreq = async () => {
    try {
      const response = await getblogsAPI();
      setBlogData(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError("Failed to load blogs.");
      setIsLoading(false);
    }
  };

  const handleAccept = (id) => {
    acceptblogAPI(id);
  };

  const handleDelete = (id) => {
    rejectblogAPI(id);
  };

  return (
    <div className="w-[95%] mx-auto p-6 text-gray-800">
      {error && <p className="text-center text-red-500">{error}</p>}

      {isLoading ? (
        <p className="text-center text-gray-500"> isLoading ... </p>
      ) : (
        <div className="space-y-4">
          {blogData?.map((blog) => (
            <div
              key={blog._id}
              className="flex items-center border border-[#707070] justify-between p-1 rounded-lg"
            >
              <Image
                width={50}
                height={50}
                src={blog.image?.url || "/desc.webp"}
                alt={blog.title || "Blog Image"}
                className="w-[50px] h-[50px] rounded-lg mr-4"
              />

              <h3 className="flex-1 text-[14px]  ">{blog.title}</h3>

              <div className="flex gap-2">
                <button
                  onClick={() => handleAccept(blog._id)}
                  disabled={blog.accepted}
                  className={`px-3 py-1 rounded ${
                    blog.accepted
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowRequests;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { createBlogAPI } from "@/services/user.service";

export default function AddBlog() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    centent: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, centent } = formData;
  
    if (!image) {
      toast.error("Please select an image!");
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("description", description);
    formDataToSend.append("centent", centent);
    formDataToSend.append("image", image); 
  
    try {
      await createBlogAPI(formDataToSend); 
      toast.success("Blog created successfully!");
      setFormData({ title: "", description: "", centent: "" });
      setImage(null);
    } catch (err) {
      toast.error("Failed to create blog!");
    }
  };
  

  return (
    <div className="mt-7 flex items-center justify-center bg-gradient-to-br from-beige-100 via-blue-100 to-green-100 text-gray-800">
      <div className="flex flex-wrap bg-white bg-opacity-90 rounded-lg w-full max-w-4xl">
        <div className="w-full p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
                placeholder="Enter blog title"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="2"
                className="w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
                placeholder="Enter a short description"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Image URL
              </label>
              <input
                className="w-[300px] "
                type="file"
                name="file"
                id="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
              centent
              </label>
              <textarea
                name="centent"
                value={formData.centent}
                onChange={handleChange}
                required
                rows="10"
                className="w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
                placeholder="Enter blog centent"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-400 transition duration-300"
            >
              Create Blog
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}

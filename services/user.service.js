import axiosInstance from "../utils/axiosInstance";

export const createBlogAPI = async (formData) => {
  if (typeof window === "undefined") return;

  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("User is not logged in");
  }

  try {
    const response = await axiosInstance.post("/api/blog/AddBlog", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.error("Error during blog creation:", error);
    throw error;
  }
};

export const getallblogsAPI = async () => {
  try {
    const response = await axiosInstance.get("/api/blog/getallblogs");
    return response;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};

export const getblogsAPI = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("User is not logged in");
  }
  try {
    const response = await axiosInstance.get("/api/blog/getblogs", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};
export const getlastBlogsAPI = async () => {
  try {
    const response = await axiosInstance.get("/api/blog/getlastBlogs");
    return response;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};

export const getSingleBlogAPI = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/blog/${id}`);
    return response;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};

export const userLoginAPI = async (email, password) => {
  if (typeof window === "undefined") return;
  console.log(email, password);

  try {
    const response = await axiosInstance.post("/api/user/login", {
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const rejectblogAPI = async (id) => {
  if (typeof window === "undefined") return;
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("User is not logged in");
  }
  try {
    const response = await axiosInstance.post(
      "/api/blog/delete",
      {
        id,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};

export const acceptblogAPI = async (id) => {
  if (typeof window === "undefined") return;
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("User is not logged in");
  }
  try {
    const response = await axiosInstance.post(
      "/api/blog/accepctblog",
      {
        id,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};

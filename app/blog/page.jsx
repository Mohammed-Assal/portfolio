import BlogPage from "@/app/_components/blogpage/Blogpage";
export const metadata = {
  title: "Assal Mohammed Blogs - Full Stack Dev & SaaS Project Insights",
  description:
    "Explore in-depth articles on full-stack development, SaaS project strategies, and the latest industry trends. Gain valuable insights to enhance your development skills and grow your projects.",
  keywords:
    "full stack development, SaaS projects, web development, JavaScript, React, Node.js, Next.js, software engineering, coding tips, developer blogs",
  author: "Assal Mohammed",
  robots: "index, follow",
  openGraph: {
    title: "Assal Mohammed Blogs - Full Stack Dev & SaaS Project Insights",
    description:
      "Get expert insights on SaaS development, full-stack technologies, and best practices in software engineering. Stay ahead with cutting-edge development strategies.",
    url: "http://assalmohammed.vercel.app/blog",
    type: "article",
    locale: "en_US",
    siteName: "Assal Mohammed Blogs",
    images: [
      {
        url: "https://res.cloudinary.com/dgcblyg8u/image/upload/v1742661094/c1egkpvlze2hzcgkruvl.webp",
        width: 1200,
        height: 630,
        alt: "Assal Mohammed Blogs - Full Stack Development & SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assal Mohammed Blogs - Full Stack Dev & SaaS Project Insights",
    description:
      "Follow the latest insights on full-stack development, SaaS strategies, and software engineering best practices.",
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
    images: ["https://res.cloudinary.com/dgcblyg8u/image/upload/v1742661094/c1egkpvlze2hzcgkruvl.webp"],
  },
};


function page() {
  return (
    <div className="w-full min-h-screen">
      <BlogPage />
    </div>
  );
}

export default page;

import Home from "./_components/home/Home";

export const metadata = {
  title: "Mohammed Assal - Full Stack Developer & SaaS Enthusiast",
  description:
    "Welcome to the official website of Mohammed Assal. Explore insights on full-stack development, SaaS projects, and cutting-edge technologies.",
  keywords:
    "full stack developer, SaaS projects, web development, JavaScript, React, Node.js, Next.js, software engineering, coding tips, developer portfolio",
  author: "Mohammed Assal",
  robots: "index, follow",
  openGraph: {
    title: "Mohammed Assal - Full Stack Developer & SaaS Enthusiast",
    description:
      "Discover expertise in full-stack development, SaaS solutions, and modern web technologies. Stay updated with innovative projects and insights.",
    url: "http://assalmohammed.vercel.app/",
    type: "website",
    locale: "en_US",
    siteName: "Mohammed Assal",
    images: [
      {
        url: "https://res.cloudinary.com/dgcblyg8u/image/upload/v1742661094/c1egkpvlze2hzcgkruvl.webp",
        width: 1200,
        height: 630,
        alt: "Mohammed Assal - Full Stack Developer & SaaS Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Assal - Full Stack Developer & SaaS Enthusiast",
    description:
      "Follow updates on full-stack development, SaaS strategies, and cutting-edge web technologies.",
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
    images: ["https://res.cloudinary.com/dgcblyg8u/image/upload/v1742661094/c1egkpvlze2hzcgkruvl.webp"],
  },
};

export default function Page() {
  return <Home />;
}

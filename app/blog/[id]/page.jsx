import BlogContent from "@/app/_components/blogpage/BlogContent";

export async function generateMetadata({ params }) {
  const resolvedParams = await params; // Ensure params are resolved first
  const blogId = resolvedParams?.id;
  if (!blogId) {
    console.error("Blog ID is missing");
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }

  try {
    const res = await fetch(
      `https://back-blog-portfolio.vercel.app/api/blog/${blogId}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const blog = await res.json();

    if (!blog) {
      return {
        title: "Blog Not Found",
        description: "The blog you are looking for does not exist.",
      };
    }

    return {
      title: blog.title,
      robots: "index, follow",
      description: blog.description,
      openGraph: {
        title: blog.title,
        description: blog.description,
        images: blog.image?.url ? [blog.image?.url] : [],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.description || blog.centent?.substring(0, 150),
        images: blog.image?.url ? [blog.image?.url] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error",
      description: "An error occurred while fetching blog metadata.",
    };
  }
}
export default async function Page({ params }) {
  try {
    const resolvedParams = await params;

    return (
      <div className="bg-[#171717] min-h-screen">
        <BlogContent params={resolvedParams} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching params:", error);
  }
}

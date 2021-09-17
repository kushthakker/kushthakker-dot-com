import Link from "next/link";

const Blog = () => {
  return (
    <span className="py-2 sm:px-4 px-2 sm:text-xl text-base">
      <Link href="/blog">Blog</Link>
    </span>
  );
};

export default Blog;

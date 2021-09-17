import Link from "next/link";

const Blog = () => {
  return (
    <span
      aria-label="Contact"
      type="button"
      className="py-2 px-4 sm:text-xl text-base"
    >
      <Link href="/blog">Blog</Link>
    </span>
  );
};

export default Blog;

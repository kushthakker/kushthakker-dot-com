import Link from "next/link";

const Blog = () => {
  return (
    <buttton
      aria-label="Contact"
      type="button"
      className="fixed z-50 top-4 right-33 py-2 px-4 text-xl"
    >
      <Link href="/">Blog</Link>
    </buttton>
  );
};

export default Blog;

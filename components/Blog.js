import Link from "next/link";

const Blog = () => {
  return (
    <buttton aria-label="Contact" type="button" className="py-2 px-4 sm:text-xl text-base">
      <Link href="/blog">Blog</Link>
    </buttton>
  );
};

export default Blog;

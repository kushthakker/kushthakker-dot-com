import Link from "next/link";

const HomeButton = () => {
  return (
    <span
      aria-label="Home"
      type="button"
      className="py-2 px-4 sm:text-xl text-base"
    >
      <Link href="/">Home</Link>
    </span>
  );
};

export default HomeButton;

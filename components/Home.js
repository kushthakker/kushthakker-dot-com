import Link from "next/link";

const HomeButton = () => {
  return (
    <buttton
      aria-label="Home"
      type="button"
      className="py-2 px-4 sm:text-xl text-base"
    >
      <Link href="/">Home</Link>
    </buttton>
  );
};

export default HomeButton;

import Link from "next/link";

const HomeButton = () => {
  return (
    <span className="py-2 px-4 sm:text-xl text-base">
      <Link href="/">Home</Link>
    </span>
  );
};

export default HomeButton;

import Link from "next/link";

const HomeButton = () => {
  return (
    <span className="py-2 sm:px-4 px-2 sm:text-xl text-base">
      <Link href="/">Home</Link>
    </span>
  );
};

export default HomeButton;

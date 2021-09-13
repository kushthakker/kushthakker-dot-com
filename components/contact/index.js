import Link from "next/link";

const Contact = () => {
  return (
    <buttton
      aria-label="Contact"
      type="button"
      className="absolute top-5 right-6 py-2 px-4 text-xl"
    >
      <Link href="/">Contact</Link>
    </buttton>
  );
};

export default Contact;

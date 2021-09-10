import { useTheme } from "next-themes";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="py-3 px-7 rounded-sm order-2 md:order-3 border ml-5 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 active:translate-y-3"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Toggle
    </button>
  );
};

export default DarkModeButton;

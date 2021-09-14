import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="fixed top-5 left-5 py-2 px-4 rounded-sm order-2 md:order-3 border ml-5 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 active:translate-y-3"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  );
};

export default DarkModeButton;

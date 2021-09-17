import DarkModeButton from "./DarkModeToggle.js";
import Contact from "./Contact.js";
import Blog from "./Blog.js";
import Github from "./Github.js";
import Home from "./Home.js";
import { motion } from "framer-motion";
const Nav = () => {
  return (
    <motion.div className="w-screen fixed top-5 flex z-50">
      <div className="flex justify-start w-full sm:ml-12 ml-1">
        <DarkModeButton />
      </div>
      <div className="flex justify-end sm:w-full max-w-sm px-1 sm:mr-12">
        <Contact />
        <Github />
        <Blog />
        <Home />
      </div>
    </motion.div>
  );
};

export default Nav;

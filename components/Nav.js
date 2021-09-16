import DarkModeButton from "./DarkModeToggle.js";
import Contact from "./Contact.js";
import Blog from "./Blog.js";
import Github from "./Github.js";
import Home from "./Home.js";
const Nav = () => {
  return (
    <div className="w-screen fixed top-5 flex z-50">
      <div className="flex justify-start w-full ml-12">
        <DarkModeButton />
      </div>
      <div className="flex justify-end w-full mr-12">
        <Contact />
        <Github />
        <Blog />
        <Home />
      </div>
    </div>
  );
};

export default Nav;

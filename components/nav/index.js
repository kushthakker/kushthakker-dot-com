import DarkModeButton from "../darkModeToggle";
import Contact from "../contact";
import Blog from "../blog";
import Github from "../github";
import Home from "../home";
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

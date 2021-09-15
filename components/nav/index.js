import DarkModeButton from "../DarkModeToggle";
import Contact from "../Contact";
import Blog from "../Blog";
import Github from "../Github";
import Home from "../Home";
const Nav = () => {
  return (
    <div className="w-screen fixed top-5 flex z-50">
      <div className="flex justify-start w-full ml-12">
        <DarkModeButton />
      </div>
      <div className="flex justify-end w-full mr-12">
        <Github />
        <Blog />
        <Contact />
        <Home />
      </div>
    </div>
  );
};

export default Nav;

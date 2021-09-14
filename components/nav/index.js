import DarkModeButton from "../DarkModeToggle";
import Contact from "../Contact";
import Blog from "../Blog";
import Github from "../Github";
const Nav = () => {
  return (
    <div className="w-screen fixed top-5 flex z-50">
      <div className="flex justify-start w-full ml-10">
        <DarkModeButton />
      </div>
      <div className="flex justify-end w-full mr-10">
        <Github />
        <Blog />
        <Contact />
      </div>
    </div>
  );
};

export default Nav;

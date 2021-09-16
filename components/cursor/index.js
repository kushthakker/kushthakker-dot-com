import dynamic from "next/dynamic";
import ManageMode from "../ManageMode";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Cursor = () => {
  const { getTheme } = ManageMode();
  return (
    <AnimatedCursor
      innerSize={14}
      outerSize={26}
      color={getTheme === "dark" ? "255,255,255" : "0,0,0"}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
};

export default Cursor;

import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "tailwindcss/tailwind.css";
import Nav from "../components/Nav";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const { theme, setTheme } = useTheme();
  console.log(`homepage`, theme);
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <AnimatedCursor
        innerSize={14}
        outerSize={26}
        color="116,158,156"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "tailwindcss/tailwind.css";
import Nav from "../components/Nav";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <AnimatedCursor
        innerSize={12}
        outerSize={27}
        color="255,255,255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

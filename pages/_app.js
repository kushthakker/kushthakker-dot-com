import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "tailwindcss/tailwind.css";
import Nav from "../components/Nav";
import Cursor from "../components/Cursor";
import OpenReplay from "@openreplay/tracker/cjs";
import { useEffect } from "react";

config.autoAddCss = false;

const tracker = new OpenReplay({
  projectKey: "xm3KSrRly9u6Zdir8l1d",
  onStart: () => {
    tracker.setUserID("MY_USER_ID");
  }, // optional
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    tracker.start();
  }, []);
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Cursor />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

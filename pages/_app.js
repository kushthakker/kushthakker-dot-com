import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "tailwindcss/tailwind.css";
import Nav from "../components/nav";
import Cursor from "../components/Cursor";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
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

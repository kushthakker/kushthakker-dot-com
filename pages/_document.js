import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="w-screen h-screen overflow-y-auto dark">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital@1&display=swap"
            rel="stylesheet"
          />
          <script
            defer
            type="text/javascript"
            src="https://api.pirsch.io/pirsch.js"
            id="pirschjs"
            data-code="1H7yGCFPHHOJEl6oX7TGZ2TKXAK8eSPR"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

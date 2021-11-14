import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="w-screen h-screen overflow-y-auto dark">
        <Head>
        <meta name="google-site-verification" content="jiXG1Lv_8pAfgJTXA6coEer9y3_MBEFjiPmgALO1WpE" />
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
<script>
(function(A,s,a,y,e,r){
  r=window.OpenReplay=[s,r,e,[y-1]];
  s=document.createElement('script');s.src=a;s.async=!A;
  document.getElementsByTagName('head')[0].appendChild(s);
  r.start=function(v){r.push([0])};
  r.stop=function(v){r.push([1])};
  r.setUserID=function(id){r.push([2,id])};
  r.setUserAnonymousID=function(id){r.push([3,id])};
  r.setMetadata=function(k,v){r.push([4,k,v])};
  r.event=function(k,p,i){r.push([5,k,p,i])};
  r.issue=function(k,p){r.push([6,k,p])};
  r.isActive=function(){return false};
  r.getSessionToken=function(){};
})(0, "xm3KSrRly9u6Zdir8l1d", "//static.openreplay.com/latest/openreplay.js",1,31);
</script>
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

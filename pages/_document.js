import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Landing page" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="show-cursor" strategy="lazyOnload">
          {`
          const cursor = document.querySelector('.cursor');          
          const cursor2 = document.querySelector('.cursor2');          
          document.onmousemove = (e) =>{
            cursor.style.left = (e.pageX - 5) + 'px';
            cursor.style.top = (e.pageY - 6) + 'px';
            cursor.style.display = 'block'
            cursor2.style.left = (e.pageX - 5) + 'px';
            cursor2.style.top = (e.pageY - 6) + 'px';
            cursor2.style.display = 'block'
          }
          `}
        </Script>
      </body>
    </Html>
  );
}

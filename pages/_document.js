import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.png" />
        <meta name="description" content="Landing page" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta property="og:title" content="Classified Ads" />
        <meta
          property="og:url"
          content="https://landing-page-theta-ten.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://landing-page-theta-ten.vercel.app/_next/image?url=%2Fimages%2Ffeatured8.jpg&w=1920&q=100"
        />
        <meta
          name="keywords"
          content="ads, advertise, advertising, classified, classified ads, database, directory, jobs, listing, local, portal"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="show-cursor" strategy="afterInteractive">
          {`
          const cursor = document.querySelector('.cursor');          
          const cursor2 = document.querySelector('.cursor2'); 
          const mouseEvent = (e) => {
            cursor.style.left = (e.pageX - 5) + 'px';
            cursor.style.top = (e.pageY - 6) + 'px';
            cursor.style.display = 'block'
            cursor2.style.left = (e.pageX - 5) + 'px';
            cursor2.style.top = (e.pageY - 6) + 'px';
            cursor2.style.display = 'block'
          }
          window.addEventListener("mousemove",mouseEvent)
          `}
        </Script>
      </body>
    </Html>
  );
}

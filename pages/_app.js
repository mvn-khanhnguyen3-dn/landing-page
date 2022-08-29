import "../styles/styles.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Head from "next/head";
import Loading from "../components/modules/Loading";

const DynamicHeader = dynamic(() => import("@/components/Layout"), {
  suspense: true,
});
function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={<Loading />}>
      <DynamicHeader>
        <Head>
          <title>Classified Ads</title>
        </Head>
        <Component {...pageProps} />
      </DynamicHeader>
    </Suspense>
  );
}

export default MyApp;

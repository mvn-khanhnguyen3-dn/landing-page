import "../styles/styles.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "../components/modules/Loading";

const DynamicHeader = dynamic(() => import("@/components/Layout"), {
  suspense: true,
});
function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={<Loading />}>
      <DynamicHeader>
        <Component {...pageProps} />
      </DynamicHeader>
    </Suspense>
  );
}

export default MyApp;

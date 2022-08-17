import Head from "next/head";
import SectionAbout from "../components/Layout/SectionAbout";
import SectionCategory from "../components/Layout/SectionCategory";
import SectionFeature from "../components/Layout/SectionFeature";
import SectionHero from "../components/Layout/SectionHero";
import SectionPrice from "../components/Layout/SectionPrice";

export default function Home() {
  return (
    <>
      <Head>
        <title>Classified Ads</title>
        <meta name="description" content="Landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionHero />
      <SectionCategory />
      <SectionFeature />
      <SectionPrice />
      <SectionAbout />
    </>
  );
}
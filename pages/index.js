import Head from "next/head";
import SectionAbout from "@/components/Layout/SectionAbout";
import SectionCategory from "@/components/Layout/SectionCategory";
import SectionFeature from "@/components/Layout/SectionFeature";
import SectionHero from "@/components/Layout/SectionHero";
import SectionPrice from "@/components/Layout/SectionPrice";
import { featureData } from "../utils/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Classified Ads</title>
      </Head>
      <SectionHero />
      <SectionCategory />
      <SectionFeature featureData={featureData} />
      <SectionPrice />
      <SectionAbout />
    </>
  );
}

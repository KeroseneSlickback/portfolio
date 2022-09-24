import Head from "next/head";
import AboutMeSection from "../features/AboutMeSection";
import ShowcaseSection from "../features/ShowcaseSection";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <Layout>
      <>
        <Head>
          <title>Mitchell William Spaur</title>
        </Head>
        <ShowcaseSection />
        <AboutMeSection />
      </>
    </Layout>
  );
}

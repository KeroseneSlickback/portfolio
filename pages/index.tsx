import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import ShowcaseSection from "../features/ShowcaseSection";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mitchell William Spaur</title>
      </Head>
      <Layout>
        <>
          <ShowcaseSection></ShowcaseSection>
        </>
      </Layout>
    </>
  );
}

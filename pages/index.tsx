import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mitchell William Spaur</title>
      </Head>
      <Layout>
        <>
          <h1>Home</h1>
          <Link href="/about" passHref>
            To About Page
          </Link>
        </>
      </Layout>
    </>
  );
}

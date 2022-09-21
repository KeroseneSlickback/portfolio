import Head from "next/head";
import React from "react";
import Footer from "./footer/Footer";
import MainBody from "./main/MainBody";
import Navbar from "./navbar/Navbar";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="rel" href="../../public/favicon.ico" />
        <meta
          name="description"
          content="Portfolio for Mitchell William Spaur"
        />
        <meta name="og:title" content="Mitchell William Spaur's portfolio" />
      </Head>
      <Navbar />
      <MainBody>{children}</MainBody>
      <Footer />
    </>
  );
};

export default Layout;

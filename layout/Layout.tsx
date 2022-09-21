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
      <Navbar />
      <MainBody>{children}</MainBody>
      <Footer />
    </>
  );
};

export default Layout;

import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Footer from "./footer/Footer";
import MainBody from "./main/MainBody";
import Navbar from "./navbar/Navbar";

type Props = {
  children: JSX.Element;
};

const OverallPageContianer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = ({ children }: Props) => {
  return (
    <OverallPageContianer>
      <Navbar />
      <MainBody>{children}</MainBody>
      <Footer />
    </OverallPageContianer>
  );
};

export default Layout;

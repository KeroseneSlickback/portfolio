import React from "react";
import styled from "styled-components";
import github from "../../assets/svgs/github.svg";
import linkedin from "../../assets/svgs/linkedin.svg";
import email from "../../assets/svgs/email.svg";
import Image from "next/image";
import Link from "next/link";
import { LogoLink } from "../navbar/Navbar";
import { devices } from "../../assets/styles/GlobalStyles";

interface Props {
  children: JSX.Element;
}

const StyledMain = styled.main`
  margin-top: 4rem;
  flex-grow: 1;
  align-self: stretch;
  display: flex;
  align-items: center;
  @media ${devices.tabletM} {
    margin-top: 0;
  }
`;

const StyledSideBarWrapper = styled.div`
  display: none;

  @media ${devices.tabletM} {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    width: 5.5rem;
    height: 100%;
    padding: 1rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 1rem 0;
      gap: 1.5rem;
    }
  }
`;

const StyledSpanDiv = styled.div`
  position: relative;
  height: 50%;
  span {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.blueHighlight};
    &:nth-child(2) {
      background-color: ${({ theme }) => theme.colors.greenHighlight};
      transform: translate(-0.75rem, 0%);
      height: 75%;
    }
    &:nth-child(3) {
      background-color: ${({ theme }) => theme.colors.greenHighlight};
      transform: translate(0.75rem, 25%);
      height: 50%;
    }
  }
`;

const Sidebar = () => {
  return (
    <StyledSideBarWrapper>
      <Link href="/" passHref>
        <LogoLink>M</LogoLink>
      </Link>
      <StyledSpanDiv>
        <span />
        <span />
        <span />
      </StyledSpanDiv>
      <div>
        <a
          href="https://www.github.com/KeroseneSlickback"
          rel="noreferrer"
          target="_blank"
        >
          <Image src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/mitchell-spaur-597b23143"
          rel="noreferrer"
          target="_blank"
        >
          <Image src={linkedin} alt="linkedin" />
        </a>
        <a
          href="mailto:mitchellspaur@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <Image src={email} alt="email" />
        </a>
      </div>
    </StyledSideBarWrapper>
  );
};

const MainBodyWrapper = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 7.5rem);
  @media ${devices.tabletM} {
    min-height: calc(100vh - 8.5rem);
    margin-left: 5.5rem;
  }
`;

const MainBody = ({ children }: Props) => {
  return (
    <StyledMain>
      <Sidebar />
      <MainBodyWrapper>{children}</MainBodyWrapper>
    </StyledMain>
  );
};

export default MainBody;

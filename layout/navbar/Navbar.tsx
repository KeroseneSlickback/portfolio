import Link from "next/link";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { devices } from "../../assets/styles/GlobalStyles";

const NavBarHeader = styled.header`
  width: 100%;
  height: fit-content;
  padding: 0.5rem;
  display: flex;
  align-items: center;
`;

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${devices.tabletM} {
    margin: 0 auto;
    max-width: 54rem;
  }
`;

const LogoLink = styled.a`
  border: 2px solid ${({ theme }) => theme.colors.greenHighlight};
  height: 40px;
  width: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2rem;
`;

const MobileNavToggleContainer = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  width: 31px;
  @media ${devices.tabletM} {
    display: none;
  }
`;

const MobileNavToggle = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.backgroundPrimary};
  border: none;
  transition: 0.08s;
  margin: 0 8px 0 0;

  &:after {
    transition: 0.2s;
    position: absolute;
    content: "";
    bottom: -4px;
    right: -4px;
    background: #67dea2;
    width: 80%;
    height: 80%;
    z-index: -1;
  }

  &:before {
    transition: 0.2s;
    position: absolute;
    content: "";
    top: -4px;
    left: -4px;
    background: #67dea2;
    width: 80%;
    height: 80%;
    z-index: -1;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.backgroundSecondary};
    &:after {
      width: 125%;
      height: 125%;
    }
    &:before {
      width: 125%;
      height: 125%;
    }
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.blueOverlay};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blueOverlay};
    &:after {
      background-color: ${({ theme }) => theme.colors.blueHighlight};
    }
    &:before {
      background-color: ${({ theme }) => theme.colors.blueHighlight};
    }
  }
`;

const MobileNavSpan = styled.span`
  margin: 0;
  padding: 0;
  border: none;
  display: block;
  background: ${({ theme }) => theme.colors.textPrimary};
  width: 20px;
  height: 2px;
  transition: all 0.2s linear;
`;

const MobileNavSpan1 = styled(MobileNavSpan)<{ open?: boolean }>`
  transform: translateY(-4px);
  ${(props) =>
    props.open &&
    css`
      transform: translateY(2px) rotate(45deg);
      width: 30px;
    `}
`;
const MobileNavSpan2 = styled(MobileNavSpan)<{ open?: boolean }>`
  transform: translateY(0px);
  ${(props) =>
    props.open &&
    css`
      transform: rotate(45deg);
    `}
`;
const MobileNavSpan3 = styled(MobileNavSpan)<{ open?: boolean }>`
  transform: translateY(4px);
  ${(props) =>
    props.open &&
    css`
      transform: translateY(-2px) rotate(-45deg);
      width: 30px;
    `}
`;

const MobileBackdrop = styled.div<{ open?: boolean }>`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.open &&
    css`
      background-color: rgba(0, 0, 0, 0.75);
    `}
`;

const NavBarUL = styled.ul<{ open?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;

  inset: 0 0 0 50%;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  padding: min(4rem, 10rem) 1rem;
  transform: translateX(100%);
  margin: 0;
  transition: all 0.2s ease-in-out;
  list-style-type: none;
  li,
  div {
    margin: 0.625rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 6px 8px;
    transition: 0.15s;
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.greenHighlight};
  }

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0%);
    `}

  @media ${devices.tabletM} {
    background: none;
    transform: none;
    inset: initial;
    position: relative;
    flex-direction: row;
    padding: 0rem;
    gap: 0rem;
  }
  @media ${devices.tabletL} {
    gap: 0.625rem;
  }
`;

const Navbar = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);

  const toggleMobileNavBar = () => {
    setNavBarVisible((prev) => !prev);
  };

  return (
    <NavBarHeader>
      <NavBarContainer>
        <Link href="/" passHref>
          <LogoLink>M</LogoLink>
        </Link>
        <MobileNavToggleContainer>
          <MobileNavToggle onClick={toggleMobileNavBar}>
            <MobileNavSpan1 open={navBarVisible} />
            <MobileNavSpan2 open={navBarVisible} />
            <MobileNavSpan3 open={navBarVisible} />
          </MobileNavToggle>
        </MobileNavToggleContainer>
        <nav>
          <NavBarUL open={navBarVisible}>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
          </NavBarUL>
        </nav>
      </NavBarContainer>
      <MobileBackdrop open={navBarVisible} />
    </NavBarHeader>
  );
};

export default Navbar;

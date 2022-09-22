import Link from "next/link";
import React from "react";
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

  transition: all 0.2s ease-in-out;
`;

const MobileNavSpan1 = styled(MobileNavSpan)<{ open?: boolean }>`
  transform: translateY(-4px);
  ${(props) =>
    props.open &&
    css`
      transform: rotate(45deg) translate(1px, 1px);
      width: 30px;
    `}
`;
const MobileNavSpan2 = styled(MobileNavSpan)<{ open?: boolean }>`
  transform: translateY(0px);
  ${(props) =>
    props.open &&
    css`
      display: none;
    `}
`;
const MobileNavSpan3 = styled(MobileNavSpan)<{ open?: boolean }>`
  transform: translateY(4px);
  ${(props) =>
    props.open &&
    css`
      transform: rotate(-45deg) translate(1px, -1px);
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

const Navbar = () => {
  return (
    <NavBarHeader>
      <NavBarContainer>
        <Link href="/" passHref>
          <LogoLink>M</LogoLink>
        </Link>
        <MobileNavToggleContainer>
          <MobileNavToggle>
            <MobileNavSpan1 />
            <MobileNavSpan2 />
            <MobileNavSpan3 />
          </MobileNavToggle>
        </MobileNavToggleContainer>
      </NavBarContainer>
      <MobileBackdrop />
    </NavBarHeader>
  );
};

export default Navbar;

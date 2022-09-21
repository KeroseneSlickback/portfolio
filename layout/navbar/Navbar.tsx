import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

const NavBarHeader = styled.header`
  width: 100%;
  height: fit-content;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLinkWrapper = styled.div``;

const LogoLink = styled.a`
  border: 4px solid ${({ theme }) => theme.colors.greenHighlight};
  height: 50px;
  width: 50px;
  z-index: 100;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2.5rem;
`;

const MobileNavToggleContainer = styled.div`
  z-index: 9999;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  height: 36px;
  width: 36px;
  background-color: inherit;
  border: 2px solid $purple2;
  transform: translate(2px, 2px);
  @media ${({ theme }) => theme.tabletM} {
    display: none;
  }
`;

const MobileNavToggle = styled.button`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: $purple2;
  border: none;
  transition: 0.08s;
  transform: translate(-4px, -4px);
  &:hover {
    background-color: $purple3;
    color: $purple2;
  }
  &:active {
    transform: translate(0px, 0px);
  }
`;

const MobileNavSpan = styled.span`
  margin: 0;
  padding: 0;
  border: none;
  display: block;
  background: $yellow3;
  border-radius: 2px;
  width: 26px;
  height: 3px;
  z-index: 1000;
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
      z-index: 100;
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

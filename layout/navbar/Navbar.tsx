import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { devices } from "../../assets/styles/GlobalStyles";
import github from "../../assets/svgs/github.svg";
import linkedin from "../../assets/svgs/linkedin.svg";
import email from "../../assets/svgs/email.svg";

const NavBarHeader = styled.header`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
`;

const NavBarContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
  @media ${devices.tabletM} {
    margin: 1rem;
    height: 3.5rem;
  }
`;

const LogoLink = styled.a`
  border: 2px solid ${({ theme }) => theme.colors.greenHighlight};
  height: 100%;
  aspect-ratio: 1/1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2.4125rem;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.blueHighlight};
  }
  @media ${devices.tabletM} {
    font-size: 3.25rem;
  }
`;

const MobileNavToggleContainer = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 0.5rem);
  aspect-ratio: 1/1;
  margin-left: auto;
  @media ${devices.tabletM} {
    display: none;
  }
`;

const MobileNavToggle = styled.button<{ open?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.backgroundPrimary};
  border: none;
  transition: 0.08s;
  margin: 0 6px 0 0;

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
      width: 120%;
      height: 120%;
    }
    &:before {
      width: 120%;
      height: 120%;
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
  ${(props) =>
    props.open &&
    css`
      &:after {
        width: 120%;
        height: 120%;
        background-color: ${({ theme }) => theme.colors.blueHighlight};
      }
      &:before {
        width: 120%;
        height: 120%;
        background-color: ${({ theme }) => theme.colors.blueHighlight};
      }
    `}
`;

const MobileNavSpan = styled.span`
  margin: 0;
  padding: 0;
  border: none;
  display: block;
  background: ${({ theme }) => theme.colors.textPrimary};
  width: 26px;
  height: 2px;
  transition: all 0.2s linear;
`;

const MobileNavSpan1 = styled(MobileNavSpan)<{ open?: boolean }>`
  transform: translateY(-6px);
  ${(props) =>
    props.open &&
    css`
      transform: translateY(2px) rotate(45deg);
      width: 36px;
    `}
`;
const MobileNavSpan2 = styled(MobileNavSpan)<{ open?: boolean }>`
  transform: translateY(0px);
  ${(props) =>
    props.open &&
    css`
      opacity: 0;
    `}
`;
const MobileNavSpan3 = styled(MobileNavSpan)<{ open?: boolean }>`
  transform: translateY(6px);
  ${(props) =>
    props.open &&
    css`
      transform: translateY(-2px) rotate(-45deg);
      width: 36px;
    `}
`;

const NavBarUL = styled.ul<{ open?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 4rem 0rem 0rem 0rem;
  margin: 0;
  list-style-type: none;
  transition: all 0.1s ease-in-out;
  transform: translateX(100%);
  li,
  div {
    transition: all 0.2s ease-in-out;
    transform: translateX(100%);
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    height: 100%;
    width: 100%;
    &:nth-child(2) {
      transition-delay: 50ms;
    }
    &:nth-child(3) {
      transition-delay: 100ms;
    }
    &:nth-child(4) {
      transition-delay: 150ms;
    }
    &:nth-child(5) {
      transition-delay: 200ms;
    }
    &:nth-child(6) {
      transition-delay: 250ms;
    }
    &:nth-child(7) {
      transition-delay: 300ms;
    }
  }

  a {
    position: relative;
    font-size: 1.75rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: 0.15s;
    padding: 0.5rem 0.75rem;
    text-decoration: none;
  }

  a:after {
    content: "";
    position: absolute;
    background-color: #67dea2;
    height: 50%;
    width: 2px;
    bottom: 0;
    right: 0;
    transition: 0.25s;
  }

  a:before {
    content: "";
    position: absolute;
    background-color: #67dea2;
    height: 2px;
    width: 50%;
    bottom: 0;
    right: 0;
    transition: 0.25s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.greenHighlight};
    &:after {
      height: 75%;
    }
    &:before {
      width: 90%;
    }
  }

  a:active {
    color: ${({ theme }) => theme.colors.greenHighlight};
    &:after {
      height: 75%;
    }
    &:before {
      width: 90%;
    }
  }

  li {
    &:nth-child(5) {
      a {
        margin: 0 0.5rem;
        border: 2px solid ${({ theme }) => theme.colors.blueHighlight};
        &:hover {
          border-color: ${({ theme }) => theme.colors.textPrimary};
          color: ${({ theme }) => theme.colors.textPrimary};
        }
        &:active {
          border-color: ${({ theme }) => theme.colors.blueHighlight};
          color: ${({ theme }) => theme.colors.textPrimary};
        }
      }
      a:after {
        content: none;
      }
      a:before {
        content: none;
      }
    }
  }

  div {
    justify-content: space-evenly;
    width: 100%;
    padding: 0 16%;
  }

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0%);
      li,
      div {
        transform: translateX(0%);
      }
    `}

  @media ${devices.tabletM} {
    background: none;
    transform: none;
    position: relative;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 0rem;
    li {
      background: ${({ theme }) => theme.colors.backgroundPrimary};
      transform: none;
    }
    a {
      font-size: 1.126rem;
      padding: 0.5rem 0.635rem;
    }
    div {
      display: none;
    }
  }
  @media ${devices.laptop} {
    gap: 2rem;
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
          <MobileNavToggle onClick={toggleMobileNavBar} open={navBarVisible}>
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
            <div>
              <Image src={github} alt="github" />
              <Image src={linkedin} alt="linkedin" />
              <Image src={email} alt="email" />
            </div>
          </NavBarUL>
        </nav>
      </NavBarContainer>
    </NavBarHeader>
  );
};

export default Navbar;

import React from "react";
import styled, { css, keyframes } from "styled-components";
import { devices } from "../assets/styles/GlobalStyles";
import { SectionContainer } from "../components/containers/GeneralContainers";
import { StyledChevron } from "../components/styledSvgs/StyledChevron";
import { StyledDown } from "../components/styledSvgs/StyledDown";
import PopupContainer from "./PopupContainer";
import ShowcaseTransition from "./ShowcaseTransition";

const bounce = keyframes`
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const float = keyframes`
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }

`;

const ShowcaseWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 7.5rem);
  width: 100%;
  @media ${devices.tabletM} {
    padding: 1rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 2;
  gap: 1rem;
  text-shadow: rgb(23, 8, 47) 1px 1px 1px, rgb(23, 8, 47) -1px -1px 1px,
    rgb(23, 8, 47) -1px 1px 1px, rgb(23, 8, 47) 1px -1px 1px;
  @media ${devices.tabletM} {
    padding: 2rem;
  }
`;

const StyledH3 = styled.h3`
  font-weight: 600;
  line-height: 1;
  font-size: clamp(1rem, 5vw, 2rem);
`;

const StyledH1 = styled.h1`
  font-size: clamp(2rem, 10vw, 6rem);
  line-height: 1;
  font-weight: 600;
`;

const StyledH2 = styled.h2`
  line-height: 1;
  font-size: clamp(1.5rem, 6vw, 4rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blueHighlight};
`;

const ButtonBox = styled.div`
  bottom: 3rem;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin-bottom: 1rem;
  a {
    div {
      svg {
        stroke: ${({ theme }) => theme.colors.greenHighlight};
        animation: ${bounce} 1.5s cubic-bezier(0.25, 1, 0.25, 1) infinite;
      }
    }
  }
`;

const AnimationBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
  div {
    position: absolute;
    animation: ${float} 6s linear infinite;

    &:nth-child(1) {
      top: 15%;
      left: 20%;
      svg {
        stroke: ${({ theme }) => theme.colors.greenHighlight};
      }
      animation-duration: 18s;
      animation-delay: -12s;
      transform-origin: 40vw 10vh;
    }
    &:nth-child(2) {
      top: 10%;
      left: 56%;
      svg {
        stroke: ${({ theme }) => theme.colors.greenHighlight};
      }
      animation-duration: 17s;
      animation-delay: -1s;
      transform-origin: 30vw 15vh;
    }
    &:nth-child(3) {
      top: 70%;
      left: 50%;
      svg {
        stroke: ${({ theme }) => theme.colors.textPrimary};
      }
      animation-duration: 20s;
      animation-delay: -22s;
      transform-origin: 30vw 10vh;
    }
    &:nth-child(4) {
      top: 85%;
      left: 15%;
      svg {
        stroke: ${({ theme }) => theme.colors.textPrimary};
      }
      animation-duration: 14s;
      animation-delay: -8s;
      transform-origin: 30vw 10vh;
    }
    &:nth-child(5) {
      top: 35%;
      left: 50%;
      svg {
        stroke: ${({ theme }) => theme.colors.blueHighlight};
      }
      animation-duration: 12s;
      animation-delay: -16s;
      transform-origin: 30vw 10vh;
    }
    &:nth-child(6) {
      top: 5%;
      left: 20%;
      svg {
        stroke: ${({ theme }) => theme.colors.blueHighlight};
      }
      animation-duration: 14s;
      animation-delay: -12s;
      transform-origin: 20vw 8vh;
    }

    @media ${devices.tabletM} {
      &:nth-child(1) {
        top: 15%;
        left: 30%;
        transform-origin: 20vw 10vh;
      }
      &:nth-child(2) {
        top: 10%;
        left: 66%;
        transform-origin: 15vw 15vh;
      }
      &:nth-child(3) {
        top: 70%;
        left: 60%;
        animation-delay: -22s;
        transform-origin: 15vw 10vh;
      }
      &:nth-child(4) {
        top: 85%;
        left: 25%;
        animation-delay: -8s;
        transform-origin: 15vw 10vh;
      }
      &:nth-child(5) {
        top: 35%;
        left: 60%;
        animation-delay: -16s;
        transform-origin: 15vw 10vh;
      }
      &:nth-child(6) {
        top: 5%;
        left: 30%;
        animation-delay: -12s;
        transform-origin: 10vw 8vh;
      }
    }
  }
`;

const ShowcaseSection = () => {
  return (
    <SectionContainer littlePadding>
      <ShowcaseWrapper>
        <TextContainer>
          <PopupContainer>
            <StyledH3>Hey there, I&#39;m</StyledH3>
          </PopupContainer>
          <PopupContainer>
            <StyledH1>Mitchell Spaur</StyledH1>
          </PopupContainer>
          <PopupContainer>
            <StyledH2>A Fullstack Developer</StyledH2>
          </PopupContainer>
        </TextContainer>
        <PopupContainer delay>
          <ButtonBox>
            <a href="#about">
              <StyledDown />
            </a>
          </ButtonBox>
        </PopupContainer>
        <PopupContainer delay>
          <AnimationBox>
            <StyledChevron height="35px" width="35px" />
            <StyledChevron height="55px" width="55px" />
            <StyledChevron height="30px" width="30px" />
            <StyledChevron height="25px" width="25px" />
            <StyledChevron height="45px" width="45px" />
            <StyledChevron height="30px" width="30px" />
          </AnimationBox>
        </PopupContainer>
      </ShowcaseWrapper>
    </SectionContainer>
  );
};

export default ShowcaseSection;

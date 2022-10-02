import React from "react";
import styled, { css, keyframes } from "styled-components";
import { devices } from "../assets/styles/GlobalStyles";
import { SectionContainer } from "../components/containers/GeneralContainers";
import { StyledChevron } from "../components/styledSvgs/StyledChevron";
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
    transform: translate3d(0, 0, 1px) rotate(-360deg);
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
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 2;
  gap: 1rem;
  @media ${devices.tabletM} {
    padding: 2rem;
  }
`;

const StyledH3 = styled.h3`
  font-weight: 600;
  line-height: 1;
  font-size: clamp(1.25rem, 5vw, 2rem);
`;

const StyledH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 6rem);
  line-height: 1;
  font-weight: 600;
`;

const StyledH2 = styled.h2`
  line-height: 1;
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blueHighlight};
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  display: flex;
  gap: 2rem;
  width: 100%;
  height: 60px;
  a {
    position: relative;
    width: 100%;
    height: 100%;
    div {
      svg {
        stroke: ${({ theme }) => theme.colors.greenHighlight};
        animation: ${bounce} 1.5s cubic-bezier(0.25, 1, 0.25, 1) infinite;
      }
    }
  }
`;

const animationDuration = 6;

const random1 = Math.floor(Math.random() * 20) + 0;
const random2 = Math.floor(Math.random() * 20) + 1;
const random3 = Math.floor(Math.random() * 20) + 1;
const random4 = Math.floor(Math.random() * 20) + 1;
const random5 = Math.floor(Math.random() * 20) + 1;

const AnimationBox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  div {
    position: absolute;
    animation: ${float} 6s linear infinite;

    &:nth-child(1) {
      top: 0%;
      left: 50%;
      svg {
        stroke: red;
      }
      animation-duration: 17s;
      animation-delay: -9s;
      transform-origin: 4vw 17vh;
    }
    &:nth-child(2) {
      top: 20%;
      left: 66%;
      svg {
        stroke: green;
      }
      animation-duration: 12.8s;
      animation-delay: -9.9s;
      transform-origin: 13vw 12vh;
    }
    &:nth-child(3) {
      top: 50%;
      left: 35%;
      svg {
        stroke: pink;
      }
      animation-duration: 13.2s;
      animation-delay: -11.2s;
      transform-origin: 12vw 7vh;
    }
    &:nth-child(4) {
      top: 54%;
      left: 66%;
      svg {
        stroke: yellow;
      }
      animation-duration: 5.6s;
      animation-delay: -11.9s;
      transform-origin: 7vw 7vh;
    }
    &:nth-child(5) {
      top: 18%;
      left: 75%;
      svg {
        stroke: blue;
      }
      animation-duration: 15.8s;
      animation-delay: -15.8s;
      transform-origin: 9vw 16vh;
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
              <StyledChevron />
            </a>
          </ButtonBox>
        </PopupContainer>
        <AnimationBox>
          <StyledChevron height="25px" width="25px" />
          <StyledChevron height="50px" width="50px" />
          <StyledChevron height="35px" width="35px" />
          <StyledChevron height="25px" width="25px" />
          <StyledChevron height="20px" width="20px" />
        </AnimationBox>
      </ShowcaseWrapper>
    </SectionContainer>
  );
};

export default ShowcaseSection;

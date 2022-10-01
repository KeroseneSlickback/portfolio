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

const wordFlip = keyframes`
  0% {margin-top:-270px;}
  5% {margin-top:-180px;}
  33% {margin-top:-180px;}
  38% {margin-top:-90px;}
  66% {margin-top:-90px;}
  71% {margin-top:0px;}
  99.99% {margin-top:0px;}
  100% {margin-top:-270px;}
`;

const ShowcaseWrapper = styled.div`
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
      </ShowcaseWrapper>
    </SectionContainer>
  );
};

export default ShowcaseSection;

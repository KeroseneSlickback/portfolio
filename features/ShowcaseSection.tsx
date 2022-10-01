import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { devices } from "../assets/styles/GlobalStyles";
import { LargeLink } from "../components/buttons/Buttons";
import { SectionContainer } from "../components/containers/GeneralContainers";
import { StyledChevron } from "../components/styledSvgs/StyledChevron";
import PopupContainer from "./PopupContainer";
import SlideAndRevealContainer from "./SlideAndRevearlContainer";

const otherTitles = [
  "Disco DJ",
  "Ramen Connoisseur",
  "Lover of Flowers",
  "Casual Fiction Novelist and Poet",
];

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

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  height: calc(100vh - 7.5rem);
  width: 100%;
  padding: 2rem;
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: 36px 100px 76px;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 90%;
  z-index: 2;
`;

const StyledH3 = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 1rem;
`;

const StyledH1 = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;
`;

const StyledH2 = styled.h2`
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.blueHighlight};
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 2rem;
  width: 60px;
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
    <SectionContainer noPadding>
      <ShowcaseWrapper>
        <TextContainer>
          <SlideAndRevealContainer delay>
            <StyledH3>Hey there, I&#39;m</StyledH3>
          </SlideAndRevealContainer>
          <SlideAndRevealContainer delay>
            <StyledH1>Mitchell Spaur</StyledH1>
          </SlideAndRevealContainer>
          <SlideAndRevealContainer delay>
            <StyledH2>A Fullstack Developer</StyledH2>
          </SlideAndRevealContainer>
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

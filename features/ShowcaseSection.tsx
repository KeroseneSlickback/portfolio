import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css, keyframes } from "styled-components";
import { devices } from "../assets/styles/GlobalStyles";
import { LargeButton, LargeLink } from "../components/buttons/Buttons";
import { SectionContainer } from "../components/containers/GeneralContainers";
import { useFindWindowSize } from "../hooks/useFindWindowSize";
import PopupContainer from "./PopupContainer";

const animationSpeed = 333;

const grow = keyframes`
  0% {
    height: 99%;
    opacity: 0.1;
  }
  50% {
    height: 100%;
    opacity: 0.5;
  }
  100% {
    height: 99%;
    opacity: 0.1;
  }
`;

const riseUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ShowcaseWrapper = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.25rem;
  height: calc(100vh - 7.5rem);
  width: 100%;
  padding: 1rem;
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  padding: 1rem 0rem;
`;

const GrowingSpan = styled.span`
  display: block;
  height: 99%;
  width: 10%;
  border-radius: 0.125rem;
  background: ${({ theme }) => theme.colors.greenHighlight};
  opacity: 0.1;
  animation: 3s cubic-bezier(0.1, 0, 0.9, 1) infinite ${grow};

  &:nth-child(1) {
    animation-delay: ${animationSpeed * 0.5}ms;
  }
  &:nth-child(2) {
    animation-delay: ${animationSpeed * 1}ms;
  }
  &:nth-child(3) {
    animation-delay: ${animationSpeed * 1.5}ms;
  }
  &:nth-child(4) {
    animation-delay: ${animationSpeed * 2}ms;
  }
  &:nth-child(5) {
    animation-delay: ${animationSpeed * 2.5}ms;
  }
  &:nth-child(6) {
    animation-delay: ${animationSpeed * 3}ms;
  }
  &:nth-child(7) {
    animation-delay: ${animationSpeed * 3.5}ms;
  }
  &:nth-child(8) {
    animation-delay: ${animationSpeed * 4}ms;
  }
  &:nth-child(9) {
    animation-delay: ${animationSpeed * 4.5}ms;
  }
  &:nth-child(10) {
    animation-delay: ${animationSpeed * 5}ms;
  }
  &:nth-child(11) {
    animation-delay: ${animationSpeed * 5.5}ms;
  }
  &:nth-child(12) {
    animation-delay: ${animationSpeed * 6}ms;
  }
  &:nth-child(13) {
    animation-delay: ${animationSpeed * 6.5}ms;
  }
  &:nth-child(14) {
    animation-delay: ${animationSpeed * 7}ms;
  }
  &:nth-child(15) {
    animation-delay: ${animationSpeed * 7.5}ms;
  }
  &:nth-child(16) {
    animation-delay: ${animationSpeed * 8}ms;
  }
`;

const StyledHeading = styled.h1`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HiddenSpanWrapper = styled.span`
  width: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media ${devices.mobileM} {
    &:nth-child(1) {
      margin-left: -20%;
    }
    &:nth-child(2) {
      margin-left: -10%;
    }
    &:nth-child(4) {
    }
    &:nth-child(5) {
      margin-left: 10%;
    }
  }
  @media ${devices.tabletL} {
    &:nth-child(1) {
      margin-left: -30%;
    }
    &:nth-child(2) {
      margin-left: -15%;
    }
    &:nth-child(4) {
      margin-left: 10%;
    }
    &:nth-child(5) {
      margin-left: 30%;
    }
  }
`;

const TitleSpan = styled.span<{ secondary?: boolean }>`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1), -2px -2px 4px rgba(0, 0, 0, 1),
    -2px 2px 4px rgba(0, 0, 0, 1), 2px -2px 4px rgba(0, 0, 0, 1);
  transform: translateY(-100%);
  animation: 1s ${riseUp} ease-in-out forwards;
  font-size: 8vh;
  font-weight: 600;

  ${(props) =>
    props.secondary &&
    css`
      color: ${({ theme }) => theme.colors.blueHighlight};
    `}
  @media ${devices.mobileL} {
    font-size: 9vh;
  }
  @media ${devices.tabletS} {
    font-size: 10vh;
  }
  @media ${devices.tabletM} {
    font-size: 11vh;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0rem;
`;

const ShowcaseSection = () => {
  return (
    <SectionContainer styled noPadding>
      <ShowcaseWrapper>
        <TextContainer>
          <StyledHeading>
            <HiddenSpanWrapper>
              <TitleSpan>Mitchell</TitleSpan>
            </HiddenSpanWrapper>
            <HiddenSpanWrapper>
              <TitleSpan>William</TitleSpan>
            </HiddenSpanWrapper>
            <HiddenSpanWrapper>
              <TitleSpan>Spaur</TitleSpan>
            </HiddenSpanWrapper>
            <HiddenSpanWrapper>
              <TitleSpan secondary>Fullstack</TitleSpan>
            </HiddenSpanWrapper>
            <HiddenSpanWrapper>
              <TitleSpan secondary>Developer</TitleSpan>
            </HiddenSpanWrapper>
            <PopupContainer delay>
              <ButtonBox>
                <a href="#about">
                  <LargeLink shadow green>
                    About Me
                  </LargeLink>
                </a>
                <a href="#contact">
                  <LargeLink shadow>Contact</LargeLink>
                </a>
              </ButtonBox>
            </PopupContainer>
          </StyledHeading>
        </TextContainer>
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
        <GrowingSpan />
      </ShowcaseWrapper>
    </SectionContainer>
  );
};

export default ShowcaseSection;

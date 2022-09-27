import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css, keyframes } from "styled-components";
import { devices } from "../assets/styles/GlobalStyles";
import { LargeButton, LargeLink } from "../components/buttons/Buttons";
import { SectionContainer } from "../components/containers/GeneralContainers";
import { useFindWindowSize } from "../hooks/useFindWindowSize";

const animationSpeed = 333;

const grow = keyframes`
  0% {
    height: 44%;
    opacity: 0.1;
  }
  50% {
    height: 96%;
    opacity: 0.5;
  }
  100% {
    height: 44%;
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
`;

const GrowingSpan = styled.span`
  display: block;
  height: 44%;
  width: 1%;
  border-radius: 0.25rem;
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
  &:nth-child(17) {
    animation-delay: ${animationSpeed * 8.5}ms;
  }
  &:nth-child(18) {
    animation-delay: ${animationSpeed * 9}ms;
  }
  &:nth-child(19) {
    animation-delay: ${animationSpeed * 9.5}ms;
  }
  &:nth-child(20) {
    animation-delay: ${animationSpeed * 10}ms;
  }
  &:nth-child(21) {
    animation-delay: ${animationSpeed * 10.5}ms;
  }
  &:nth-child(22) {
    animation-delay: ${animationSpeed * 11}ms;
  }
  &:nth-child(23) {
    animation-delay: ${animationSpeed * 11.5}ms;
  }
  &:nth-child(24) {
    animation-delay: ${animationSpeed * 12}ms;
  }
  &:nth-child(25) {
    animation-delay: ${animationSpeed * 12.5}ms;
  }
  &:nth-child(26) {
    animation-delay: ${animationSpeed * 13}ms;
  }
  &:nth-child(27) {
    animation-delay: ${animationSpeed * 13.5}ms;
  }
  &:nth-child(28) {
    animation-delay: ${animationSpeed * 14}ms;
  }
  &:nth-child(29) {
    animation-delay: ${animationSpeed * 14.5}ms;
  }
  &:nth-child(30) {
    animation-delay: ${animationSpeed * 15}ms;
  }
  &:nth-child(31) {
    animation-delay: ${animationSpeed * 15.5}ms;
  }
  &:nth-child(32) {
    animation-delay: ${animationSpeed * 16}ms;
  }
  &:nth-child(33) {
    animation-delay: ${animationSpeed * 16.5}ms;
  }
  &:nth-child(34) {
    animation-delay: ${animationSpeed * 17}ms;
  }
  &:nth-child(35) {
    animation-delay: ${animationSpeed * 17.5}ms;
  }
  &:nth-child(36) {
    animation-delay: ${animationSpeed * 18}ms;
  }
  &:nth-child(37) {
    animation-delay: ${animationSpeed * 18.5}ms;
  }
  &:nth-child(38) {
    animation-delay: ${animationSpeed * 19}ms;
  }
`;

const StyledHeading = styled.h1`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    padding: 1rem 0;
    display: flex;
    gap: 2rem;
  }
`;

const HiddenSpanWrapper = styled.span`
  width: 100%;
  height: fit-content;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;

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
  text-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 1),
    -0.25rem -0.25rem 0.5rem rgba(0, 0, 0, 1),
    -0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 1),
    0.25rem -0.25rem 0.5rem rgba(0, 0, 0, 1);
  transform: translateY(-100%);
  animation: 1s ${riseUp} ease-in-out forwards;
  animation-delay: 600ms;
  font-size: clamp(3rem, 15vw, 5.25rem);

  ${(props) =>
    props.secondary &&
    css`
      color: ${({ theme }) => theme.colors.blueHighlight};
    `}
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
            <div>
              <a href="#about">
                <LargeLink shadow green>
                  About Me
                </LargeLink>
              </a>
              <a href="#contact">
                <LargeLink shadow>Contact</LargeLink>
              </a>
            </div>
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

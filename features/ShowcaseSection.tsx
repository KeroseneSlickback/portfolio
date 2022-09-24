import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
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

const ShowcaseWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
  color: #ebebf2;
  font-size: 2.75rem;
  z-index: 2;
  font-family: "Montserrat", sans-serif;
  text-shadow: 0 0 20px rgba(0, 0, 0, 1);
`;

const GrowingSpan = styled.span`
  display: block;
  height: 44%;
  width: 0.326em;
  background: ${({ theme }) => theme.colors.greenHighlight};
  opacity: 0.1;
  animation: 3s linear infinite ${grow};

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
  &:nth-child(39) {
    animation-delay: ${animationSpeed * 19.5}ms;
  }
  &:nth-child(40) {
    animation-delay: ${animationSpeed * 20}ms;
  }
  &:nth-child(41) {
    animation-delay: ${animationSpeed * 20.5}ms;
  }
  &:nth-child(42) {
    animation-delay: ${animationSpeed * 21}ms;
  }
  &:nth-child(43) {
    animation-delay: ${animationSpeed * 21.5}ms;
  }
  &:nth-child(44) {
    animation-delay: ${animationSpeed * 22}ms;
  }
  &:nth-child(45) {
    animation-delay: ${animationSpeed * 22.5}ms;
  }
  &:nth-child(46) {
    animation-delay: ${animationSpeed * 23}ms;
  }
  &:nth-child(47) {
    animation-delay: ${animationSpeed * 23.5}ms;
  }
  &:nth-child(48) {
    animation-delay: ${animationSpeed * 24}ms;
  }
  &:nth-child(49) {
    animation-delay: ${animationSpeed * 24.5}ms;
  }
`;

const ShowcaseSection = () => {
  return (
    <SectionContainer styled>
      <ShowcaseWrapper>
        <TextContainer>Hello</TextContainer>
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

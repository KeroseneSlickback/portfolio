import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css, keyframes } from "styled-components";

const popup = keyframes`
  0% {
      width: 0%;
      height: 0%;
  }
  20% {
      width: 10%;
      height: 50%;
  }
  100% {
      width: calc(100% + 4px);
      height: calc(100% + 4px);
  }
`;

const fillIn = keyframes`
  0% {
    background-color: #17082F;
  }

  50% {
    background-color: #67DEA2;
  }

  100% {
    background-color: #17082F;
  }

`;

const PopupWrapper = styled.div<{ view?: boolean; delay?: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  animation: 1s linear forwards ${fillIn};
  animation-delay: 1s;

  &:after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: ${({ theme }) => theme.colors.greenHighlight};
    width: 10%;
    height: 50%;
    z-index: -1;
    animation: 1s linear forwards ${popup};
  }

  &:before {
    content: "";
    position: absolute;
    bottom: -2px;
    right: -2px;
    background-color: ${({ theme }) => theme.colors.greenHighlight};
    width: 10%;
    height: 50%;
    z-index: -1;
    animation: 1s linear forwards ${popup};
  }
`;

interface Props {
  children: JSX.Element;
  delay?: boolean;
}

const ShowcaseTransition = ({ children, delay }: Props) => {
  const [view, setView] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.75 });

  useEffect(() => {
    if (inView) {
      setView(true);
    }
  }, [inView]);
  return (
    <PopupWrapper ref={ref} view={view} delay={delay}>
      {children}
    </PopupWrapper>
  );
};

export default ShowcaseTransition;

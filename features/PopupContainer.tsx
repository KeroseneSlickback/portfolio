import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css, keyframes } from "styled-components";

const popup = keyframes`
0% {
  opacity: 0;
  transform: translateY(1rem);
}
100% {
  opacity: 1;
  transform: translateY(0%);

}
`;

const PopupWrapper = styled.div<{ view?: boolean; delay?: boolean }>`
  width: 100%;
  & > * {
    opacity: 0;
    transform: translateY(1rem);
  }

  ${(props) =>
    props.view &&
    css`
      > * {
        animation: 0.6s cubic-bezier(0.7, 1, 0.7, 1) forwards ${popup};
      }
    `}
  ${(props) =>
    props.delay &&
    css`
      > * {
        animation-delay: 1s;
      }
    `}
`;

interface Props {
  children: JSX.Element;
  delay?: boolean;
}

const PopupContainer = ({ children, delay }: Props) => {
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

export default PopupContainer;

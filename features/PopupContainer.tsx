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

const PopupWrapper = styled.div<{ view?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > * {
    opacity: 0;
    transform: translateY(1rem);
  }

  ${(props) =>
    props.view &&
    css`
      div {
        animation: 0.6s cubic-bezier(0.7, 1, 0.7, 1) forwards ${popup};
        animation-delay: 0.4s;
      }
    `}
`;

interface Props {
  children: JSX.Element;
}

const PopupContainer = ({ children }: Props) => {
  const [view, setView] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setView(true);
    }
  }, [inView]);
  return (
    <PopupWrapper ref={ref} view={view}>
      {children}
    </PopupWrapper>
  );
};

export default PopupContainer;

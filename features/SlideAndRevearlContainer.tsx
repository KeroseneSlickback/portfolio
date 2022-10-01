import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css, keyframes } from "styled-components";

const popup = keyframes`
 0% {
  width: 0%;
  height: 0%;
  border-width: 3px;
  } 

  50% {
  width: 100%;
  height: 0%;
  > * {
    opacity: 0;
  }
  }

  97% {
  height: 100%;  
  border-width: 3px;
  > * {
    opacity: 0;
  }
  }
  
  98% {
  width: 100%;
  height: 100%;  
  border-width: 2px;
  > * {
    opacity: 0;
  }
  }

  99% {
  width: 100%;
  height: 100%;  
  border-width: 1px;
  > * {
    opacity: 0;
  }
  }

  100% {
  width: 100%;
  height: 100%;  
  border-width: 0px;
  > * {
    opacity: 1;
  }
  }
`;

const PopupWrapper = styled.div<{ view?: boolean; delay?: boolean }>`
  position: relative;
  overflow: hidden;
  width: 0%;
  height: 0%;
  animation: 2s cubic-bezier(0, 1, 1, 1) forwards ${popup};
  border-bottom: 3px solid ${({ theme }) => theme.colors.greenHighlight};

  ${(props) =>
    props.delay &&
    css`
      animation-delay: 0.6s;
    `}
`;

interface Props {
  children: JSX.Element;
  delay?: boolean;
}

const SlideAndRevealContainer = ({ children, delay }: Props) => {
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

export default SlideAndRevealContainer;

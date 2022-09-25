import styled, { keyframes } from "styled-components";

const fadeOut = keyframes` 
0% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const spin = keyframes`
  0% {
    opacity: 0;
    scale: 0;
    transform: rotate(180deg);
  }
  50% {
    scale: 1;
    opacity: 1;
    transform: rotate(360deg);
  }
  100% {
    scale: 1;
    opacity: 0;
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  top: 0;
  left: 0;
  z-index: 9999;
  animation: ${fadeOut} 0.6s linear;
`;

export const SpinnerContainer = styled.div`
  height: 120px;
  width: 120px;
  border: 4px solid ${({ theme }) => theme.colors.greenHighlight};
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 0;
  animation: ${spin} 0.6s cubic-bezier(0, 0.75, 0.5, 1);
`;

export const SpinnerText = styled.p`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

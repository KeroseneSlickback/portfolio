import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 0.5rem;
`;

export const ProjectImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 2/1;

  span > span {
    position: relative;
    z-index: 2;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.2s ease-in;
      background: hsl(0 0% 1% / 0.4);
      opacity: 1;
      z-index: 3;
    }
    &:hover {
      &:after {
        opacity: 0;
      }
    }
  }
`;

export const ProjectExplainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  h3 {
    font-size: 1.6125rem;
    line-height: 1;
  }
  p {
    padding: 1rem;
    font-size: 0.8125rem;
    background-color: ${({ theme }) => theme.colors.blueOverlay};
  }
`;

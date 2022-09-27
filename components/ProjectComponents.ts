import styled from "styled-components";
import { devices } from "../assets/styles/GlobalStyles";

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  max-width: 500px;
  @media ${devices.mobileL} {
    /* max-width: 1000px; */
  }
`;

export const ProjectImageWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: min-content;
  background: ${({ theme }) => theme.colors.blueHighlight};
  filter: saturate(75%) brightness(150%);
  transition: 0.25s;
  font-size: 0; // Added to fix NextJS's Image

  div {
    transition: 0.25s;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(0.9);
  }

  &:hover {
    filter: none;
    background: white;
    div {
      filter: none;
    }
  }
`;

export const ProjectExplainWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blueOverlay};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
  padding: 1rem 0.5rem;
  gap: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.greenHighlight};
  border-right: 2px solid ${({ theme }) => theme.colors.greenHighlight};
  h3 {
    font-size: 1.6125rem;
    line-height: 1;
  }
  p {
    padding: 0rem 1rem 0rem 1rem;
    font-size: 0.8125rem;
  }
`;

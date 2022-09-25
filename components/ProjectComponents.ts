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
  position: relative;
  width: fit-content;
  height: min-content;
  background: ${({ theme }) => theme.colors.blueHighlight};
  transition: 0.25s;
  font-size: 0; // Added to fix NextJS's Image

  div {
    transition: 0.25s;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(0.8);
  }

  &:hover {
    background: white;
    div {
      filter: none;
    }
  }
`;

export const ProjectExplainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
  h3 {
    font-size: 1.6125rem;
    line-height: 1;
    padding: 1rem;
  }
  p {
    padding: 0.5rem 1rem;
    font-size: 0.8125rem;
    background-color: rgba(29, 19, 67, 0.5);
  }
`;

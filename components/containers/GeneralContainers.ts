import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 0 0 1rem ${({ theme }) => theme.colors.backgroundHighlight};
  margin: 1rem;
  width: 100%;
  height: fit-content;
`;

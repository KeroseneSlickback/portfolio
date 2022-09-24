import styled, { css } from "styled-components";

export const SectionContainer = styled.section<{ styled?: boolean }>`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin: 1rem;
  width: 100%;
  min-height: 500px;

  ${(props) =>
    props.styled &&
    css`
      box-shadow: 0 0 0 1rem ${({ theme }) => theme.colors.backgroundHighlight};
    `}
`;

import styled, { css } from "styled-components";
import { devices } from "../../assets/styles/GlobalStyles";

export const SectionContainer = styled.section<{ styled?: boolean }>`
  display: flex;
  margin: 1rem;
  min-height: 500px;

  ${(props) =>
    props.styled &&
    css`
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
      box-shadow: 0 0 0 1rem ${({ theme }) => theme.colors.backgroundHighlight};
    `}
  @media ${devices.tabletM} {
    width: 100%;
  }
`;

export const TopBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

import styled, { css } from "styled-components";
import { devices } from "../../assets/styles/GlobalStyles";

export const SectionContainer = styled.section<{
  styled?: boolean;
  noPadding?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 2rem 0;
  gap: 2rem;

  ${(props) =>
    props.styled &&
    css`
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
      box-shadow: 0 0 0 1rem ${({ theme }) => theme.colors.backgroundHighlight};
    `}
  ${(props) =>
    props.noPadding &&
    css`
      padding: 0;
    `}
  @media ${devices.tabletM} {
    width: 100%;
  }
`;

export const TopBottomWrapper = styled.div<{ wider?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${devices.laptop} {
    max-width: 80%;
  }

  ${(props) =>
    props.wider &&
    css`
      @media ${devices.laptop} {
        max-width: 90%;
      }
    `}
`;

export const MajorityWrapper = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  gap: 2rem;
  justify-items: center;
  @media ${devices.tabletM} {
    align-items: center;
    grid-template-columns: 1.5fr 1fr;
    gap: 1rem;
  }
`;

export const BlockWrapper = styled.div`
  width: 90%;
  display: grid;
  justify-items: stretch;
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(54px, 1fr));
  gap: 2rem;
`;

import styled, { css, keyframes } from "styled-components";
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
  padding: 3rem 0;
  gap: 2rem;
  scroll-margin: 3rem;
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
    scroll-margin: 0rem;
  }
`;

export const TopBottomWrapper = styled.div<{ wider?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  scroll-margin-top: 5.5rem;

  @media ${devices.tabletM} {
    scroll-margin: 0rem;
  }
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
  width: 96%;
  display: grid;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(54px, 1fr));
  margin-top: 1rem;
  gap: 1.75rem;
  @media ${devices.mobileL} {
    width: 90%;
  }
`;

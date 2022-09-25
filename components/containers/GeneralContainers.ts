import Image from "next/image";
import styled, { css } from "styled-components";
import { devices } from "../../assets/styles/GlobalStyles";

export const SectionContainer = styled.section<{ styled?: boolean }>`
  display: flex;
  margin: 1rem;
  min-height: calc(100vh - 5.5rem);

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
  @media ${devices.tabletM} {
    margin-right: 2rem;
  }
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

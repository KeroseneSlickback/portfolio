import Link from "next/link";
import styled, { css } from "styled-components";
import { devices } from "../../assets/styles/GlobalStyles";

export const SmallButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const SmallButton = styled.button<{ shadow?: boolean; green?: boolean }>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.blueHighlight};
  padding: 0.5rem 1rem;
  font-size: 0.6125rem;
  transition: 0.2s;
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.textPrimary};
  }
  &:active {
    border: 2px solid ${({ theme }) => theme.colors.textPrimary};
    border: 2px solid ${({ theme }) => theme.colors.blueHighlight};
  }

  ${(props) =>
    props.shadow &&
    css`
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75),
        -2px -2px 2px rgba(0, 0, 0, 0.75), -2px 2px 2px rgba(0, 0, 0, 0.75),
        2px -2px 2px rgba(0, 0, 0, 0.75);
    `}
  ${(props) =>
    props.green &&
    css`
      color: ${({ theme }) => theme.colors.textPrimary};
      border: 2px solid ${({ theme }) => theme.colors.greenHighlight};
      &:hover {
        border: 2px solid ${({ theme }) => theme.colors.textPrimary};
      }
      &:active {
        border: 2px solid ${({ theme }) => theme.colors.textPrimary};
        border: 2px solid ${({ theme }) => theme.colors.greenHighlight};
      }
    `}
`;

export const MediumButton = styled(SmallButton)`
  font-size: 1rem;
  padding: 0.5em 1.25em;
`;

export const LargeButton = styled(SmallButton)`
  font-size: 1.125rem;
  @media ${devices.mobileL} {
    font-size: 1.3125rem;
    padding: 0.5em 1.5em;
  }
  @media ${devices.tabletS} {
    padding: 0.5em 2em;
  }
`;

export const LargeLink = styled(LargeButton)``;

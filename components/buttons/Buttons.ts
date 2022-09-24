import Link from "next/link";
import styled from "styled-components";
import { devices } from "../../assets/styles/GlobalStyles";

export const SmallButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 1),
    -0.25rem -0.25rem 0.25rem rgba(0, 0, 0, 1);
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
`;

export const LargeButton = styled(SmallButton)`
  font-size: 1.125rem;
  @media ${devices.mobileL} {
    padding: 0.5em 1.5em;
  }
`;

export const LargeLink = styled(LargeButton)``;

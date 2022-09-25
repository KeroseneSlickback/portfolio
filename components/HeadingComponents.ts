import styled, { css } from "styled-components";
import { devices } from "../assets/styles/GlobalStyles";

export const HeadingWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  h2 {
    font-size: clamp(1.75rem, 5vw, 2rem);
    width: max-content;
  }
  @media ${devices.mobileL} {
    grid-template-columns: 10vw max-content 35vw;
    padding: 0 1rem;
  }
`;

export const HeadingSpan = styled.span<{
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  blue?: boolean;
}>`
  position: relative;
  height: 2px;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.greenHighlight};

  ${(props) =>
    props.top &&
    css`
      &:before {
        content: "";
        position: absolute;
        height: 2px;
        width: 65%;
        bottom: 12px;
        background-color: ${({ theme }) => theme.colors.greenHighlight};
      }
    `}
  ${(props) =>
    props.bottom &&
    css`
      &:after {
        content: "";
        position: absolute;
        height: 2px;
        width: 65%;
        background-color: ${({ theme }) => theme.colors.greenHighlight};
        top: 12px;
      }
    `}
  ${(props) =>
    props.left &&
    css`
      &:before {
        left: 0;
      }
      &:after {
        left: 0;
      }
    `}
  ${(props) =>
    props.right &&
    css`
      &:before {
        right: 0;
      }
      &:after {
        right: 0;
      }
    `}
  ${(props) =>
    props.blue &&
    css`
      &:before {
        background-color: ${({ theme }) => theme.colors.blueHighlight};
      }
      &:after {
        background-color: ${({ theme }) => theme.colors.blueHighlight};
      }
    `}
`;

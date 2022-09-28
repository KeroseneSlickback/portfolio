import styled, { css } from "styled-components";
import { devices } from "../../assets/styles/GlobalStyles";

export const ProjectExpansionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  @media ${devices.laptopL} {
    max-width: 1390px;
  }
`;

export const ProjectWrapper = styled.div<{ alternative?: boolean }>`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 0.5rem 0;
  width: 100%;
  @media ${devices.tabletL} {
    max-width: 1000px;
  }
  ${(props) =>
    props.alternative &&
    css`
      align-self: flex-end;
    `}
`;

export const ProjectImageWrapper = styled.div<{ alternative?: boolean }>`
  align-self: center;
  position: relative;
  background: ${({ theme }) => theme.colors.blueHighlight};
  filter: saturate(75%) brightness(150%);
  transition: 0.25s;
  font-size: 0; // Added to fix NextJS's Image

  div {
    transition: 0.25s;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(0.9);
  }

  &:hover {
    filter: none;
    background: white;
    div {
      filter: none;
    }
  }
  @media ${devices.mobileL} {
    max-width: 500px;
    align-self: flex-start;
  }
  ${(props) =>
    props.alternative &&
    css`
      background: ${({ theme }) => theme.colors.greenHighlight};
      filter: saturate(65%) brightness(110%);
      @media ${devices.mobileL} {
        align-self: flex-end;
      }
    `}
`;

export const ProjectExplainWrapper = styled.div<{ alternative?: boolean }>`
  align-self: center;
  background: rgb(29, 19, 67);
  background: linear-gradient(
    315deg,
    rgba(29, 19, 67, 0.75) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
  padding: 1rem 1rem;
  gap: 1rem;
  margin-top: -15%;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    right: 0;
    background-color: rgba(104, 167, 255, 0.5);
    width: 100%;
    height: 2px;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgba(104, 167, 255, 0.5);
    height: 100%;
    width: 2px;
  }

  h3 {
    font-size: clamp(1.6125rem, 4vw, 2rem);
    line-height: 1;
    color: ${({ theme }) => theme.colors.blueHighlight};
  }
  p {
    padding: 0rem 0.5rem;
    font-size: clamp(0.8125rem, 2vw, 1rem);
  }
  span {
    display: flex;
    gap: 0.5rem;
    padding: 0rem 0.5rem;

    p {
      padding: 0rem;
      font-size: clamp(0.6125rem, 2vw, 0.8125rem);
    }
  }

  @media ${devices.mobileL} {
    max-width: 600px;
    align-self: flex-end;
  }
  @media ${devices.tabletL} {
    margin-top: -26%;
  }
  ${(props) =>
    props.alternative &&
    css`
      align-items: flex-start;
      background: rgb(29, 19, 67);
      background: linear-gradient(
        45deg,
        rgba(29, 19, 67, 0.75) 0%,
        rgba(255, 255, 255, 0) 100%
      );

      h3 {
        color: ${({ theme }) => theme.colors.greenHighlight};
      }
      &:after {
        background-color: rgba(103, 222, 162, 0.5);
        width: 100%;
        height: 2px;
      }

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgba(103, 222, 162, 0.5);
        height: 100%;
        width: 2px;
      }
      @media ${devices.mobileL} {
        align-self: flex-start;
      }
    `}
`;

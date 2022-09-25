import styled from "styled-components";
import { devices } from "../assets/styles/GlobalStyles";

export const AboutMeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  @media ${devices.mobileL} {
    margin: 0 1rem;
  }
`;

export const AboutMeP = styled.p`
  font-size: clamp(0.825em, 2vw, 1em);
`;

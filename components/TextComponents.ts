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

export const FocusP = styled.p`
  text-align: center;
  font-size: clamp(1.25em, 2vw, 1.5em);
  margin-bottom: 0.5rem;
`;

export const AboutMeP = styled.p`
  font-size: clamp(0.9125em, 2vw, 1.125em);
  line-height: 1.6;
`;

import React from "react";
import {
  SectionContainer,
  TopBottomWrapper,
} from "../components/containers/GeneralContainers";
import { HeadingSpan, HeadingWrapper } from "../components/HeadingComponents";

const AboutMeSection = () => {
  return (
    <SectionContainer>
      <TopBottomWrapper>
        <HeadingWrapper>
          <HeadingSpan top right />
          <h2>About Me</h2>
          <HeadingSpan bottom blue left />
        </HeadingWrapper>
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default AboutMeSection;

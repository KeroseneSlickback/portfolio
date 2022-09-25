import React from "react";
import {
  SectionContainer,
  TopBottomWrapper,
} from "../components/containers/GeneralContainers";
import { HeadingSpan, HeadingWrapper } from "../components/HeadingComponents";

const ProjectsSection = () => {
  return (
    <SectionContainer styled>
      <TopBottomWrapper>
        <HeadingWrapper>
          <HeadingSpan top right blue />
          <h2>Projects</h2>
          <HeadingSpan bottom />
        </HeadingWrapper>
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default ProjectsSection;

import React from "react";
import {
  SectionContainer,
  TopBottomWrapper,
} from "../components/containers/GeneralContainers";
import { ProjectExpansionWrapper } from "../components/projectComponents/ProjectComponents";
import Heading from "./Heading";
import PopupContainer from "./PopupContainer";
import SingleProject from "./SingleProject";

import Projects from "../data/projects.json";

const ProjectsSection = () => {
  console.log(Projects);
  return (
    <SectionContainer styled id="projects">
      <TopBottomWrapper wider>
        <PopupContainer>
          <Heading
            text="Projects"
            LSVert="top"
            LSHorz="right"
            LSColor="blue"
            RSVert="bottom"
          />
        </PopupContainer>
        <ProjectExpansionWrapper>
          <SingleProject />
          <SingleProject alternative />
          <SingleProject />
          <SingleProject alternative />
          <SingleProject />
        </ProjectExpansionWrapper>
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default ProjectsSection;

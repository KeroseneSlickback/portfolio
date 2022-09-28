import Image from "next/image";
import React from "react";
import {
  SectionContainer,
  TopBottomWrapper,
} from "../components/containers/GeneralContainers";
import {
  ProjectExpansionWrapper,
  ProjectExplainWrapper,
  ProjectImageWrapper,
  ProjectWrapper,
} from "../components/projectComponents/ProjectComponents";
import {
  MediumButton,
  SmallButtonWrapper,
} from "../components/buttons/Buttons";
import Heading from "./Heading";
import PopupContainer from "./PopupContainer";
import SingleProject from "./SingleProject";

const ProjectsSection = () => {
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

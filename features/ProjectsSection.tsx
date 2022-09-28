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
import MusicPlug from "../public/images/MusicPlug.png";
import Yakumon from "../public/images/Yakumon.png";
import KatoBeauty from "../public/images/KatoBeauty.png";
import Portfolio from "../public/images/Portfolio.png";
import Yambo from "../public/images/Yambo.png";

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
          <SingleProject project={Projects[0]} photo={MusicPlug} />
          <SingleProject project={Projects[1]} photo={Yakumon} alternative />
          <SingleProject project={Projects[2]} photo={KatoBeauty} />
          <SingleProject project={Projects[3]} photo={Portfolio} alternative />
          <SingleProject project={Projects[4]} photo={Yambo} />
        </ProjectExpansionWrapper>
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default ProjectsSection;

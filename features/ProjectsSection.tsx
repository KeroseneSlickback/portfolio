import Image from "next/image";
import React, { useState } from "react";
import {
  SectionContainer,
  TopBottomWrapper,
} from "../components/containers/GeneralContainers";
import { HeadingSpan, HeadingWrapper } from "../components/HeadingComponents";
import {
  ProjectExplainWrapper,
  ProjectImageWrapper,
  ProjectWrapper,
} from "../components/ProjectComponents";
import dummyImage from "../assets/images/dummyimage.jpeg";
import {
  MediumButton,
  SmallButtonWrapper,
} from "../components/buttons/Buttons";

const ProjectsSection = () => {
  const [aspect, setAspect] = useState(16 / 9);
  return (
    <SectionContainer styled>
      <TopBottomWrapper>
        <HeadingWrapper>
          <HeadingSpan top right blue />
          <h2>Projects</h2>
          <HeadingSpan bottom />
        </HeadingWrapper>
        <ProjectWrapper>
          <ProjectImageWrapper>
            <div>
              <Image
                src={dummyImage}
                alt="project"
                width={500}
                height={500 / aspect}
              />
            </div>
          </ProjectImageWrapper>
          <ProjectExplainWrapper>
            <h3>MusicPlug</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam temporibus repellat perspiciatis ullam tempore quisquam
              recusandae ab omnis quam error necessitatibus quas, accusamus
              voluptatem dolorem, cumque deserunt totam assumenda laborum!
            </p>
            <SmallButtonWrapper>
              <MediumButton green>GitHub</MediumButton>
              <MediumButton>Live Site</MediumButton>
            </SmallButtonWrapper>
          </ProjectExplainWrapper>
        </ProjectWrapper>
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default ProjectsSection;

import Image from "next/image";
import React, { useState } from "react";
import {
  SectionContainer,
  TopBottomWrapper,
} from "../components/containers/GeneralContainers";
import { HeadingSpan, HeadingWrapper } from "../components/HeadingComponents";
import {
  ProjectExpansionWrapper,
  ProjectExplainWrapper,
  ProjectImageWrapper,
  ProjectWrapper,
} from "../components/projectComponents/ProjectComponents";
import dummyImage from "../assets/images/dummyimage.jpeg";
import {
  MediumButton,
  SmallButtonWrapper,
} from "../components/buttons/Buttons";

const ProjectsSection = () => {
  return (
    <SectionContainer styled>
      <TopBottomWrapper wider>
        <HeadingWrapper>
          <HeadingSpan top right blue />
          <h2>Projects</h2>
          <HeadingSpan bottom />
        </HeadingWrapper>
        <ProjectExpansionWrapper>
          <ProjectWrapper>
            <ProjectImageWrapper>
              <div>
                <Image src={dummyImage} alt="project" />
              </div>
            </ProjectImageWrapper>
            <ProjectExplainWrapper>
              <h3>MusicPlug</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam temporibus repellat perspiciatis ullam tempore
                quisquam recusandae ab omnis quam error necessitatibus quas,
                accusamus voluptatem dolorem, cumque deserunt totam assumenda
                laborum!
              </p>
              <SmallButtonWrapper>
                <MediumButton green>GitHub</MediumButton>
                <MediumButton>Live Site</MediumButton>
              </SmallButtonWrapper>
            </ProjectExplainWrapper>
          </ProjectWrapper>
          <ProjectWrapper alternative>
            <ProjectImageWrapper alternative>
              <div>
                <Image src={dummyImage} alt="project" />
              </div>
            </ProjectImageWrapper>
            <ProjectExplainWrapper alternative>
              <h3>MusicPlug</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam temporibus repellat perspiciatis ullam tempore
                quisquam recusandae ab omnis quam error necessitatibus quas,
                accusamus voluptatem dolorem, cumque deserunt totam assumenda
                laborum!
              </p>
              <SmallButtonWrapper>
                <MediumButton green>GitHub</MediumButton>
                <MediumButton>Live Site</MediumButton>
              </SmallButtonWrapper>
            </ProjectExplainWrapper>
          </ProjectWrapper>
          <ProjectWrapper>
            <ProjectImageWrapper>
              <div>
                <Image src={dummyImage} alt="project" />
              </div>
            </ProjectImageWrapper>
            <ProjectExplainWrapper>
              <h3>MusicPlug</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam temporibus repellat perspiciatis ullam tempore
                quisquam recusandae ab omnis quam error necessitatibus quas,
                accusamus voluptatem dolorem, cumque deserunt totam assumenda
                laborum!
              </p>
              <SmallButtonWrapper>
                <MediumButton green>GitHub</MediumButton>
                <MediumButton>Live Site</MediumButton>
              </SmallButtonWrapper>
            </ProjectExplainWrapper>
          </ProjectWrapper>
          <ProjectWrapper alternative>
            <ProjectImageWrapper alternative>
              <div>
                <Image src={dummyImage} alt="project" />
              </div>
            </ProjectImageWrapper>
            <ProjectExplainWrapper alternative>
              <h3>MusicPlug</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam temporibus repellat perspiciatis ullam tempore
                quisquam recusandae ab omnis quam error necessitatibus quas,
                accusamus voluptatem dolorem, cumque deserunt totam assumenda
                laborum!
              </p>
              <SmallButtonWrapper>
                <MediumButton green>GitHub</MediumButton>
                <MediumButton>Live Site</MediumButton>
              </SmallButtonWrapper>
            </ProjectExplainWrapper>
          </ProjectWrapper>
        </ProjectExpansionWrapper>
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default ProjectsSection;

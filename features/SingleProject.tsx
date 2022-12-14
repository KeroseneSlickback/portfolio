import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import {
  MediumButton,
  SmallButtonWrapper,
} from "../components/buttons/Buttons";
import {
  ProjectExplainWrapper,
  ProjectImageWrapper,
  ProjectWrapper,
} from "../components/projectComponents/ProjectComponents";
import styled, { css, keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

const popup = keyframes`
0% {
  opacity: 0;
  transform: translateY(1rem);
}
100% {
  opacity: 1;
  transform: translateY(0%);

}
`;

const PopupProjectWrapper = styled(ProjectWrapper)<{ view?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  > * {
    opacity: 0;
    transform: translateY(1rem);
  }

  ${(props) =>
    props.view &&
    css`
      > * {
        animation: 0.6s cubic-bezier(0.7, 1, 0.7, 1) forwards ${popup};
        /* animation-delay: 0.4s; */
      }
    `}
`;

interface ProjectType {
  body: string;
  tech: string;
  title: string;
  siteUrl: string;
  gitHubUrl: string;
}

interface Props {
  alternative?: boolean;
  project: ProjectType;
  photo: StaticImageData;
}

const SingleProject = ({ alternative, project, photo }: Props) => {
  const [view, setView] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.33 });
  useEffect(() => {
    if (inView) {
      setView(true);
    }
  }, [inView]);
  return (
    <PopupProjectWrapper alternative={alternative} ref={ref} view={view}>
      <ProjectImageWrapper alternative={alternative}>
        <div>
          <Image src={photo} alt="project" priority={true} />
        </div>
      </ProjectImageWrapper>
      <ProjectExplainWrapper alternative={alternative}>
        <h3>{project.title}</h3>
        <p>{project.body}</p>
        <span>
          <p>{project.tech}</p>
        </span>
        <SmallButtonWrapper>
          <a href={project.gitHubUrl} rel="noreferrer" target="_blank">
            <MediumButton shadow green>
              GitHub
            </MediumButton>
          </a>
          <a href={project.siteUrl} rel="noreferrer" target="_blank">
            <MediumButton shadow>Live Site</MediumButton>
          </a>
        </SmallButtonWrapper>
      </ProjectExplainWrapper>
    </PopupProjectWrapper>
  );
};

export default SingleProject;

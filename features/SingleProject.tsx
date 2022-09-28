import Image from "next/image";
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
import dummyImage from "../assets/images/dummyimage.jpeg";
import styled, { css, keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

interface Props {
  alternative?: boolean;
}

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
  & > * {
    opacity: 0;
    transform: translateY(1rem);
  }

  ${(props) =>
    props.view &&
    css`
      div {
        animation: 0.6s cubic-bezier(0.7, 1, 0.7, 1) forwards ${popup};
        animation-delay: 0.4s;
      }
    `}
`;

const SingleProject = ({ alternative }: Props) => {
  const [view, setView] = useState(false);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      setView(true);
    }
  }, [inView]);
  return (
    <PopupProjectWrapper alternative={alternative} ref={ref} view={view}>
      <ProjectImageWrapper alternative={alternative}>
        <div>
          <Image src={dummyImage} alt="project" />
        </div>
      </ProjectImageWrapper>
      <ProjectExplainWrapper alternative={alternative}>
        <h3>MusicPlug</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          temporibus repellat perspiciatis ullam tempore quisquam recusandae ab
          omnis quam error necessitatibus quas, accusamus voluptatem dolorem,
          cumque deserunt totam assumenda laborum!
        </p>
        <span>
          <p>React - MongoDB - Node - Express - Mongoose</p>
        </span>
        <SmallButtonWrapper>
          <MediumButton green>GitHub</MediumButton>
          <MediumButton>Live Site</MediumButton>
        </SmallButtonWrapper>
      </ProjectExplainWrapper>
    </PopupProjectWrapper>
  );
};

export default SingleProject;

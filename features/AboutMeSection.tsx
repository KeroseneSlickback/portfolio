import React from "react";
import {
  BlockWrapper,
  MajorityWrapper,
  SectionContainer,
  TopBottomWrapper,
} from "../components/containers/GeneralContainers";
import {
  AboutMeP,
  AboutMeTextWrapper,
  FocusP,
} from "../components/TextComponents";
import SkillBlock from "../components/SkillBlockComponent";
import HTML5 from "../assets/svgs/HTML5.svg";
import CSS from "../assets/svgs/CSS.svg";
import Javascript from "../assets/svgs/Javascript.svg";
import Typescript from "../assets/svgs/Typescript.svg";
import ReactSVG from "../assets/svgs/React.svg";
import Node from "../assets/svgs/Node.svg";
import MongoDB from "../assets/svgs/MongoDB.svg";
import Jest from "../assets/svgs/Jest.svg";
import NextJS from "../assets/svgs/NextJS.svg";
import Express from "../assets/svgs/Express.svg";
import GithubIcon from "../assets/svgs/GithubIcon.svg";
import ImageComponent from "../components/ImageComponent";
import Heading from "./Heading";
import PopupContainer from "./PopupContainer";

import PersonalInfo from "../data/personalInfo.json";
import selfphoto from "../public/images/selfphoto.jpg";

const AboutMeSection = () => {
  return (
    <SectionContainer>
      <TopBottomWrapper id="about">
        <PopupContainer>
          <Heading
            text="About Me"
            LSVert="top"
            LSHorz="right"
            RSVert="bottom"
            RSHorz="left"
            RSColor="blue"
          />
        </PopupContainer>
        <PopupContainer>
          <MajorityWrapper>
            <AboutMeTextWrapper>
              <FocusP>{PersonalInfo.firstPara}</FocusP>
              <AboutMeP>{PersonalInfo.secondPara}</AboutMeP>
              <AboutMeP>{PersonalInfo.thirdPara}</AboutMeP>
            </AboutMeTextWrapper>
            <ImageComponent
              src={selfphoto}
              alt="Mitchell William Spaur"
              height={300}
              width={300}
            />
          </MajorityWrapper>
        </PopupContainer>
      </TopBottomWrapper>
      <TopBottomWrapper id="skills">
        <PopupContainer>
          <Heading
            text="Skills"
            LSVert="bottom"
            LSHorz="right"
            LSColor="blue"
            RSVert="top"
            RSHorz="left"
          />
        </PopupContainer>
        <PopupContainer>
          <BlockWrapper>
            <SkillBlock src={HTML5} alt="HTML5" height={54} width={54} />
            <SkillBlock src={CSS} alt="CSS" height={54} width={54} />
            <SkillBlock
              src={Javascript}
              alt="Javascript"
              height={54}
              width={54}
            />
            <SkillBlock
              src={Typescript}
              alt="Typescript"
              height={54}
              width={54}
            />
            <SkillBlock src={ReactSVG} alt="React" height={54} width={54} />
            <SkillBlock src={Node} alt="Node" height={54} width={54} />
            <SkillBlock src={Express} alt="Express" height={54} width={54} />
            <SkillBlock src={MongoDB} alt="MongoDB" height={54} width={54} />
            <SkillBlock src={Jest} alt="Jest" height={54} width={54} />
            <SkillBlock src={NextJS} alt="NextJS" height={54} width={54} />
            <SkillBlock src={GithubIcon} alt="Github" height={54} width={54} />
          </BlockWrapper>
        </PopupContainer>
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default AboutMeSection;

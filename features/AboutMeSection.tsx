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
import Figma from "../assets/svgs/Figma.svg";
import NPM from "../assets/svgs/NPM.svg";
import SASS from "../assets/svgs/SASS.svg";
import Webpack from "../assets/svgs/Webpack.svg";
import Git from "../assets/svgs/Git.svg";
import Bootstrap from "../assets/svgs/Bootstrap.svg";
import Tailwind from "../assets/svgs/Tailwind.svg";
import Vite from "../assets/svgs/Vite.svg";
import Postman from "../assets/svgs/Postman.svg";

import MongooseJS from "../public/images/icons/MongooseJS.png";
import StyledComponents from "../public/images/icons/StyledComponents.png";

import ImageComponent from "../components/ImageComponent";
import Heading from "./Heading";
import PopupContainer from "./PopupContainer";

import PersonalInfo from "../data/personalInfo.json";
import selfphoto from "../public/images/selfphoto.jpg";

const AboutMeSection = () => {
  return (
    <SectionContainer styled>
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
            <SkillBlock src={HTML5} alt="HTML5" />
            <SkillBlock src={CSS} alt="CSS" />
            <SkillBlock src={Javascript} alt="Javascript" />
            <SkillBlock src={Typescript} alt="Typescript" />
            <SkillBlock src={ReactSVG} alt="React" />
            <SkillBlock src={NextJS} alt="NextJS" />
            <SkillBlock src={Node} alt="Node" />
            <SkillBlock src={Express} alt="Express" />
            <SkillBlock src={MongooseJS} alt="Mongoose" />
            <SkillBlock src={MongoDB} alt="MongoDB" />
            <SkillBlock src={Jest} alt="Jest" />
            <SkillBlock src={Git} alt="Git" />
            <SkillBlock src={GithubIcon} alt="Github" />
            <SkillBlock src={Figma} alt="Figma" />
            <SkillBlock src={Postman} alt="Postman" />
            <SkillBlock src={NPM} alt="NPM" />
            <SkillBlock src={Webpack} alt="Webpack" />
            <SkillBlock src={Vite} alt="Vite" />
            <SkillBlock src={StyledComponents} alt="StyledComp" />
            <SkillBlock src={SASS} alt="SASS" />
            <SkillBlock src={Bootstrap} alt="Bootstrap" />
            <SkillBlock src={Tailwind} alt="Tailwind" />
          </BlockWrapper>
        </PopupContainer>
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default AboutMeSection;

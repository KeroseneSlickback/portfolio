import React from "react";
import {
  BlockWrapper,
  MajorityWrapper,
  SectionContainer,
  TopBottomWrapper,
} from "../components/containers/GeneralContainers";
import { HeadingSpan, HeadingWrapper } from "../components/HeadingComponents";
import { AboutMeP, AboutMeTextWrapper } from "../components/TextComponents";
import straightshot from "../assets/images/straightshot.jpg";
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

const AboutMeSection = () => {
  return (
    <SectionContainer>
      <TopBottomWrapper>
        <HeadingWrapper>
          <HeadingSpan top right />
          <h2>About Me</h2>
          <HeadingSpan bottom blue left />
        </HeadingWrapper>
        <MajorityWrapper>
          <AboutMeTextWrapper>
            <AboutMeP>
              Praesent vestibulum augue ac efficitur tempus. Sed a risus eu nisl
              egestas maximus. Nunc elementum quam quis risus ornare, ut
              tristique ipsum lacinia. Nunc lacinia, nulla vel lobortis
              molestie, nulla justo eleifend nisl, vitae posuere nisi lorem eu
              ligula. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </AboutMeP>
            <AboutMeP>
              Integer nunc dolor, ultricies tempus molestie nec, interdum vel
              odio. Aliquam vel gravida dui. Nam non faucibus ipsum, a hendrerit
              leo. Ut id tellus non leo facilisis suscipit id eget quam. Cras
              maximus, ligula vel rhoncus tempus, est augue vulputate nulla,
              euismod tempor est sem ac quam. Proin mollis ullamcorper
              pellentesque.
            </AboutMeP>{" "}
            <AboutMeP>
              Praesent vestibulum libero risus, ac volutpat orci rhoncus eu.
              Pellentesque posuere ante fringilla erat tristique malesuada. In
              felis ex, sagittis nec vulputate nec, tristique nec leo.
            </AboutMeP>
          </AboutMeTextWrapper>
          <ImageComponent
            src={straightshot}
            alt="Mitchell William Spaur"
            height={300}
            width={300}
          />
        </MajorityWrapper>
      </TopBottomWrapper>
      <TopBottomWrapper>
        <HeadingWrapper>
          <HeadingSpan bottom right blue />
          <h2>Skills</h2>
          <HeadingSpan top left />
        </HeadingWrapper>
        <BlockWrapper>
          <SkillBlock src={HTML5} alt="HTML" height={54} width={54} />
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
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default AboutMeSection;
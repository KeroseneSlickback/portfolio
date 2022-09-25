import React from "react";
import {
  MajorityWrapper,
  SectionContainer,
  TopBottomWrapper,
} from "../components/containers/GeneralContainers";
import { HeadingSpan, HeadingWrapper } from "../components/HeadingComponents";
import { AboutMeP } from "../components/TextComponents";
import straightshot from "../assets/images/straightshot.jpg";
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
          <AboutMeP>
            Praesent vestibulum augue ac efficitur tempus. Sed a risus eu nisl
            egestas maximus. Nunc elementum quam quis risus ornare, ut tristique
            ipsum lacinia. Nunc lacinia, nulla vel lobortis molestie, nulla
            justo eleifend nisl, vitae posuere nisi lorem eu ligula. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Integer nunc dolor, ultricies tempus molestie
            nec, interdum vel odio. Aliquam vel gravida dui. Nam non faucibus
            ipsum, a hendrerit leo. Ut id tellus non leo facilisis suscipit id
            eget quam. Cras maximus, ligula vel rhoncus tempus, est augue
            vulputate nulla, euismod tempor est sem ac quam. Proin mollis
            ullamcorper pellentesque. Praesent vestibulum libero risus, ac
            volutpat orci rhoncus eu. Pellentesque posuere ante fringilla erat
            tristique malesuada. In felis ex, sagittis nec vulputate nec,
            tristique nec leo.
          </AboutMeP>
          <ImageComponent
            src={straightshot}
            alt="Mitchell William Spaur"
            height={350}
            width={350}
          />
        </MajorityWrapper>
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default AboutMeSection;

import React from "react";
import styled from "styled-components";
import Image from "next/image";

import {
  SectionContainer,
  TopBottomWrapper,
} from "../components/containers/GeneralContainers";
import { HeadingSpan, HeadingWrapper } from "../components/HeadingComponents";
import linkedin from "../assets/svgs/linkedin.svg";
import email from "../assets/svgs/email.svg";
import { devices } from "../assets/styles/GlobalStyles";

const ContactMessage = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 4rem;
`;

const ContactBlockWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  max-width: 500px;
  justify-content: space-evenly;
  align-items: center;
  @media ${devices.tabletS} {
    width: 75%;
  }
`;

const ContactWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.backgroundPrimary};
  background: ${({ theme }) => theme.colors.backgroundPrimary};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 1rem;
  }

  p {
    text-align: center;
    font-size: 1.25rem;
    line-height: 0;
    margin: 0.5rem 0 1rem 0;
  }

  &:after {
    transition: 0.2s;
    position: absolute;
    content: "";
    bottom: -9%;
    right: -9%;
    background: ${({ theme }) => theme.colors.greenHighlight};
    width: 66%;
    height: 66%;
    z-index: -1;
  }

  &:before {
    transition: 0.2s;
    position: absolute;
    content: "";
    top: -9%;
    left: -9%;
    background: ${({ theme }) => theme.colors.greenHighlight};
    width: 66%;
    height: 66%;
    z-index: -1;
  }

  &:hover {
    box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.backgroundPrimary};
    &:after {
      width: 118%;
      height: 118%;
    }
    &:before {
      width: 118%;
      height: 118%;
    }
  }

  @media ${devices.mobileM} {
    width: 120px;
    height: 120px;
  }
`;

const StyledImg = styled(Image)``;

interface Props {
  alt: string;
  src: string;
  height: number;
  width: number;
  href: string;
  rel?: string;
  target?: string;
}

const ContactBlock = ({
  alt,
  src,
  height,
  width,
  href,
  rel,
  target,
}: Props) => {
  return (
    <ContactWrapper>
      <a href={href} rel={rel} target={target}>
        <StyledImg
          alt={alt}
          src={src}
          quality={70}
          height={height}
          width={width}
        />
        <p>{alt}</p>
      </a>
    </ContactWrapper>
  );
};

const ContactSection = () => {
  return (
    <SectionContainer>
      <TopBottomWrapper>
        <HeadingWrapper>
          <HeadingSpan bottom right />
          <h2>Get in touch</h2>
          <HeadingSpan top blue />
        </HeadingWrapper>
        <ContactMessage>
          Please feel free to contact me whenever you wish.
        </ContactMessage>
        <ContactBlockWrapper>
          <ContactBlock
            src={linkedin}
            alt="Linkedin"
            height={80}
            width={80}
            href="https://www.linkedin.com/in/mitchell-spaur-597b23143"
            rel="noreferrer"
            target="_blank"
          />
          <ContactBlock
            src={email}
            alt="Email"
            height={80}
            width={80}
            href="mailto:mitchellspaur@gmail.com"
            rel="noreferrer"
            target="_blank"
          />
        </ContactBlockWrapper>
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default ContactSection;

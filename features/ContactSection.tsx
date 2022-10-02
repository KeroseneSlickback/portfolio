import React from "react";
import styled from "styled-components";
import Image from "next/image";

import {
  SectionContainer,
  TopBottomWrapper,
} from "../components/containers/GeneralContainers";
import { devices } from "../assets/styles/GlobalStyles";
import { StyledLinkedIn } from "../components/styledSvgs/StyledLinkedIn";
import { StyledEmail } from "../components/styledSvgs/StyledEmail";
import Heading from "./Heading";
import PopupContainer from "./PopupContainer";

const ContactMessage = styled.h4`
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: 4rem;
`;

const ContactBlockWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media ${devices.tabletS} {
    gap: 4rem;
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
  z-index: 2;
  box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.backgroundSecondary};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  a {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    width: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    div {
      svg {
        transition: 0.2s;
        height: 80%;
        width: 80%;
        stroke: ${({ theme }) => theme.colors.blueHighlight};
      }
    }
    &:hover {
      div {
        svg {
          stroke: ${({ theme }) => theme.colors.textPrimary};
        }
      }
    }
    p {
      margin: 0.5rem 0 1.5rem 0;
      text-align: center;
      font-size: 1.25rem;
      line-height: 0;
    }
  }

  &:after {
    z-index: -1;
    transition: 0.2s;
    position: absolute;
    content: "";
    bottom: -1%;
    right: -1%;
    background: ${({ theme }) => theme.colors.greenHighlight};
    width: 25%;
    height: 25%;
    z-index: -1;
  }

  &:before {
    z-index: -1;
    transition: 0.2s;
    position: absolute;
    content: "";
    top: -1%;
    left: -1%;
    background: ${({ theme }) => theme.colors.greenHighlight};
    width: 25%;
    height: 25%;
    z-index: -1;
  }

  &:hover {
    box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.backgroundSecondary};
    &:after {
      width: 102%;
      height: 102%;
    }
    &:before {
      width: 102%;
      height: 102%;
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

const ContactMessageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ContactSection = () => {
  return (
    <SectionContainer styled>
      <TopBottomWrapper id="contact">
        <PopupContainer>
          <Heading
            text="Get in touch"
            LSVert="bottom"
            LSHorz="right"
            RSVert="top"
            RSColor="blue"
          />
        </PopupContainer>
        <PopupContainer>
          <ContactMessageWrapper>
            <ContactMessage>
              Please feel free to contact me whenever you wish.
            </ContactMessage>
          </ContactMessageWrapper>
        </PopupContainer>
        <PopupContainer>
          <ContactBlockWrapper>
            <ContactWrapper>
              <a
                href="https://www.linkedin.com/in/mitchell-spaur-597b23143"
                rel="noreferrer"
                target="_blank"
              >
                <StyledLinkedIn />
                <p>LinkedIn</p>
              </a>
            </ContactWrapper>
            <ContactWrapper>
              <a
                href="mailto:mitchellspaur@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <StyledEmail />
                <p>Email</p>
              </a>
            </ContactWrapper>
          </ContactBlockWrapper>
        </PopupContainer>
      </TopBottomWrapper>
    </SectionContainer>
  );
};

export default ContactSection;

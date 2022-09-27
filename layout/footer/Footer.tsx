import React from "react";
import styled from "styled-components";
import { devices } from "../../assets/styles/GlobalStyles";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 5.5rem;
  margin-top: auto;
  @media ${devices.tabletM} {
    margin-left: 5.5rem;
    width: calc(100% - 5.5rem);
  }
`;

const FooterP = styled.p`
  font-size: 0.825rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterP>Built with ❤️ using NextJS/React.</FooterP>
      <FooterP>All content © 2014-Present.</FooterP>
    </StyledFooter>
  );
};

export default Footer;

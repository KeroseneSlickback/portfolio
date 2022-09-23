import React from "react";
import styled from "styled-components";
import { devices } from "../../assets/styles/GlobalStyles";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin-top: auto;
  @media ${devices.tabletM} {
    margin-left: 5.5rem;
    width: calc(100% - 5.5rem);
  }
`;

const Footer = () => {
  return <StyledFooter>StyledFooter</StyledFooter>;
};

export default Footer;

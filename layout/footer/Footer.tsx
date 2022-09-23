import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-left: 5.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  width: calc(100% - 5.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  z-index: 2;
  margin-top: auto;
`;

const Footer = () => {
  return <StyledFooter>StyledFooter</StyledFooter>;
};

export default Footer;

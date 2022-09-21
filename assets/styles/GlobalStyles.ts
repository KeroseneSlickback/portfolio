import { createGlobalStyle } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      backgroundPrimary?: string;
      backgroundSecondary?: string;
      textPrimary?: string;
      greenHighlight?: string;
      blueHighlight?: string;
      blueOverlay?: string;
      mobileS?: string;
      mobileM?: string;
      mobileL?: string;
      tabletS?: string;
      tabletM?: string;
      tabletL?: string;
      laptop?: string;
      laptopL?: string;
    };
  }
}

export const theme = {
  colors: {
    backgroundPrimary: "#17082F",
    backgroundSecondary: "#1D1343",
    textPrimary: "#EBEBF2",
    greenHighlight: "#67DEA2",
    blueHighlight: "#68A7FF",
    blueOverlay: "#3B3A8D",
  },
};

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "600px",
  tabletM: "768px",
  tabletL: "850px",
  laptop: "1024px",
  laptopL: "1440px",
};

export const devices = {
  mobileS: `only screen and (min-width: ${sizes.mobileS})`,
  mobileM: `only screen and (min-width: ${sizes.mobileM})`,
  mobileL: `only screen and (min-width: ${sizes.mobileL})`,
  tabletS: `only screen and (min-width: ${sizes.tabletS})`,
  tabletM: `only screen and (min-width: ${sizes.tabletM})`,
  tabletL: `only screen and (min-width: ${sizes.tabletL})`,
  laptop: `only screen and (min-width: ${sizes.laptop})`,
  laptopL: `only screen and (min-width: ${sizes.laptopL})`,
};

export const GlobalStyles = createGlobalStyle` 
  body {
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family:  'Montserrat', sans-serif;
  }
`;

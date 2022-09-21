import "../assets/styles/reset.css";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../assets/styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

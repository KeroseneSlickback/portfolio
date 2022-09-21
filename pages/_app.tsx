import "../assets/styles/reset.css";
import "../assets/styles/temp.css";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../assets/styles/GlobalStyles";
import PageLoader from "../features/modals/PageLoader";
import { ContextProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PageLoader />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default MyApp;

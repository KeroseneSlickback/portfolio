import "../assets/styles/reset.css";
import "../assets/styles/temp.css";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../assets/styles/GlobalStyles";
import PageLoader from "../features/modals/PageLoader";
import { ContextProvider } from "../context/context";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-566BD9H1L8"
        strategy="afterInteractive"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-566BD9H1L8');
            `,
        }}
      />
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <PageLoader>
            <Component {...pageProps} />
          </PageLoader>
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default MyApp;

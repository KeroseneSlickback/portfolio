import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Context from "../../context/context";
import {
  SpinnerContainer,
  SpinnerText,
  SpinnerWrapper,
} from "../../components/SpinnerComponenets";

interface Props {
  children: React.ReactElement<any, any>;
}

const PageLoader = ({ children }: Props) => {
  const context = useContext(Context);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (context.initialLoad) {
      setTimeout(() => {
        setLoading(false);
        context.toggleInitialLoad();
      }, 600);
    }
  }, [context]);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 600);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return loading ? (
    <SpinnerWrapper>
      <SpinnerContainer>
        <SpinnerText>M</SpinnerText>
      </SpinnerContainer>
    </SpinnerWrapper>
  ) : (
    <>{children}</>
  );
};

export default PageLoader;

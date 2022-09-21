import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Context from "../../context/context";

const PageLoader = () => {
  const context = useContext(Context);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (context.initialLoad) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        context.toggleInitialLoad();
      }, 1600);
    }
  }, [context]);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 1600);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div className="spinner-wrapper">
        <div className="spinner" />
      </div>
    )
  );
};

export default PageLoader;

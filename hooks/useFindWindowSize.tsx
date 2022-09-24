import { useEffect, useState } from "react";

const getWindowSize = () => {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;

    return {
      width,
      height,
    };
  }
  return {
    width: 0,
    height: 0,
  };
};

export const useFindWindowSize = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};

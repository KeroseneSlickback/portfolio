import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: JSX.Element;
}

const AnimateScroll = ({ children }: Props) => {
  const ref = useRef();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisibility(entry.isIntersecting);
    });
  }, []);
  return < ref>{children}</>;
};

export default AnimateScroll;

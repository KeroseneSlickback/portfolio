import React from "react";
import { HeadingSpan, HeadingWrapper } from "../components/HeadingComponents";

{
  /* <Heading text="About Me" LSVert="" LSHorz="" LSColor="" RSVert="" RSHorz="" RSColor="" /> */
}

type Props = {
  text: string;
  LSVert?: string;
  LSHorz?: string;
  LSColor?: string;
  RSVert?: string;
  RSHorz?: string;
  RSColor?: string;
};

const Heading = ({
  text,
  LSVert,
  LSHorz,
  LSColor,
  RSVert,
  RSHorz,
  RSColor,
}: Props) => {
  return (
    <HeadingWrapper>
      <HeadingSpan
        top={LSVert === "top"}
        bottom={LSVert === "bottom"}
        left={LSHorz === "left"}
        right={LSHorz === "right"}
        blue={LSColor === "blue"}
      />
      <h2>{text}</h2>
      <HeadingSpan
        top={RSVert === "top"}
        bottom={RSVert === "bottom"}
        left={RSHorz === "left"}
        right={RSHorz === "right"}
        blue={RSColor === "blue"}
      />
    </HeadingWrapper>
  );
};

export default Heading;

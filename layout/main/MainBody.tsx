import React from "react";

interface Props {
  children: JSX.Element;
}

const MainBody = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default MainBody;

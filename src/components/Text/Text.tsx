import React from "react";
import { TextProps } from "./text.props";

const Text = ({ size = "m", children, ...props }: TextProps): JSX.Element => {
  return (
    <p className="" {...props}>
      {children}
    </p>
  );
};

export default Text;

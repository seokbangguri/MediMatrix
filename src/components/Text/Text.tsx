import React from "react";
import { TextProps } from "./text.props";

const Text = ({
  size = "m",
  styles,
  children,
  ...props
}: TextProps): JSX.Element => {
  if ((size = "m")) {
    return (
      <p className={`text-[20px] text-light-gray ${styles}`} {...props}>
        {children}
      </p>
    );
  } else if ((size = "l")) {
    return (
      <p className="" {...props}>
        {children}
      </p>
    );
  } else {
    return (
      <p className="" {...props}>
        {children}
      </p>
    );
  }
};

export default Text;

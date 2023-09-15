import React from "react";
import { HeadingProps } from "./heading.props";
const Heading = ({ tag, children }: HeadingProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 
          className={`text-[70px] inline font-bold leading-none text-center bg-gradient-text text-transparent bg-clip-text bg-contain `} >
          {children}
        </h1>
      );
    case "h2":
      return <h2 className={`text-2xl`}>{children}</h2>;
    case "h3":
      return <h3 className={`text-2xl`}>{children}</h3>;
    default:
      return <>{children}</>;
  }
};

export default Heading;

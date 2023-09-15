import { ReactNode } from "react";

export interface HeadingProps {
  className?: string;
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}

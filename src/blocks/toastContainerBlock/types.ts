import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IToastContainerProps {
  horizontalAlign?: "left" | "center" | "right";
  verticalAlign?: "top" | "bottom";
  children?: ReactNode;
}

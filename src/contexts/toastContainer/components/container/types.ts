import { IMesssage } from "@/contexts/toastContainer/types";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IToastContainerProps {
  horizontalAlign: "left" | "center" | "right";
  verticalAlign: "top" | "bottom";
  messages: IMesssage[];
}

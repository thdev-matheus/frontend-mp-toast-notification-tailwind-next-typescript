import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IMesssage {
  id: string;
  type: "success" | "error" | "warning";
  message: string;
}

export interface IToastContainerContext {
  setHAlign: Dispatch<SetStateAction<"left" | "center" | "right">>;
  setVAlign: Dispatch<SetStateAction<"top" | "bottom">>;
  toast: {
    success: (message: string) => void;
    error: (message: string) => void;
    warning: (message: string) => void;
  };
}

export interface IToastContainerProps {
  horizontalAlign?: "left" | "center" | "right";
  verticalAlign?: "top" | "bottom";
  autoClose?: number;
  children: ReactNode;
}

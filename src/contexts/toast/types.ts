import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IMesssage {
  id: string;
  type: "success" | "error" | "warning";
  message: string;
}

export interface IToastContext {
  vAlign: "top" | "bottom";
  setVAlign: Dispatch<SetStateAction<"top" | "bottom">>;
  hAlign: "left" | "center" | "right";
  setHAlign: Dispatch<SetStateAction<"left" | "center" | "right">>;
  setAutoClose: Dispatch<SetStateAction<number>>;
  toast: {
    success: (message: string) => void;
    error: (message: string) => void;
    warning: (message: string) => void;
  };
  removeToast: (id: string) => void;
  messages: IMesssage[];
}

export interface IToastProviderProps {
  children: ReactNode;
}

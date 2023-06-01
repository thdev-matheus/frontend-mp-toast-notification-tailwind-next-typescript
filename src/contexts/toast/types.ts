import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IMesssage {
  id: string;
  type: "success" | "error" | "warning";
  message: string;
}

export interface IToastContext {
  position:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  setPosition: Dispatch<
    SetStateAction<
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right"
    >
  >;
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
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  autoClose?: number;
  children: ReactNode;
}

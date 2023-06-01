"use client";

import * as T from "./types";
import { v4 as uuid } from "uuid";
import { useState, useContext, createContext } from "react";

const ToastContext = createContext<T.IToastContext>({} as T.IToastContext);

export function useToast() {
  const context = useContext(ToastContext);

  return context;
}

export default function ToastProvider({ children }: T.IToastProviderProps) {
  const [hAlign, setHAlign] = useState<"left" | "center" | "right">("center");
  const [vAlign, setVAlign] = useState<"top" | "bottom">("top");
  const [autoClose, setAutoClose] = useState(3000);
  const [messages, setMessages] = useState<T.IMesssage[]>([]);

  const removeToast = (id: string) => {
    const newMessages = messages.filter((message) => message.id !== id);

    setMessages(newMessages);
  };

  const success = (message: string) => {
    const newMessage: T.IMesssage = {
      id: uuid(),
      type: "success",
      message,
    };

    setMessages([newMessage, ...messages]);

    setTimeout(() => removeToast(newMessage.id), autoClose);
  };

  const error = (message: string) => {
    const newMessage: T.IMesssage = {
      id: uuid(),
      type: "error",
      message,
    };

    setMessages([newMessage, ...messages]);

    setTimeout(() => removeToast(newMessage.id), autoClose);
  };

  const warning = (message: string) => {
    const newMessage: T.IMesssage = {
      id: uuid(),
      type: "warning",
      message,
    };

    setMessages([newMessage, ...messages]);

    setTimeout(() => removeToast(newMessage.id), autoClose);
  };

  const toast = {
    success,
    error,
    warning,
  };

  return (
    <ToastContext.Provider
      value={{
        vAlign,
        hAlign,
        setHAlign,
        setVAlign,
        setAutoClose,
        toast,
        removeToast,
        messages,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

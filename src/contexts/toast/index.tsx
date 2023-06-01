"use client";

import * as T from "./types";
import { v4 as uuid } from "uuid";
import { useState, useContext, createContext } from "react";

const ToastContext = createContext<T.IToastContext>({} as T.IToastContext);

export function useToast() {
  const context = useContext(ToastContext);

  return context;
}

export default function ToastProvider({
  children,
  autoClose: aClose = 3000,
  position: pos = "top-center",
}: T.IToastProviderProps) {
  const [position, setPosition] = useState<
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
  >(pos);
  const [autoClose, setAutoClose] = useState(aClose);
  const [messages, setMessages] = useState<T.IMesssage[]>([
    { id: "sdfsdfsdfsdfsd", message: "toast de teste", type: "success" },
  ]);

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
        position,
        setPosition,
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

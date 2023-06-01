import * as T from "./types";
import * as B from "@/blocks";
import { v4 as uuid } from "uuid";
import { useState, useContext, createContext } from "react";

const ToastContainerContext = createContext<T.IToastContainerContext>(
  {} as T.IToastContainerContext
);

export function useToastContainer() {
  const context = useContext(ToastContainerContext);

  return context;
}

export default function ToastContainer({
  children,
  horizontalAlign = "center",
  verticalAlign = "top",
  autoClose = 3000,
}: T.IToastContainerProps) {
  const [hAlign, setHAlign] = useState(horizontalAlign);
  const [vAlign, setVAlign] = useState(verticalAlign);
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
    <ToastContainerContext.Provider value={{ setHAlign, setVAlign, toast }}>
      <B.ToastContainerBlock horizontalAlign={hAlign} verticalAlign={vAlign} />
      {children}
    </ToastContainerContext.Provider>
  );
}

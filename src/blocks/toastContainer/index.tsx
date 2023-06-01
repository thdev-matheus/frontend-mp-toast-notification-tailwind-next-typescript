"use client";
import { useToast } from "@/contexts/toast";
import * as T from "./types";
import * as C from "@/components";

export default function ToastContainer({
  horizontalAlign,
  verticalAlign,
  autoClose,
}: T.IToastContainerProps) {
  const { setAutoClose, setHAlign, setVAlign, hAlign, vAlign, messages } =
    useToast();

  horizontalAlign && setHAlign(horizontalAlign);
  verticalAlign && setVAlign(verticalAlign);
  autoClose && setAutoClose(autoClose);

  // console.log(messages);

  // const hAlign =
  //   horizontalAlign === "right"
  //     ? "right-0"
  //     : horizontalAlign === "center"
  //     ? ""
  //     : "";

  // const vAlign = verticalAlign === "bottom" ? "" : "";

  return (
    <div className={`toast-container`}>
      {messages.map((message) => (
        <C.ToastCard message={message} key={message.id} />
      ))}
    </div>
  );
}

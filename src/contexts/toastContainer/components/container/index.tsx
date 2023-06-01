"use client";
import * as T from "./types";

export default function Container({
  horizontalAlign,
  verticalAlign,
  messages,
}: T.IToastContainerProps) {
  console.log(messages);
  return <section className=""></section>;
}

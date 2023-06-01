import * as T from "./types";

export default function ToastContainerBlock({
  horizontalAlign = "center",
  verticalAlign = "top",
  children,
}: T.IToastContainerProps) {
  return <section className="">{children}</section>;
}

import * as T from "./types";

export default function ToastCard({
  message: { id, message, type },
}: T.ICardProps) {
  return (
    <div className="flex items-center justify-center h-16 border border-white rounded-lg w-72">
      <h1>{message}</h1>
    </div>
  );
}

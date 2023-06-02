"use client";

import { useToast } from "@/contexts/toast";
import * as C from "@/components";

export default function ToastContainer() {
  const { position, messages } = useToast();

  return (
    <div className={position}>
      {messages.map((message) => (
        <C.ToastCard key={message.id} message={message} />
      ))}
    </div>
  );
}

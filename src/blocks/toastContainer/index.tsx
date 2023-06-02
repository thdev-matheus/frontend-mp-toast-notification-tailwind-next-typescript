"use client";

import { useToast } from "@/contexts/toast";

export default function ToastContainer() {
  const { position, messages } = useToast();

  return (
    <div className={position}>
      <h1>ToastContainer</h1>
    </div>
  );
}

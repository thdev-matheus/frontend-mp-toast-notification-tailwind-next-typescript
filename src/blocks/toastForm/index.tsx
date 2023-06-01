"use client";

import * as C from "@/components";
import { useToast } from "@/contexts/toast";
import { useState } from "react";

export default function ToastForm() {
  const { toast } = useToast();

  return (
    <section className="relative z-0 flex flex-col items-center justify-center w-full h-full">
      <div>
        <C.Button
          onClick={() => {
            toast.success("Teste");
          }}
        >
          <small className="font-bold">Mostrar Notificação</small>
        </C.Button>
      </div>
    </section>
  );
}

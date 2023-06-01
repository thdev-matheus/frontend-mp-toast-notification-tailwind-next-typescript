"use client";

import * as C from "@/components";
import * as B from "@/blocks";
import { useToast } from "@/contexts/toast";

export default function Home() {
  const { toast } = useToast();
  return (
    <>
      <B.ToastContainer />
      <section className="flex items-center justify-center w-full min-h-full">
        <div>
          <C.Button onClick={() => toast.success("Teste")}>
            <small className="font-bold">Mostrar Notificação</small>
          </C.Button>
        </div>
      </section>
    </>
  );
}

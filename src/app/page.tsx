"use client";

import * as C from "@/components";
import * as B from "@/blocks";
import { useToast } from "@/contexts/toast";

export default function Home() {
  const { toast } = useToast();
  return (
    <section className="grid w-full h-full">
      <B.ToastContainer />
      <B.ToastForm />
    </section>
  );
}

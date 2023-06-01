import "@/styles/main.css";
import ToastProvider from "@/contexts/toast";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <ToastProvider>
        <body className={inter.className}>{children}</body>
      </ToastProvider>
    </html>
  );
}

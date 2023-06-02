"use client";

import * as T from "./types";
import { FaCheckCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { useToast } from "@/contexts/toast";

export default function ToastCard({
  message: { id, message, type },
}: T.ICardProps) {
  const { removeToast } = useToast();

  return (
    <div className="flex items-center justify-between h-16 gap-1 px-4 py-2 bg-gray-900 w-72 rounded-2xl">
      {type === "success" ? (
        <FaCheckCircle className="text-2xl text-green-400" />
      ) : type === "warning" ? (
        <IoWarning className="text-2xl text-yellow-400" />
      ) : (
        <AiFillCloseCircle className="text-2xl text-red-500" />
      )}

      <p className="w-[70%] text-xs font-semibold leading-[1.2] text-center text-white overflow-hidden">
        {message}
      </p>

      <div
        className="w-[20%] h-[60%] rounded-lg flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition-all duration-700 cursor-pointer"
        onClick={() => removeToast(id)}
      >
        <span className="text-xs text-white">fechar</span>
      </div>
    </div>
  );
}

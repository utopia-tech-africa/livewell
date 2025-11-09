"use client";

import { useState } from "react";
import { Minus, PlusCircle } from "lucide-react";

export const AccordionItem = ({ question = "", answer = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        className="w-full flex items-center justify-between py-4 text-left text-white hover:text-white/80 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <Minus size={20} /> : <PlusCircle size={20} />}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "opacity-100 max-h-96 py-4" : "opacity-0 max-h-0 py-0"
        }`}
      >
        <div className="text-sm text-white/70">{answer}</div>
      </div>
    </div>
  );
};

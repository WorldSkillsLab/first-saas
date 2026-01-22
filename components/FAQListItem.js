"use client";
import { useState } from "react";

const FAQListItem = ({ qa }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      {/* 1. Question (clickable) */}
      <button
        className="py-5 font-semibold w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {qa.question}
      </button>

      {/* 2. Answer */}
      <div className={isOpen ? "block" : "hidden"}>
        {qa.answer}
      </div>
    </li>
  );
};

export default FAQListItem;
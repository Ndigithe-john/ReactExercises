import { useState } from "react";
import "../index.css";
import AccordionItem from "./AccordionItem";
export default function Accordion({ data }) {
  const [currentOpen, setCurrentlyOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          currOpen={currentOpen}
          onOpen={setCurrentlyOpen}
          key={index}
          title={faq.title}
          number={index}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

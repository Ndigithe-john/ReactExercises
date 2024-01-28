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
      <AccordionItem
        currOpen={currentOpen}
        onOpen={setCurrentlyOpen}
        key={5}
        title="Thinking in React"
        number={5}
      >
        <h5>Allows React Developers to</h5>
        <ul>
          <li>Break up UI into components</li>
          <li>Make Components Reusable</li>
          <li>Place State efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

import "../index.css";
import AccordionItem from "./AccordionItem";
export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          title={faq.title}
          text={faq.text}
          number={index}
        />
      ))}
    </div>
  );
}

export default function AccordionItem({
  number,
  title,
  currOpen,
  onOpen,
  children,
}) {
  const isOpen = number === currOpen;
  function handleToggle() {
    // setIsOpen((current) => !current);
    onOpen(number);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

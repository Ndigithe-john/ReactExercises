import { useState } from "react";

function TextExpander({
  children,
  collapsedNumWords = 10,
  collapseButtonText = "show less",
  buttonColor = "#2021A6",
  expandButtonText = "show more",
  expanded = false,
  className = "",
}) {
  const buttonStyle = {
    color: `${buttonColor}`,
  };
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded ? children : "text";
  return (
    <div className={className}>
      <span>
        {displayText}
        <button
          style={buttonStyle}
          onClick={() => setIsExpanded((prevState) => !prevState)}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </span>
    </div>
  );
}
export default TextExpander;

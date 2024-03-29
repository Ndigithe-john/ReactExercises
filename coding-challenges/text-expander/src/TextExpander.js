import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {
  collapseButtonText: PropTypes.string,
  collapsedNumWords: PropTypes.number,
  buttonColor: PropTypes.string,
  expandButtonText: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
};
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
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: `${buttonColor}`,
  };
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
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

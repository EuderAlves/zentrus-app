import React from "react";
import "./styles.css";

export const Text = ({ tag, children, className = "" }) => {
  const tagClass = tag ? `text-${tag}` : "";
  return React.createElement(
    tag,
    { className: `text ${tagClass} ${className}`.trim() },
    children
  );
};

import React from "react";
import "./styles.css";

export const Box = ({ className, children = "", ...props }) => {
  return (
    <div className={`box ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

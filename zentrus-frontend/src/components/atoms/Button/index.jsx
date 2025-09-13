import React from "react";
import "./styles.css";
const variantClasses = {
  save: "button-save",
  edit: "buton-edit",
  delete: "button-delete",
  cancel: "button-cancel",
  back: "button-back",
  next: "button-next",
  submit: "button-submit",
};
export const Button = ({ children, onClick, disabled, variant = "save" }) => {
  const className = `button ${variantClasses[variant] || variantClasses.save}`;
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

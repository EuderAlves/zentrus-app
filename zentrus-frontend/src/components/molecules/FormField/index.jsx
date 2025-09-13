import React from "react";
import "./styles.css";
import { Input } from "../../atoms/Input";

export const FormField = ({ label, ...inputProps }) => {
  return (
    <div>
      {label && <label className="form-field-label">{label}</label>}
      <Input {...inputProps} />
    </div>
  );
};

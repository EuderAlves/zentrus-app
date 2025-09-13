import React from "react";
import { IMaskInput } from "react-imask";
import "./styles.css";

// Configuração das máscaras para cada tipo de input
const inputMasks = {
  monetary: {
    mask: "R$ num",
    blocks: {
      num: {
        mask: Number,
        thousandsSeparator: ".",
        mapToRadix: [","],
        padFractionalZeros: true,
        scale: 2,
      },
    },
    normalize: false,
    radix: ",",
    type: "text",
  },
  phone: {
    mask: "(00) 00000-0000",
    type: "tel",
  },
  cpf: {
    mask: "000.000.000-00",
    type: "text",
  },
  email: {
    mask: "",
    type: "email",
  },
  link: {
    mask: "",
    type: "url",
  },
  text: {
    mask: "",
    type: "text",
  },
};
export const Input = ({ variant = "text", ...props }) => {
  if (variant === "textarea") {
    return <textarea className="input" {...props} />;
  }
  const maskProps = inputMasks[variant] || inputMasks.text;
  return <IMaskInput {...maskProps} {...props} className="input" />;
};

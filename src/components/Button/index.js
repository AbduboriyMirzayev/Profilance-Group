import React from "react";
import "styles/Button.scss";
import { emptyFunction } from "utils";

function Button({ text, isGreen, isRed, onClick = emptyFunction }) {
  return (
    <button
      className={`button ${
        isGreen ? "button--green" : isRed ? "button--red" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

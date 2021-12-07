import React from "react";
import "./Button.css";

function Button({ title, style }) {
  return (
    <button style={style} className="Button fs-14px white pointer">
      {title}
    </button>
  );
}

export default Button;

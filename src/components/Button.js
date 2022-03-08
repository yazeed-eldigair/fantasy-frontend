import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLORS = ["primary", "blue", "red", "green"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize: SIZES[0];
  const checkButtonColor = STYLES.includes(buttonColor) ? buttonStyle: COLORS[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

import React from 'react';
import "./button.scss";

const Button = (props) => {
  const classes = ["button"];
  props.secondary && classes.push("button--secondary");

  const clickAction = props.onClick
    ? props.onClick
    : () => {};

  return (
    <button className={classes.join(" ")} onClick={clickAction}>
      { props.text }
    </button>
  );
}

export default Button;

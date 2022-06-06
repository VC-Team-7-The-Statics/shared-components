import React from "react";
import "../styles/_input.scss";

const Input = (props) => {
  const { ...others } = props;

  return (
    <div className="input-container">
      <input type="input" className="input" {...others} />
    </div>
  );
};

export default Input;

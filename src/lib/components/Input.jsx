import React from "react";
import "../styles/_input.scss";
import "../styles/_reset.scss";
import "../styles/_common.scss";

const Input = (props) => {
  const { ...others } = props;

  return (
    <div className="input-container">
      <input type="input" className="input" {...others} />
    </div>
  );
};

export default Input;

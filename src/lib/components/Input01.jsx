import React from "react";
import "../styles/_input.scss";
import "../styles/_common.scss";

const Input01 = (props) => {
  const { ...others } = props;

  return (
    <div className="input01-container">
      <input type="input" className="input" {...others} />
    </div>
  );
};

export default Input01;

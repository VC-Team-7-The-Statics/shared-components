import React from "react";
import "../styles/_input.scss";
import "../styles/_reset.scss";
import "../styles/_common.scss";

const Input02 = (props) => {
  const { ...others } = props;

  return (
    <div className="input02-container">
      <input type="input" className="input" {...others} />
    </div>
  );
};

export default Input02;

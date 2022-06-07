import React from "react";
import "../styles/_checkboxes.scss";
import "../styles/_reset.scss";
import "../styles/_common.scss";
import Checkbox from "./Checkbox";

const Checkboxes = (props) => {
  const { values, ...others } = props;

  return (
    <div className="checkboxes">
      {values.map((value, index) => (
        <Checkbox key={index} value={value} {...others}></Checkbox>
      ))}
    </div>
  );
};

export default Checkboxes;

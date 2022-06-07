import React from "react";
import "../styles/_checkboxes.scss";
import "../styles/_reset.scss";
import "../styles/_common.scss";
import Checkbox from "./Checkbox";

const Checkboxes = ({ values }) => {
  return (
    <div className="checkboxes">
      {values.map((value, index) => (
        <Checkbox key={index} value={value}></Checkbox>
      ))}
    </div>
  );
};

export default Checkboxes;

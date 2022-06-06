import React from "react";
import "../styles/_checkbox.scss";

const Checkbox = (props) => {
  const { value, ...others } = props;

  return (
    <div className="checkbox-container">
      <label>
        <input type="checkbox" className="checkbox" value={value} {...others} />
        <span className="value">{value}</span>
      </label>
    </div>
  );
};

export default Checkbox;

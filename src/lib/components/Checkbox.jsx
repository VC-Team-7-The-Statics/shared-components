import React from "react";
import "../styles/_checkbox.scss";
import "../styles/_reset.scss";
import "../styles/_common.scss";

const Checkbox = (props) => {
  const { value, ...others } = props;

  return (
    <div className="checkbox-container">
      <label>
        <input type="checkbox" className="checkbox" value={value} {...others} />
        <div className="value" {...others}>
          {value}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;

import React from "react";
import "../styles/_reset.scss";
import "../styles/_common.scss";

const Option = ({ value, ...others }) => {
  return (
    <option className="option" value={value} {...others}>
      {value}
    </option>
  );
};

export default Option;

import React from "react";
import "../styles/_reset.scss";
import "../styles/_common.scss";

const Option = ({ value, ...otherss }) => {
  return (
    <option className="option" value={value} {...otherss}>
      {value}
    </option>
  );
};

export default Option;

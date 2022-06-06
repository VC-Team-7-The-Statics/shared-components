import React from "react";

const Option = ({ value, ...otherss }) => {
  return (
    <option className="option" value={value} {...otherss}>
      {value}
    </option>
  );
};

export default Option;

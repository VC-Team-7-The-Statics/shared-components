import React, { useState } from "react";
import "../styles/_select.scss";

const Select = (props) => {
  const { defaultValue, ...others } = props;
  const [selected, setSelected] = useState(defaultValue);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="select-container">
      <select
        className="select"
        onChange={handleSelect}
        value={selected}
        {...others}
      />
    </div>
  );
};

export default Select;

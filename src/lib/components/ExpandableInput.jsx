import React, { useState } from "react";
import "../styles/_input.scss";
import "../styles/_common.scss";
import Input01 from "./Input01";
import Button01 from "./Button01";

const ExpandableInput = (props) => {
  const [inputs, setInputs] = useState([{}]);
  const { ...others } = props;
  const addInput = () => {
    console.log("add");
  };

  return (
    <div className="expandable-input-container">
      <Input01 />
      <Button01 onClick={addInput}>추가하기</Button01>
    </div>
  );
};

export default ExpandableInput;

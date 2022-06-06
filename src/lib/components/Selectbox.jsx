import React from "react";
import Select from "./Select";
import Option from "./Option";

const Selectbox = () => {
  return (
    <div>
      <Select value="선택해주세요.">
        <Option value="선택해주세요." disabled></Option>
      </Select>
    </div>
  );
};

export default Selectbox;

import React from "react";
import Select from "./Select";
import Option from "./Option";
import "../styles/_reset.scss";
import "../styles/_common.scss";

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

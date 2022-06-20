import React from "react";
import Select from "./Select";
import Option from "./Option";

const SelectStory = {
  title: "Select",
  component: Select,
  Option,
};

export default SelectStory;

const TEXT = "선택해주세요";

export const Default = () => (
  <>
    <Select defaultValue={TEXT}>
      <Option value={TEXT} disabled></Option>
      <Option value="hello1"></Option>
      <Option value="hello2"></Option>
      <Option value="hello3"></Option>
    </Select>
  </>
);

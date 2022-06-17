import React from "react";
import Input01 from "./Input01";
import Input02 from "./Input02";

const InputStory = {
  title: "Inputs",
  component: Input01,
  Input02,
};

export default InputStory;

const TEXT = "입력해주세요";

export const Default = () => (
  <>
    <Input01 placeholder={TEXT} />
    <Input02 placeholder={TEXT} />
  </>
);

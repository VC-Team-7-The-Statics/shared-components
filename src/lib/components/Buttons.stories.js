import React from "react";
import Button01 from "./Button01";
import Button02 from "./Button02";

const ButtonStory = {
  title: "Buttons",
  component: Button01,
  Button02,
};

export default ButtonStory;

const TEXT = "등록하기";

export const Default = () => (
  <>
    <Button01 type="button">{TEXT}</Button01>
    <Button02 type="button">{TEXT}</Button02>
  </>
);

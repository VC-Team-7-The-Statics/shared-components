import React from "react";
import Textarea from "./Textarea";

const TextareaStory = {
  title: "Textarea",
  component: Textarea,
};

export default TextareaStory;

export const Default = () => (
  <>
    <Textarea placeholder="내용을 입력해주세요." />
  </>
);

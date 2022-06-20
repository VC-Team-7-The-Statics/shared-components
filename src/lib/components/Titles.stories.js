import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";

const TitleStory = {
  title: "Titles",
  component: Title,
  Subtitle,
};

export default TitleStory;

export const Default = () => (
  <>
    <Title value="This is title!" />
    <Subtitle value="This is subtitle!" />
  </>
);

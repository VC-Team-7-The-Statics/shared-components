import React from "react";
import Chatlist from "./Chatlist";

const ChatlistStory = {
  title: "Chatlist",
  component: Chatlist,
};

export default ChatlistStory;

export const Default = () => (
  <>
    <Chatlist
      image="https://randomuser.me/api/portraits/men/31.jpg"
      name="김진호"
    />
  </>
);

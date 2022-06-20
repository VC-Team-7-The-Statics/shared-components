import React from "react";
import ChatList from "./ChatList";

const ChatListStory = {
  title: "ChatList",
  component: ChatList,
};

export default ChatListStory;

export const Default = () => (
  <>
    <ChatList
      image="https://randomuser.me/api/portraits/men/31.jpg"
      name="김진호"
    />
  </>
);

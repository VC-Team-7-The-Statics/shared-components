import React from "react";
import "../styles/_chatBalloon.scss";
import "../styles/_common.scss";

const ChatBalloon = (props) => {
  const { text, ...others } = props;

  return (
    <div className="chat-balloon-container">
      <p className="text" {...others}>
        {text}
      </p>
    </div>
  );
};

export default ChatBalloon;

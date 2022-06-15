import React from "react";
import "../styles/_chatBalloon.scss";
import "../styles/_common.scss";

const ChatBalloon = (props) => {
  const { text, date, className, ...others } = props;

  return (
    <div className={`chat-balloon-container ${className}`} {...others}>
      <div className="text">{text}</div>
      <span className="date">{date}</span>
    </div>
  );
};

export default ChatBalloon;

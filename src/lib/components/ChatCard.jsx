import React from "react";
import "../styles/_chatCard.scss";
import "../styles/_common.scss";

const ChatCard = (props) => {
  const { profileImage, name, chatText, time } = props;

  return (
    <div className="chat-card-container">
      <div className="image-container">
        <img src={profileImage} alt="profile" />
      </div>
      <div className="content">
        <h2 className="name">{name}</h2>
        <div className="chat">
          <p className="text">{chatText}</p>
        </div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
};

export default ChatCard;

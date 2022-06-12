import React from "react";
import "../styles/_requestCard.scss";
import "../styles/_common.scss";
import Button02 from "./Button02";

const RequestCard = (props) => {
  const { requester, title, content } = props;

  return (
    <div className="request-card">
      <div className="requester">
        <span className="name">{requester}</span>
        <span>님의 요청</span>
      </div>
      <details className="request">
        <summary className="title">{title}</summary>
        <p className="content">{content}</p>
      </details>
    </div>
  );
};

export default RequestCard;

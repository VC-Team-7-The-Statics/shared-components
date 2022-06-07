import React from "react";
import "../styles/_requestCard.scss";
import "../styles/_reset.scss";
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
        <Button02 type="button">대화 시작하기</Button02>
      </details>
    </div>
  );
};

export default RequestCard;

import React from "react";
import "../styles/_requestCard.scss";
import Button from "./Button";

const RequestCard = (props) => {
  const { requester, title, content, ...others } = props;

  return (
    <div className="request-card">
      <div className="requester">
        <span className="name">{requester}</span>
        <span>님의 요청</span>
      </div>
      <details className="request">
        <summary className="title">{title}</summary>
        <p className="content">{content}</p>
        <Button type="button">대화 시작하기</Button>
      </details>
    </div>
  );
};

export default RequestCard;

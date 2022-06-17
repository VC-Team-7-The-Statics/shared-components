import React from "react";
import RequestCard from "./RequestCard";

const RequestCardStory = {
  title: "RequestCard",
  component: RequestCard,
};

export default RequestCardStory;

export const Default = () => (
  <>
    <RequestCard
      name="김진호"
      title="socket io로 채팅 기능 구현하는 게 어려워 커피챗 요청 드립니다."
      content="저 채팅 기능 같이 만들어주시겠어요?"
    />
  </>
);

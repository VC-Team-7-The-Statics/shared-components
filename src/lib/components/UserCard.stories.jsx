import React from "react";
import UserCard from "./UserCard";

const UserCardStory = {
  title: "UserCard",
  component: UserCard,
};

export default UserCardStory;

export const Default = () => (
  <>
    <UserCard
      name="김진호"
      image="https://randomuser.me/api/portraits/men/31.jpg"
    />
  </>
);

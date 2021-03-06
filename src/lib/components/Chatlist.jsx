import React from "react";
import styles from "../styles/ChatList.module.scss";

function ChatList({ image, name, onClickHandler }) {
  return (
    <div className={styles["chat-card-container"]}>
      <div className={styles["image-container"]}>
        <img src={image} alt="profile" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.paragraph}>λννκΈ°</p>
      </div>
    </div>
  );
}

export default ChatList;

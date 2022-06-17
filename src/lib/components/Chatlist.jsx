import React from "react";
import styles from "../styles/Chatlist.module.scss";

function Chatlist({ image, name, onClickHandler }) {
  return (
    <li className={styles["chat-list"]} onClick={onClickHandler}>
      <div className={styles["chat-card-container"]}>
        <div className={styles["image-container"]}>
          <img src={image} alt="profile" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.paragraph}>대화하기</p>
        </div>
      </div>
    </li>
  );
}

export default Chatlist;

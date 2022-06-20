import React from "react";
import styles from "../styles/RequestCard.module.scss";
import Button02 from "./Button02";

function RequestCard({ title, content, name, onClick }) {
  return (
    <div className={styles["request-card"]}>
      <details className={styles.request}>
        <summary className={styles.title}>{title}</summary>
        <p className={styles.content}>
          {content}
          <div className={styles.requester}>
            <span className={styles.name}> from.{name}</span>
          </div>
        </p>
      </details>
      <Button02 onClick={onClick}>대화 수락하기</Button02>
    </div>
  );
}

export default RequestCard;

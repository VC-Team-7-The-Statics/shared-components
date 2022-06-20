import styles from "../styles/UserCard.module.scss";

function UserCard({ name, image, ...otherProps }) {
  return (
    <div className={styles["image-wrapper"]} {...otherProps}>
      <h2 className={styles.name}>{name}</h2>
      <img src={image} alt="profile" />
    </div>
  );
}

export default UserCard;

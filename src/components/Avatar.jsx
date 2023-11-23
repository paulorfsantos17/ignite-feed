import styles from "./Avatar.module.css";

export default function Avatar({src, hasBorder=true}) {
  return (
    <img
      className={hasBorder ? styles.avatarHasBorder : styles.avatar}
      src={src}
    />
  );
}

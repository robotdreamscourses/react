import styles from "./social-media-button.module.css";

function SocialMediaButton(props) {
  return (
    <a href={props.url} className={`${styles.link} ${styles[props.className]}`} >
      <img className={styles.icon} src={props.ico} alt={props.alt} />
    </a>
  );
}

export default SocialMediaButton;

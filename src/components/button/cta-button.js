import styles from './cta-button.module.css';

function CTAButton(props) {
  const clickHandler = () => {
    props.onClickAction();
  }
  return (
    <button className={styles.btn} onClick={clickHandler}>{props.text}</button>
  );
}

export default CTAButton;

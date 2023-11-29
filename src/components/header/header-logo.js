import logo from '../../logo.svg';
import styles from './header-logo.module.css';

function HeaderLogo() {
  return (
    <div className={styles.headerLogo}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default HeaderLogo;

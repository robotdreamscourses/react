import HeaderLogo from './header-logo';
import styles from './header.module.css';

function HeaderTitle() {
    return (
        <div className={styles.wrapper}>
            <HeaderLogo/>
            <h1 className={styles.title}>React Dersleri</h1>
        </div>
    )
}

export default HeaderTitle;

import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

function Navigation() {
  const isActiveMenu = (data) => {
    return data.isActive ? styles.active : '';
  }
  return (
    <nav>
      <NavLink className={isActiveMenu} to="/"> Home </NavLink>
      <NavLink className={isActiveMenu} to="/courses"> Courses </NavLink>
      <NavLink className={isActiveMenu} to="/articles"> Articles </NavLink>
    </nav>
  );
}
export default Navigation;

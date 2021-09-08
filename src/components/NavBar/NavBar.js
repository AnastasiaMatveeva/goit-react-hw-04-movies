import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => (
  <header className={styles.header}>
    <nav>
      <NavLink
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
        exact>
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}>
        Movies
      </NavLink>
    </nav>
  </header>
);

export default NavBar;

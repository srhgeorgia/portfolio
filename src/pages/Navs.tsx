import { NavLink } from "react-router-dom";
import styles from "../modules/navs.module.css";

function Navs() {
  return (
    <div className={styles.containerNavs}>
      <div className={styles.title}>
        <img src="/src/assets/icon.jpg" alt="icone" className={styles.icon}/>
        <h2>Sarah | Full Stack Developer</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.links}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/works"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            Works
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navs;

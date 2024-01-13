import { NavLink } from "react-router-dom";
import styles from "../modules/navs.module.css";
import { motion } from "framer-motion";

function Navs() {
  return (
    <div className={styles.containerNavs}>
      <div className={styles.content}>
      <div className={styles.title}>
        <img src="/src/assets/icon.jpg" alt="icone" className={styles.icon} />
        <h2>Sarah | Full Stack Developer</h2>
      </div>

        <div className={styles.links}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              Home
            </NavLink>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <NavLink
              to="/works"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              Works
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              Contact
            </NavLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Navs;

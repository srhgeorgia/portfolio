import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/navs.module.css";
import { motion } from "framer-motion";
import { images } from "../utils/imageMapping";

interface NavsProps {
  onClick: () => void;
}

const Navs: React.FC<NavsProps> = ({ onClick }) => {
  const handleLinkClick = () => {
    onClick();
  };

  return (
    <div className={styles.containerNavs}>
      <div className={styles.content}>
        <div className={styles.title}>
          <img
            src={images.icon}
            alt="icone"
            className={styles.icon}
          />
          <h2>Sarah | Data Engineer & Software Developer</h2>
        </div>

        <div className={styles.links}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={handleLinkClick} 
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}  
            >
              Contact
            </NavLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navs;

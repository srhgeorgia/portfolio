// About.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/courses.module.css";

const Courses: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (aboutRef.current) {
      const scrollPosition = window.scrollY;
      const componentPosition = aboutRef.current.offsetTop;

      if (scrollPosition > componentPosition - window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    controls.start({ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 });
  }, [isVisible, controls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about" ref={aboutRef} className={styles.container}>
      <div className={styles.content}>
        <motion.div className={styles.contentString} animate={controls}>
          <h3 className={styles.aboutMe}>ADDITIONAL INFORMATION</h3>
          <h1 className={styles.title}>Estudies</h1>
          <p className={styles.subTitle}>
            I am currently focused on honing my skills as a Back End developer
            through a course at Senac, scheduled for completion from October
            2023 to March 2024. Previously, I embarked on my tech journey with a
            Front End Development course at Kenzie Academy Brasil, completed
            from January to July 2022. While my enrollment in the Analysis and
            Systems Development program at Estácio, initiated in February 2023,
            is temporarily on hold, I remain committed to my professional
            growth.
          </p>
          <p className={styles.subSubTitle}>
            Additionally, I highlight my proficiency in English, boasting
            advanced skills in conversation, reading, and writing. This
            linguistic strength positions me advantageously in our globalized
            world. I also possess basic knowledge of Spanish, fostering broader
            and more inclusive communication.
          </p>
          <p className={styles.subSubTitle}>
            These combined experiences underscore my unwavering commitment to
            learning and development, always seeking to enhance my technical and
            linguistic skills to make a meaningful contribution in the
            professional landscape.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;

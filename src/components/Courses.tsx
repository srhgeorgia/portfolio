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
            I entered the world of technology many years ago when I enrolled in
            a Computer Network Formation course at college. However, due to lack
            of resources, I was unable to continue and complete my studies at
            that time. During the pandemic, I found a new opportunity when I
            joined the Front End Development course at Kenzie Academy Brasil,
            where I discovered the fascinating world of software and fell in
            love with it.
          </p>
          <p className={styles.subSubTitle}>
            Currently, I am immersed in data studies after graduating in Back
            End Development at Senac. This experience allowed me to delve into
            the realms of Java, Python, and SQL, expanding my horizons beyond
            the tools I already mastered, such as JavaScript, React, and
            TypeScript. Although my enrollment in the Analysis and Systems
            Development course at Estácio is temporarily on hold, I remain
            committed to my professional growth.
          </p>
          <p className={styles.subSubTitle}>
            Additionally, I highlight my proficiency in English, with advanced
            skills in conversation, reading, and writing, which positions me
            advantageously in our globalized world. I also study Spanish and
            French, aiming to further enhance my proficiency in these languages.
          </p>
          <p className={styles.subSubTitle}>
            These combined experiences, along with my previous professional
            background in sales, where I worked for many years, underscore my
            unwavering commitment to continuous learning and development. I
            always strive to improve my technical and linguistic skills to make
            a significant contribution in the professional landscape,
            maintaining excellent communication with my team and the people
            around me.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;

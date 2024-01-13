// About.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../modules/project.module.css";

const Project: React.FC = () => {
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
          <h3 className={styles.aboutMe}>ABOUT THIS PROJECT</h3>
          <h1 className={styles.title}>Summary</h1>
          <p className={styles.subTitle}>
            In developing this portfolio, I will employ React with TypeScript as
            the foundation. Utilizing CSS modules, Tailwind CSS, Framer Motion,
            Lottie React, React Router DOM, and GIT for code versioning, I will
            ensure a seamless development process. The deployment will be
            carried out on Vercel, emphasizing clean code practices and
            optimizing folder organization for a streamlined and efficient
            project structure.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;

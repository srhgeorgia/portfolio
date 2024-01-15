// About.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/about.module.css";

interface TechIconProps {
  src: string;
  alt: string;
}

const TechIcon: React.FC<TechIconProps> = ({ src, alt }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <img src={src} alt={alt} className={styles.tech} />
    </motion.div>
  );
};

const About: React.FC = () => {
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
          <h3 className={styles.aboutMe}>ABOUT ME</h3>
          <h1 className={styles.title}>Overview</h1>
          <p className={styles.subTitle}>
            I am currently immersed in the React framework, leveraging a tech
            stack that includes Typescript, JavaScript, HTML, CSS, Styled
            Components, Material UI, Tailwind, CSS Modules, Sass, Node, API
            integration, AWS, Docker, and code management on GitHub and
            Bitbucket.
            <p className={styles.subSubTitle}>
              My workflow embraces Agile methodologies like Scrum and Kanban,
              with code versioning handled through GIT. In addition to my
              proficiency in React, I actively explore other frameworks such as
              Angular and Vue. My commitment to being a versatile developer
              extends to a Full Stack proficiency, where I bring knowledge of
              Java, Spring Boot, SQL, and an ongoing study of Python. My
              expertise also spans UI and UX design.
            </p>
          </p>
        </motion.div>

        <motion.div className={styles.contentTech} animate={controls}>
          <div className={styles.techs}>
            <div className={styles.frontEnd}>
              <TechIcon src="/src/assets/html.png" alt="" />
              <TechIcon src="/src/assets/css.png" alt="" />
              <TechIcon src="/src/assets/javascript.png" alt="" />
              <TechIcon src="/src/assets/typescript.png" alt="" />
              <TechIcon src="/src/assets/react.png" alt="" />
              <TechIcon src="/src/assets/angular.png" alt="" />
              <TechIcon src="/src/assets/vue.png" alt="" />
              <TechIcon src="/src/assets/api.png" alt="" />
              <TechIcon src="/src/assets/git.png" alt="" />
            </div>

            <div className={styles.backEnd}>
              <TechIcon src="/src/assets/python.png" alt="" />
              <TechIcon src="/src/assets/java.png" alt="" />
              <TechIcon src="/src/assets/sql.png" alt="" />
              <TechIcon src="/src/assets/node.png" alt="" />
              <TechIcon src="/src/assets/docker.png" alt="" />
              <TechIcon src="/src/assets/aws.png" alt="" />

              <TechIcon src="/src/assets/bootstrap.png" alt="" />
              <TechIcon src="/src/assets/taiwilnd.png" alt="" />
              <TechIcon src="/src/assets/materialui.png" alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

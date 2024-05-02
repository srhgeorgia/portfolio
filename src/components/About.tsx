// About.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/about.module.css";
import { ImageKeys, images } from "../utils/imageMapping";
interface TechIconProps {
  name: ImageKeys;
  alt: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, alt }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <img src={images[name]} alt={alt} className={styles.tech} />
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
            I have a solid experience as a front-end developer, working with
            technologies such as React, Angular, TypeScript, JavaScript, Styled
            Components, HTML, CSS, Vue, Redux, among others. My responsibilities
            include creating dynamic and responsive user interfaces,
            implementing robust business logic, and integrating systems through
            APIs. Additionally, I have experience working with tools like
            Postman for API testing and using Java and SQL, which I acquired
            during my studies at Senac, where I specialized in Back End
            proficiency.
            <p className={styles.subSubTitle}>
              Recently, I transitioned to the field of data engineering, where I
              utilize tools in projects involving SQL, Python, ETL (Extract,
              Transform, Load), AWS (Amazon Web Services), Docker, Airflow, and
              Snowflake. This includes handling and analyzing large datasets,
              building efficient data pipelines like TAPs with Meltano and DAGs,
              and implementing cloud storage and analysis solutions. I'm also
              familiar with Agile methodologies such as Scrum and Kanban, and I
              have experience in code versioning using GIT. Additionally, I
              primarily use WSL Ubuntu as my main prompt.
            </p>
          </p>
        </motion.div>

        <motion.div className={styles.contentTech} animate={controls}>
          <div className={styles.techs}>
            <div className={styles.frontEnd}>
              <TechIcon name="html" alt="html" />
              <TechIcon name="css" alt="css" />
              <TechIcon name="javascript" alt="javascript" />
              <TechIcon name="typescript" alt="typescript" />
              <TechIcon name="react" alt="react" />
              <TechIcon name="angular" alt="angular" />
              <TechIcon name="vue" alt="vue" />
              <TechIcon name="api" alt="api" />
              <TechIcon name="git" alt="git" />
            </div>

            <div className={styles.backEnd}>
              <TechIcon name="python" alt="python" />
              <TechIcon name="java" alt="java" />
              <TechIcon name="sql" alt="sql" />
              <TechIcon name="node" alt="node" />
              <TechIcon name="docker" alt="docker" />
              <TechIcon name="aws" alt="aws" />

              <TechIcon name="bootstrap" alt="bootstrap" />
              <TechIcon name="taiwilnd" alt="taiwilnd" />
              <TechIcon name="materialui" alt="materialui" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

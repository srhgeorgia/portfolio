import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/jobs.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Jobs: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

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
    <div ref={aboutRef} className={styles.container}>
      <motion.div animate={controls}>
        <h3 className={styles.aboutMe}>ABOUT MY JOBS ON TECH</h3>
        <h1 className={styles.title}>Works Experience</h1>
        <p className={styles.subTitle}>
          My initial foray into the technology sector began as a monitor at
          Kenzie Academy, where I also pursued my education in front-end
          development. Following the completion of my studies, I joined Indicium
          as a front-end developer, contributing for 1 year and 8 months. Driven
          by a passion for technology and a desire to explore new horizons, I
          transitioned into the realm of data.
        </p>

        <p className={styles.subSubTitle}>
          Currently, I am broadening my skill set by studying back-end
          development at Senac. This endeavor is enhancing my holistic
          understanding of software development, solidifying my technical
          foundation, and preparing me for fresh challenges in the expansive
          field of technology.
        </p>
      </motion.div>

      <VerticalTimeline>
        <div className={styles.contentJobs}>
          <VerticalTimelineElement
            contentStyle={{
              background: "#050816",
              border: "1px solid #ccc",
            }}
            iconStyle={{ background: "#fff" }}
            date="2022-2024"
            icon={
              <img
                src="https://assets-global.website-files.com/6491a8aad31f132488172555/64998fedf721c1b76821baf2_glob-logo-indicium.svg"
                className={styles.imgIndicium}
              />
            }
          >
            <div className={styles.first}>
              <div className={styles.textJobs}>
                <div className={styles.contentText}>
                  <h3 className={styles.expTitle}>Front-End Developer</h3>
                  <p className={styles.company}>Indicium</p>
                </div>
              </div>
              <ul className={styles.descriptions}>
                <li className={styles.description}>
                  Mobile version creation of the website using media queries and
                  Bootstrap.
                </li>
                <li className={styles.description}>
                  Creation of components and pages using entities from
                  backstage.io and Docker, with React and TypeScript.
                </li>
                <li className={styles.description}>
                  Styling implementation with Styled Components and Material UI.
                </li>
                <li className={styles.description}>
                  Use of API Fetch, code versioning, and agile methodologies.
                </li>
                <li className={styles.description}>Use of Node.js and AWS.</li>
                <li className={styles.description}>
                  Blog styling through Ghost as a CMS.
                </li>
                <li className={styles.description}>
                  Repository cloning from GitHub and Bitbucket.
                </li>
                <li className={styles.description}>
                  Daily, Scrum, Kanban, and Sprints.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              background: "#050816",
              border: "1px solid #ccc",
            }}
            iconStyle={{ background: "#fff" }}
            date="2022-2022"
            icon={
              <img
                src="/src/assets/works/kenzie.png"
                className={styles.imgKenzie}
              />
            }
          >
            <div className={styles.second}>
              <div className={styles.textJobs}>
                <div className={styles.contentText}>
                  <h3 className={styles.expTitle}>Peer Coaching and Monitoring</h3>
                  <p className={styles.company}>Kenzie Academy</p>
                </div>
              </div>
              <ul className={styles.descriptions}>
                <li className={styles.description}>
                  Mentorship for students from the previous module.
                </li>
                <li className={styles.description}>
                  Assistance with their activities through calls and grading.
                </li>
                <li className={styles.description}>Tutoring with exercises.</li>
                <li className={styles.description}>
                  Implementation of WhiteBoard along with their respective
                  corrections.
                </li>
                <li className={styles.description}>
                  Daily sessions with developers and one-on-one support.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
        </div>
      </VerticalTimeline>
    </div>
  );
};

export default Jobs;

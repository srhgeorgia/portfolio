import styles from "../styles/home.module.css";
import Lottie from "lottie-react";
import notebook from "../utils/notebook.json";
import About from "../components/About";
import Project from "../components/Project";

function Home() {
  return (
    <div>
      <div className={styles.containerHome}>
        <div className={styles.content}>
          <div className={styles.contentString}>
            <h1 className={styles.title}>
              Hi, I'm <span>Sarah!</span>
            </h1>
            <h3 className={styles.subTitle}>Welcome to my portfólio!</h3>
            <h4 className={styles.subSubTitle}>
              I am a front-end developer and Data Engineer passionate about technology.
              With almost 2 years of experience in software development, in addition to vast knowledge in back-end studies, 
              I seek to become full stack and focus on data-driven solutions. Open
              to challenging opportunities and innovative collaborations!
            </h4>
          </div>

          <div className={styles.gif}>
            <Lottie animationData={notebook} loop={true} />
          </div>
        </div>
      </div>

      <About />
      <Project />
    </div>
  );
}

export default Home;

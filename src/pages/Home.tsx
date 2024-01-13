import styles from "../modules/home.module.css";
import Lottie from "lottie-react";
import notebook from "../assets/notebook.json";
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
            <h3 className={styles.subTitle}>
              Welcome to my portfolio!
              <h4 className={styles.subSubTitle}>
                I am a front-end developer with nearly two years of experience,
                and I'm enthusiastic about diving into back-end development.
              </h4>
            </h3>
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

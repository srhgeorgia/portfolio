import styles from "../modules/home.module.css";
import Lottie from "lottie-react";
import notebook from "../assets/notebook.json";

function Home() {
  return (
    <div className={styles.containerHome}>

      <div className={styles.contentString}>
        <h1 className={styles.title}>Hi, I'm <span>Sarah!</span></h1>
        <h3 className={styles.subTitle}>
          Im a front end developer almost two years, and a entusiasc to back end
        </h3>
      </div>

      <div className={styles.gif}>
        <Lottie animationData={notebook} loop={true} />
      </div>
    </div>
  );
}

export default Home;

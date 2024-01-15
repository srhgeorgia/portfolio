import { useState, useEffect, useRef } from "react";
import styles from "../styles/works.module.css";
import Jobs from "../components/Jobs";
import Courses from "../components/Courses";
import { motion } from "framer-motion";
import { images } from "../utils/imageMapping";

const projects = [
  {
    id: 1,
    title: "Jornada do Herói",
    description:
      "Desenvolvimento de um jogo simples em React para determinar o campeão mais forte, utilizando uma API externa de super-heróis.",
    image: images.jornada,
    repoUrl: "https://github.com/srhgeorgia/jornadaDoHeroi",
    deployedUrl: "https://jornada-do-heroi-7c48.vercel.app/",
  },
  {
    id: 2,
    title: "Projeto BuzzFeed",
    description:
      "Recriação do site BuzzFeed utilizando Angular, implementado com uma API fictícia para simulação de dados.",
    image: images.buzz,
    repoUrl: "https://github.com/srhgeorgia/angular-buzzfeed",
    deployedUrl: "https://app.netlify.com/sites/angularswiftie/overview",
  },
  {
    id: 3,
    title: "Boostrap",
    description: "Desenvolvimento de um projeto utilizando Bootstrap.",
    image: images.bootstrapProject,
    repoUrl: "https://github.com/srhgeorgia/projeto-bootstrap",
    deployedUrl: "https://caravan-eight.vercel.app/",
  },
  {
    id: 4,
    title: "Projeto final React Origamid",
    description: "Projeto final do curso de React da Origamid.",
    image: images.reactProject,
    repoUrl: "https://github.com/srhgeorgia/projetoFinalReactOrigamid",
    deployedUrl: "https://projetofinalreactorigamid.netlify.app/",
  },
];

function Works() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const intervalIdRef = useRef<NodeJS.Timeout>();

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (!modalOpen) {
      intervalIdRef.current = setInterval(() => {
        handleNext();
      }, 2000);
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [currentImageIndex, modalOpen]);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const imgVariante = {
    initial: { x: "-100%" },
    animate: { x: 0 },
  };

  const transition = { duration: 0.9, type: "spring" };

  return (
    <div>
      <div className={styles.containerWorks}>
        <div className={styles.content}>
          <div className={styles.contentString}>
            <h3 className={styles.subTitle}>SOME WORKS</h3>
            <h1 className={styles.title}>My Projects</h1>
            <h4 className={styles.subTitle}>
              I showcase a selection of my personal projects, meticulously
              crafted to delve into various frameworks and styling techniques.
              Each project comes with its Git versioning history, takes center
              stage through deployments on Vercel or Netlify, and has its own
              dedicated GitHub page for a seamless and transparent overview of
              my development journey.
            </h4>
          </div>

          <motion.div
            transition={transition}
            variants={imgVariante}
            initial="initial"
            animate="animate"
            className={styles.contentCarousel}
          >
            <motion.div
              onClick={handlePrevious}
              transition={transition}
              variants={imgVariante}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className={styles.buttonLeft}
            >
              <img src={images.left} alt="" />
            </motion.div>

            <div className={styles.carousel}>
              <img
                src={
                  projects[
                    currentImageIndex === 0
                      ? projects.length - 1
                      : currentImageIndex - 1
                  ].image
                }
                alt="Previous"
                className={styles.carouselImage}
              />
              <motion.div
                transition={transition}
                variants={imgVariante}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              >
                <img
                  src={projects[currentImageIndex].image}
                  alt={projects[currentImageIndex].title}
                  onClick={handleImageClick}
                  className={styles.carouselMainImage}
                />
              </motion.div>
              <img
                src={projects[(currentImageIndex + 1) % projects.length].image}
                alt="Next"
                className={styles.carouselImage}
              />
            </div>

            <motion.div
              onClick={handleNext}
              transition={transition}
              variants={imgVariante}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className={styles.buttonRight}
            >
              <img src={images.right} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.title}>
              {projects[currentImageIndex].title}
            </h2>
            <img
              src={projects[currentImageIndex].image}
              className={styles.modalImage}
              alt=""
            />
            <p className={styles.subTitleModal}>
              {projects[currentImageIndex].description}
            </p>

            <div className={styles.linksModal}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <a
                  href={projects[currentImageIndex].repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repository
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <a
                  href={projects[currentImageIndex].deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploy
                </a>
              </motion.div>
            </div>

            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
      <div className={styles.divVazia}></div>
      <Jobs />
      <Courses />
    </div>
  );
}

export default Works;

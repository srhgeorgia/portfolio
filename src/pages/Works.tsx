import { useState } from "react";
import styles from "../styles/works.module.css";
import Jobs from "../components/Jobs";
import Courses from "../components/Courses";

const projects = [
  {
    id: 1,
    title: "Jornada do Herói",
    description:
      "Um jogo simples feito em react para ver qual campeão mais forte, API ex",
    image: "/src/assets/works/jornadaheroi.jpeg",
    repoUrl: "https://github.com/srhgeorgia/jornadaDoHeroi",
    deployedUrl: "https://jornadadoheroi.netlify.app/",
  },
  {
    id: 2,
    title: "Projeto BuzzFeed",
    description: "'Clone' do site BuzzFeed feito em Angular, com fake API.",
    image: "/src/assets/works/buzzfeed.jpeg",
    repoUrl: "https://github.com/srhgeorgia/angular-buzzfeed",
    deployedUrl: "https://angular-buzzfeed.netlify.app/",
  },
  {
    id: 3,
    title: "Boostrap",
    description: "Projeto feito em Bootstrap.",
    image: "/src/assets/works/bootstrap.jpeg",
    repoUrl: "https://github.com/srhgeorgia/projeto-bootstrap",
    deployedUrl: "https://projeto-bootstrap.netlify.app/",
  },
  {
    id: 4,
    title: "Projeto final React Origamid",
    description: "Descrição do Projeto 2",
    image: "/src/assets/works/react.jpeg",
    repoUrl: "https://github.com/srhgeorgia/projetoFinalReactOrigamid",
    deployedUrl: "https://projeto-final-react-origamid.netlify.app/",
  },
];

function Works() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className={styles.containerWorks}>
        <div className={styles.content}>
          <div className={styles.contentString}>
            <h3 className={styles.subTitle}>ola</h3>
            <h1 className={styles.title}>My Projects</h1>
            <h4 className={styles.subTitle}>
              I am a front-end developer with nearly two years of experience,
              and I'm enthusiastic about diving into back-end development.
            </h4>
          </div>

          <div className={styles.carousel}>
              <button onClick={handlePrevious}>Anterior</button>
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
              <img
                src={projects[currentImageIndex].image}
                alt={projects[currentImageIndex].title}
                onClick={handleImageClick}
                className={styles.carouselMainImage}
              />
              <img
                src={projects[(currentImageIndex + 1) % projects.length].image}
                alt="Next"
                className={styles.carouselImage}
              />
              <button onClick={handleNext}>Próxima</button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{projects[currentImageIndex].title}</h2>
            <p>{projects[currentImageIndex].description}</p>
            <a
              href={projects[currentImageIndex].repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
            <a
              href={projects[currentImageIndex].deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy
            </a>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}

      <Jobs />
      <Courses />
    </div>
  );
}

export default Works;

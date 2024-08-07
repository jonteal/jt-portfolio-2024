import { FaGithub, FaRegEye } from "react-icons/fa";

import "./projectCard.css";

export const ProjectCard = ({ project }) => (
  <div className="border project-container flex flex-col items-center h-full max-h-1/4">
    <div className="project-header-container bg-gray-200">
      <h3 className="text-lg font-bold p-2 text-black">{project.name}</h3>
    </div>
    <div className="image-container bg-gray-200">
      <img
        className="project-image"
        alt={project.imageDesc}
        src={project.image}
      />
      <p className="project-description">{project.description}</p>
    </div>
    <div className="project-info-container">
      <div className="project-info-description-container">
        <p className="project-info-description">
          <span className="project-info-header">Description: </span>
          {project.description}
        </p>
        <hr />
      </div>
      <div className="project-info-tech-container">
        <p className="project-info-tech">
          <span className="project-info-header">Technologies:</span>{" "}
          {project.technologies}
        </p>
      </div>
    </div>
    <div className="project-card-link-container bg-gray-200">
      <a
        className="mx-12 project-card-link transform transition duration-500 hover:text-gray-100 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center mt-0 text-gray-800 bg-gray-100 p-2 border rounded-xl w-60"
        rel="noreferrer noopener"
        target="_blank"
        href={project.github}
      >
        <FaGithub />
      </a>
      {project.liveLink ? (
        <a
          rel="noreferrer noopener"
          target="_blank"
          className="mx-12 project-card-link transform transition duration-500 hover:text-gray-100 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center mt-0 text-gray-800 bg-gray-100 p-2 border rounded-xl w-60"
          href={project.liveLink}
        >
          <FaRegEye />
        </a>
      ) : (
        <p className="mx-12 flex justify-center items-center mt-0 bg-gray-100 p-2 border rounded-xl w-96">
          No live link
        </p>
      )}
    </div>
  </div>
);

import { FaExternalLinkAlt } from "react-icons/fa";

export type ResumeProjectProps = {
  projectName: string;
  role: string;
  timeline: string;
  description: string;
  technologies: string;
  githubLink: string;
};

export const ResumeProject = ({
  projectName,
  role,
  timeline,
  description,
  technologies,
  githubLink,
}: ResumeProjectProps) => (
  <div className="my-6">
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
        <h3 className="text-gray-100 font-bold font-serif">{projectName}</h3>
        <span className="text-gray-100 mx-3">|</span>
        <p className="text-gray-100">{role}</p>
      </div>
      <p className="text-gray-100">{timeline}</p>
    </div>
    <p className="text-gray-100 italic mb-2 text-left">{description}</p>
    <p className="text-gray-100 text-left">
      <span className="text-gray-100">Technologies:</span> {technologies}
    </p>
    <a
      className="text-gray-100 mr-3 flex flex-row items-center"
      href={githubLink}
    >
      <span className="mr-3">Github</span>
      <FaExternalLinkAlt className="text-gray-100" />
    </a>
  </div>
);

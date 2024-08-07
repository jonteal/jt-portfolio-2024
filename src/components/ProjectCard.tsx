import { FaGithub, FaRegEye } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";

export type ProjectCardProps = {
  project: {
    id: number;
    name: string;
    description: string;
    github: string;
    liveLink?: string;
    image: string;
    imageDesc: string;
    technologies: string;
  };
};

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <Card className="w-1/3 mx-5">
    <CardHeader className="my-0 font-semibold italic font-serif text-2xl bg-gray-200">
      {project.name}
    </CardHeader>
    <CardContent className="flex items-center justify-center p-6">
      <img
        className="h-40 w-auto my-0"
        alt={project.imageDesc}
        src={project.image}
      />
    </CardContent>
    <CardDescription className="flex flex-wrap">
      <p>{project.description}</p>
      <hr className="w-48 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <p>{project.technologies}</p>
    </CardDescription>
    <CardFooter>
      <a
        className="mx-12 transform transition duration-500 hover:text-gray-100 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center mt-0 text-gray-800 bg-gray-100 p-2 border rounded-xl w-60"
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
          className="mx-12 transform transition duration-500 hover:text-gray-100 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center mt-0 text-gray-800 bg-gray-100 p-2 border rounded-xl w-60"
          href={project.liveLink}
        >
          <FaRegEye />
        </a>
      ) : (
        <p className="mx-12 flex justify-center items-center mt-0 bg-gray-100 p-2 border rounded-xl w-96">
          No live link
        </p>
      )}
    </CardFooter>
  </Card>
);

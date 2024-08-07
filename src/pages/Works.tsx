import { ProjectCard } from "../components/ProjectCard";
import crownClothingImage from "../assets/images/crown-clothing.png";
import greenThumbGif from "../assets/images/add-crop.gif";
import flowSwiftGif from "../assets/images/add-kanban.gif";

const projects = [
  {
    id: 1,
    name: "GreenThumb",
    description:
      "A tool for managing production schedules, crop directories, customer orders, and team member for microgreen business owners.",
    github: "https://github.com/jonteal/capstone-e-commerce",
    // liveLink: "",
    image: greenThumbGif,
    imageDesc: "Internal administrative tool for microgreens business owners",
    technologies:
      "React, React Query, JSON Server, Typescript, ShadCn, React Router, TailwindCSS",
  },
  {
    id: 2,
    name: "FlowSwift",
    description:
      "A tool for managing organizations, clients, client projects, financials including invoices and transactions, kanbans, activity feeds and more!",
    github: "https://github.com/jonteal/FlowSwift",
    // liveLink: "",
    image: flowSwiftGif,
    imageDesc: "All in one organization and client management software",
    technologies: "React, Express, MongoDb, Node, Graphql, Typescript, Redux",
  },
  {
    id: 3,
    name: "Capstone Clothing",
    description:
      "A sleek and minimal e-commerce platform with cart functionality, navigation, authentication, and stripe payment processing integration.",
    github: "https://github.com/jonteal/capstone-e-commerce",
    liveLink: "https://capstone-clothing.netlify.app/",
    image: crownClothingImage,
    imageDesc: "E-Commerce store for clothing",
    technologies:
      "React | Redux | Redux-Saga | Firebase | SASS | Typescript | Styled Components | Stripe",
  },
];

export const Works = () => (
  <div className="border m-0 flex flex-col items-center bg-gray-800 p-1 rounded-xl">
    <h1 className="text-gray-100 font-light text-6xl mb-4 mt-2">Works</h1>
    <ul className="flex sm:flex-row flex-col w-full items-center justify-center">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </ul>
  </div>
);

import { FaExternalLinkAlt } from "react-icons/fa";
import { ResumeProject } from "./ResumeProject";

const resumeProjects = [
  {
    id: 1,
    projectName: "GreenThumb",
    role: "Sole Project Developer",
    timeline: "2024 - Present",
    description:
      "Software to manage a microgreens business built using React and Typescript",
    technologies:
      "React, JSONServer, Typescript, ShadCn, React Router, Tailwind",
    githubLink: "https://github.com/jonteal/GreenThumb",
  },
  {
    id: 2,
    projectName: "FlowSwift",
    role: "Sole Project Developer",
    timeline: "2023 - Present",
    description:
      "A tool for managing organizations, clients, client projects, financials including invoices and transactions, kanbans, activity feeds and more!",
    technologies: "React, Express, MongoDb, Node, Graphql, Typescript, Redux",
    githubLink: "https://github.com/jonteal/FlowSwift",
  },
  {
    id: 3,
    projectName: "Crown Clothing",
    role: "Sole Project Developer",
    timeline: "August 2022 - Present",
    description:
      "A simple front end website for a small business within the Airbnb industry.",
    technologies:
      "React, Redux, Redux-Saga, Firebase, SASS, Typescript, Styled Components, Stripe",
    githubLink: "https://github.com/jonteal/FlowSwift",
  },
];

export const ResumeComponent = () => (
  <div className="m-3 border w-screen rounded-xl flex flex-col items-center bg-gray-800 pt-7 px-72">
    <h1 className="text-gray-100 text-4xl font-bold mb-3">Jon Jackson</h1>

    <div className="flex flex-row mb-3">
      <p className="text-gray-100">Lowell, AR 72745</p>
      <span className="text-gray-100 ml-4 mr-4 vertical-bar">|</span>

      <p className="text-gray-100">479-601-3157</p>
      <span className="text-gray-100 ml-4 mr-4 vertical-bar">|</span>

      <p className="text-gray-100">jonjackson.webdesign@gmail.com</p>
    </div>

    <div className="flex flex-row mb-5">
      <a className="text-gray-100" href="www.linkedin.com/in/jonathanjackson25">
        LinkedIn
      </a>
      <span className="text-gray-100 ml-4 mr-4">|</span>
      <a className="text-gray-100" href="https://github.com/jonteal">
        Github
      </a>
      <span className="text-gray-100 ml-4 mr-4">|</span>

      <a className="text-gray-100" href="https://jonjacksondev.netlify.app/">
        Portfolio
      </a>
    </div>

    {/* EDUCATION */}
    <div className="w-full">
      <h2 className="text-gray-100 text-2xl font-bold my-5">Education</h2>

      <div className="mb-5 w-full">
        <div className="flex flex-row justify-between">
          <p className="text-gray-100">
            Full Stack Web Development Certification
          </p>
          <p className="text-gray-100">2021 - 2022</p>
        </div>
        <p className="text-gray-100 font-bold text-left">
          University of Denver, Denver, CO
        </p>
      </div>

      <div className="mb-5 w-full">
        <div className="flex flex-row justify-between">
          <p className="text-gray-100 font-bold mr-3">
            University of Arkansas, Fayetteville, AR
          </p>
          <p className="text-gray-100">2015 - 2019</p>
        </div>
        <p className="text-gray-100 font-bold text-left">
          Bachelor of Science, Marketing
        </p>
      </div>
    </div>

    {/* TECHNICAL SKILLS */}
    <div className="mb-3">
      <div className="flex flex-col items-center">
        <h2 className="text-gray-100 text-2xl font-bold my-5">
          Technical Skills
        </h2>
        <p className="text-gray-100">* limited experience</p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-gray-100 mt-3 font-bold text-xl">Languages</h3>
        <p className="text-gray-100">
          Javascript, Typescript, HTML, CSS, SQL*, Python*
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-gray-100 mt-3 font-bold text-xl">Frameworks</h3>
        <p className="text-gray-100">
          ReactJS, Wordpress, ExpressJS, NextJS, Bootstrap, Handlebars*
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-gray-100 mt-3 font-bold text-xl">Javascript</h3>
        <p className="text-gray-100">
          Lodash, Webpack*, NPM, Axios, jQuery*, Sequelize, Prettier, ESLint,
          MomentJS
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-gray-100 mt-3 font-bold text-xl">CSS</h3>
        <p className="text-gray-100">
          SASS, TailwindCSS, Material UI, Styled Components
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-gray-100 mt-3 font-bold text-xl">
          Request/Formats
        </h3>
        <p className="text-gray-100">AJAX, JSON, REST, GraphQL</p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-gray-100 mt-3 font-bold text-xl">Databases</h3>
        <p className="text-gray-100">MySQL*, PostgreSQL*, MongoDB, Sqlite*</p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-gray-100 mt-3 font-bold text-xl">Cloud Services</h3>
        <p className="text-gray-100">AWS*, Google Cloud - Firebase*</p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-gray-100 mt-3 font-bold text-xl">Platforms</h3>
        <p className="text-gray-100">Web, Microsoft Office</p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-gray-100 mt-3 font-bold text-xl">Dev Ops</h3>
        <p className="text-gray-100">Docker* , BitBucket*, Github, CircleCI*</p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-gray-100 mt-3 font-bold text-xl">
          Third Party Services
        </h3>
        <p className="text-gray-100">Stripe*</p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-gray-100 mt-3 font-bold text-xl">Other</h3>
        <p className="text-gray-100">
          Figma*, Miro, NodeJS, Redux, Contentful (CMS), Micro-frontends*
        </p>
      </div>
    </div>

    {/* EXPERIENCE SECTION */}
    <div className="mb-3">
      <h2 className="text-gray-100 text-2xl font-bold my-5">Experience</h2>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <p className="text-gray-100 font-serif">Software Engineer II</p>
          <span className="mx-2 text-gray-100">|</span>
          <h3 className="text-gray-100 font-bold">CVS Health</h3>
        </div>
        <p className="text-gray-100">June 2022 - Present</p>
      </div>
      <p className="text-gray-100 italic mb-2 text-left">
        Frontend web developer for Aetna Health using React, Typescript,
        Contentful, Redux, Sagas, GraphQL, and AWS.
      </p>
      <ul className="list-disc list-outside text-left">
        <li className="text-gray-100">
          Develop features used by millions of healthcare members every day
        </li>
        <li className="text-gray-100">
          Maintain and increase code unit testing coverage, regression and
          end-to-end UI testing via Playwright
        </li>
        <li className="text-gray-100">
          Integrate features with CMS-driven content with GraphQL for full
          multi-language translatability
        </li>
        <li className="text-gray-100">
          Demonstrate sprint progress and new feature development to team
          leadership and stakeholders
        </li>
        <li className="text-gray-100">
          Implement tooling and programmatic prevention of accessibility (a11y)
          defects
        </li>
        <li className="text-gray-100">
          Review and quality test all pull requests on my team prior to code
          merge
        </li>
      </ul>
      <div className="flex flex-row justify-between mt-8">
        <div className="flex flex-row">
          <p className="text-gray-100 font-serif">Tutor & Grader</p>
          <span className="mx-2 text-gray-100 ">|</span>
          <h3 className="text-gray-100 font-bold">2U / edX</h3>
        </div>
        <p className="text-gray-100">Mar 2022 - May 2022</p>
      </div>
      <p className="text-gray-100 italic mb-2 text-left">
        Tutor and grader supporting students going through a 6-month full stack
        engineering program.
      </p>
      <ul className="list-disc list-outside text-left">
        <li className="text-gray-100">
          Tutoring 8 students for 1 hour per week each to support their learning
          and comprehension of concepts ranging from basic HTML, CSS,
          Javascript, developing and consuming APIs, SQL and NoSQL database
          creation and management, React, Git/Github, and more.
        </li>
        <li className="text-gray-100">
          Grading the weekly assignments of students and offering written
          feedback, guidance, and support.
        </li>
      </ul>
    </div>

    {/* RECENT PROJECTS */}
    <div className="mb-3">
      <h2 className="text-gray-100 text-2xl font-bold mb-5 mt-10">
        Recent Projects
      </h2>
      {resumeProjects.map((project) => (
        <ResumeProject
          key={project.id}
          projectName={project.projectName}
          role={project.role}
          timeline={project.timeline}
          description={project.description}
          technologies={project.technologies}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  </div>
);

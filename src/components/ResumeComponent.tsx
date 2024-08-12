import { ResumeProject } from "./ResumeProject";
import { ResumeSkill } from "./ResumeSkill";

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

const resumeSkills = [
  {
    id: 1,
    skillName: "Languages",
    skills: "Javascript, Typescript, HTML, CSS, SQL*, Python*",
  },
  {
    id: 2,
    skillName: "Frameworks",
    skills:
      "ReactJS, Wordpress, ExpressJS, NextJS, Shadcn, Bootstrap, Handlebars*",
  },
  {
    id: 3,
    skillName: "Javascript",
    skills:
      "NodeJS, Lodash, Webpack*, NPM, Axios, jQuery*, Sequelize, Prettier, ESLint, MomentJS",
  },
  {
    id: 4,
    skillName: "CSS",
    skills: "SASS, TailwindCSS, Material UI, Styled Components",
  },
  {
    id: 5,
    skillName: "Request Formats",
    skills: "AJAX, JSON, REST, GraphQL",
  },
  {
    id: 6,
    skillName: "Databases",
    skills: "MySQL*, PostgreSQL*, MongoDB, Sqlite*",
  },
  {
    id: 7,
    skillName: "State Management",
    skills: "Redux, ContextAPI",
  },
  {
    id: 8,
    skillName: "Cloud Services",
    skills: "AWS*, Google Cloud - Firebase*",
  },
  {
    id: 9,
    skillName: "Platforms",
    skills:
      "Web, Microsoft Office, Adobe Journey Optimizer*, Adobe Experience Platform*",
  },
  {
    id: 10,
    skillName: "DevOps",
    skills: "Github, CircleCI, Docker* , BitBucket*",
  },
  {
    id: 11,
    skillName: "Third Party Services",
    skills: "Stripe*",
  },
  {
    id: 12,
    skillName: "Other",
    skills: "Figma*, Miro, Contentful (CMS), Micro-frontends*",
  },
];

export const ResumeComponent = () => (
  <div className="m-3 border w-screen rounded-xl flex flex-col items-center bg-gray-800 pt-7 sm:px-72 px-3">
    <h1 className="text-gray-100 text-4xl font-bold mb-3">Jon Jackson</h1>

    <div className="flex sm:flex-row flex-col mb-3">
      <p className="text-gray-100">Lowell, AR 72745</p>
      <span className="text-gray-100 ml-4 mr-4">|</span>

      <p className="text-gray-100">479-601-3157</p>
      <span className="text-gray-100 ml-4 mr-4">|</span>

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

      <a className="text-gray-100" href="https://jonjackson.netlify.app/">
        Portfolio
      </a>
    </div>

    {/* EDUCATION */}
    <div className="w-full">
      <h2 className="text-gray-100 text-2xl font-bold my-5">Education</h2>

      <div className="mb-5 w-full">
        <div className="flex flex-row justify-between">
          <p className="text-gray-100 sm:text-md text-sm">
            Full Stack Web Development Certification
          </p>
          <p className="text-gray-100 sm:text-md text-sm">2021 - 2022</p>
        </div>
        <p className="text-gray-100 font-bold text-left sm:text-md text-sm">
          University of Denver, Denver, CO
        </p>
      </div>

      <div className="mb-5 w-full">
        <div className="flex flex-row justify-between">
          <p className="text-gray-100 font-bold sm:text-md text-sm">
            University of Arkansas, Fayetteville, AR
          </p>
          <p className="text-gray-100 sm:text-md text-sm">2015 - 2019</p>
        </div>
        <p className="text-gray-100 font-bold text-left sm:text-md text-sm">
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
      {resumeSkills.map((skill) => (
        <ResumeSkill
          key={skill.id}
          skillName={skill.skillName}
          skills={skill.skills}
        />
      ))}
    </div>

    {/* EXPERIENCE SECTION */}
    <div className="mb-3">
      <h2 className="text-gray-100 text-2xl font-bold my-5">Experience</h2>
      <div className="flex sm:flex-row flex-col mb-3 sm:mb-0 justify-between">
        <div className="flex flex-row justify-center">
          <p className="text-gray-100 font-serif text-lg">
            Software Engineer II
          </p>
          <span className="mx-2 text-gray-100">|</span>
          <h3 className="text-gray-100 font-bold text-lg">CVS Health</h3>
        </div>
        <p className="text-gray-100">June 2022 - Present</p>
      </div>
      <p className="text-gray-100 italic mb-2 text-left">
        Frontend web developer for Aetna Health using React, Typescript,
        Contentful, Redux, Sagas, GraphQL, and AWS.
      </p>
      <ul className="list-disc list-outside text-left mx-2">
        <li className="text-gray-100">
          Develop and maintain features used by millions of healthcare members
          every day
        </li>
        <li className="text-gray-100">
          Consistently contributes average of 35% of the total work delivered by
          team of 6 members
        </li>
        <li className="text-gray-100">
          Unit tests with RTL and UI tests with Playwright to keep code coverage
          over 90% across all features
        </li>
        <li className="text-gray-100">
          Regularly presents sprint progress and new feature development to
          large groups of product stakeholders
        </li>
        <li className="text-gray-100">
          Reviews and tests pull requests as well as provide DevOps support for
          CICD release maintenance
        </li>
        <li className="text-gray-100">
          Mentors newer additions to the team and handles knowledge transfers
          when needed
        </li>
        <li className="text-gray-100">
          Provides pull request reviews to all team members as well as across
          teams
        </li>
        <li className="text-gray-100">Follows scrum and agile practices</li>
      </ul>
      <div className="flex sm:flex-row flex-col justify-between mt-8 mb-3 sm:mb-0">
        <div className="flex flex-row justify-center">
          <p className="text-gray-100 font-serif text-lg">Tutor & Grader</p>
          <span className="mx-2 text-gray-100 ">|</span>
          <h3 className="text-gray-100 font-bold text-lg">2U / edX</h3>
        </div>
        <p className="text-gray-100">Mar 2022 - May 2022</p>
      </div>
      <p className="text-gray-100 italic mb-2 text-left">
        Tutor and grader supporting students going through a 6-month full stack
        engineering program.
      </p>
      <ul className="list-disc list-outside text-left mx-2">
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

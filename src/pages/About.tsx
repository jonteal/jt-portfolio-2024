import { Link } from "react-router-dom";

export const About = () => (
  <div className="flex flex-col items-center">
    <div className="border m-3 rounded-xl flex flex-col items-center bg-gray-800">
      <h1 className="italic rounded-xl text-center bg-gray-800 text-gray-100 text-5xl px-4 pt-10">
        Hey, I'm Jon!
      </h1>
      <h2 className="italic rounded-xl text-center bg-gray-800 text-gray-100 text-3xl px-4 pt-4 pb-6">
        I'm a professional full stack engineer, specializing in front-end web
        development using React, Typescript, GraphQL, React Query, and more!
      </h2>
      <Link
        className="text-black no-underline hover:text-white hover:border-none"
        to="/contact"
      >
        <button className="border-none transform transition duration-500 hover:text-gray-100 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center mt-0 mb-5 py-3 text-gray-800 bg-gray-100 p-5 border rounded-xl w-60">
          Join my journey
        </button>
      </Link>
      <div className="flex flex-row items-end mb-10 mt-8 self-end mr-10">
        <div className="mr-3 flex flex-col items-end">
          <p>
            <span className="italic text-gray-200">
              Step into my digital universe
            </span>
          </p>
          <p className="text-gray-100">Jon Jackson</p>
        </div>
        <img
          className="w-20 rounded-xl self-end"
          src="/images/me.jpeg"
          alt=""
        />
      </div>
    </div>
  </div>
);

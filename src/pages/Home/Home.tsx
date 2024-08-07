import PlantsImg from "../../assets/images/plants.jpeg";

import "./home.css";

export const Home = () => (
  <div className="h-64 bg-white p-2">
    <div className="text-center mt-10 w-1/2 mx-auto sm:flex sm:flex-col sm:items-center">
      <p className="text-1xl mx-auto bg-green-900 text-white text-lg rounded p-1 mb-2 italic w-10/12 sm:text-1xl sm:mx-auto sm:bg-green-900 sm:text-white sm:text-lg sm:rounded sm:p-1 sm:mb-1 sm:italic sm:w-full">
        CURRENTLY CONSIDERING OPPORTUNITIES
      </p>
      <h1 className="text-8xl font-light text-black mt-3">Jon Jackson</h1>
      <h2 className="text-black font-light text-7xl mb-5">Web Designer</h2>
    </div>
    <img className="w-screen plant-image" src={PlantsImg} alt="Plants" />
  </div>
);
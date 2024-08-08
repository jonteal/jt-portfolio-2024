import PlantsImg from "../assets/images/plants.jpeg";

export const Home = () => (
  <div className="h-64 bg-white p-2 flex flex-col items-center">
    <div className="text-center mt-10 w-1/2 mx-auto sm:flex sm:flex-col sm:items-center">
      <p className="text-1xl mx-auto bg-green-900 text-white text-lg rounded p-1 mb-2 italic w-10/12 sm:text-1xl sm:mx-auto sm:bg-green-900 sm:text-white sm:text-lg sm:rounded sm:p-1 sm:mb-1 sm:italic sm:w-full">
        CURRENTLY CONSIDERING OPPORTUNITIES
      </p>
      <div className="flex flex-col items-center">
        <h1 className="text-8xl font-light text-black mt-3">Jon Jackson</h1>
        <h2 className="text-black font-light text-7xl mb-5">Web Designer</h2>
      </div>
    </div>
    <img className="w-screen" src={PlantsImg} alt="Plants" />
  </div>
);

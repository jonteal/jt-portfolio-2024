import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import MeImage from "../assets/images/me.jpeg";

const links = [
  {
    id: 1,
    to: "/",
    label: "HOME",
  },
  {
    id: 2,
    to: "about",
    label: "ABOUT",
  },
  {
    id: 3,
    to: "works",
    label: "WORKS",
  },
  {
    id: 4,
    to: "contact",
    label: "CONTACT",
  },
  {
    id: 5,
    to: "resume",
    label: "RESUME",
  },
];

export const Navigation = () => (
  <>
    <div className="mb-3 mx-auto h-20 w-full flex justify-between sm:mb-6">
      <Link
        className="h-full hidden sm:visible w-52 sm:flex justify-between mb-7 p-6"
        to="/"
      >
        <img className="rounded-xl self-end w-12" src={MeImage} alt="" />
      </Link>
      <div className="w-full sm:w-1/2 h-full flex flex-row justify-center items-center sm:justify-end">
        {links.map((link) => (
          <Link
            className="px-3 py-4 cursor-pointer no-underline hover:underline text-gray-800"
            to={link.to}
            key={link.id}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>

    <Outlet />
  </>
);

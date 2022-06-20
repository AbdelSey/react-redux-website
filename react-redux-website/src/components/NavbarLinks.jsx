import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { openNav } from "../features/navbar/navBarSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <section>
      <div className="text-5xl mt-8 mr-8 flex ml-10 md:hidden justify-end cursor-pointer hover:text-black">
        <button
          onClick={() => {
            dispatch(openNav());
          }}
        >
          <AiOutlineMenu />
        </button>
      </div>

      <div>
        <header className="flex justify-evenly text-white text-lg font-bold md:text-black">
          <nav className="">
            <ul className="md:flex space-x-10 mt-11 mb-20 hidden text-xl">
              <li className="hover:text-white">
                <Link to="/"> Home </Link>{" "}
              </li>
              <li className="hover:text-white">
                <Link to="/"> Reviews </Link>{" "}
              </li>
              <li className="hover:text-white">
                <Link to="/"> Services </Link>{" "}
              </li>
              <li className="hover:text-white">
                <Link to="/"> Contact Us </Link>{" "}
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="flex items-center flex-col mt-[70%]  md:mt-[20%]">
        <div className="text-[310px] md:text-[450px] md:text-green-400 cursor-pointer hover:text-green-300">
          <FaReact />
        </div>
      </div>
    </section>
  );
};

export default Navbar;

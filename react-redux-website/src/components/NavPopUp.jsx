import React from "react";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { closeNav } from "../features/navbar/navBarSlice";

const NavPopUp = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[800px] opacity-80 bg-sky-300 h-[500px] bg-opacity-50 fixed md:hidden font-bold text-yellow-200">
      <div className="">
        <header>
          <nav className=" ">
            <ul className="text-5xl flex flex-col space-y-10 items-center mt-20 ">
              <li className="hover:text-white">
                <Link to="/"> Home </Link>{" "}
              </li>
              <li className="hover:text-black">
                <Link to="/"> Reviews </Link>{" "}
              </li>
              <li className="hover:text-white">
                <Link to="/"> Services </Link>{" "}
              </li>
              <li className="hover:text-white">
                <Link to="/"> Contact Us </Link>{" "}
              </li>

              <button
                className="text-5xl hover:text-white"
                onClick={() => {
                  dispatch(closeNav());
                }}
              >
                <TiDeleteOutline />
              </button>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavPopUp;

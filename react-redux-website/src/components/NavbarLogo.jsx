import React from "react";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const NavbarLogo = () => {
  return (
    <>
      <div className="text-white ml-10 mt-10 text-6xl md:text-7xl cursor-pointer hover:via-yellow-300">
        {" "}
        <IoLogoNodejs />{" "}
      </div>
      <section className="flex items-center justify-center h-[90%]">
        <article className="flex flex-col justify-center items-center w-[340px]  md:w-[700px] md:ml-4">
          <div className="m-3">
            <h1 className="mb-2 md:text-xl">Welcome</h1>
            <h1 className="text-5xl font-bold mb-5 md:text-7xl">
              React & Redux{" "}
            </h1>
            <p className="text-md md:text-lg ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              accusamus officiis explicabo voluptates magnam at corporis
              voluptatum odit eos adipisci, numquam repellendus ipsa cumque
              rerum. Veritatis temporibus id pariatur iusto.
            </p>
          </div>

          <div className="flex items-center justify-center mt-12 flex-col space-y-10">
            <button className="bg-black p-2 text-yellow-200 font-bold rounded-full w-[250px] border border-yellow-300 hover:bg-yellow-100 ">
              More About Us
            </button>

            <div className="flex space-x-5 text-2xl ">
              <h1 className="hover:text-4xl cursor-pointer">
                <FaTwitter />{" "}
              </h1>
              <h1 className="hover:text-4xl cursor-pointer">
                <FaFacebook />{" "}
              </h1>
              <h1 className="hover:text-4xl cursor-pointer">
                {" "}
                <FaYoutube />{" "}
              </h1>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default NavbarLogo;

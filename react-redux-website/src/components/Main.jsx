import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavBarLogo from "./NavbarLogo";

const Main = () => {
  return (
    <main className="flex text-white">
      <section className="bg-black w-[400px] h-screen md:w-[80%]">
        <NavBarLogo />

        <article className=""></article>
      </section>
      <section></section>
      <section className="bg-sky-300 w-[400px] h-screen md:w-[80%]">
        <NavbarLinks />
      </section>
    </main>
  );
};

export default Main;

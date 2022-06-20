import React from "react";
import Main from "../components/Main";
import NavPopUp from "../components/NavPopUp";
import { useSelector } from "react-redux";

const Home = () => {
  const { isOpen } = useSelector((store) => store.navBar);
  return (
    <div>
      {isOpen && <NavPopUp />}
      <Main />
    </div>
  );
};

export default Home;

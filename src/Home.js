import React from "react";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import Table from "./Components/Table";

const Home = () => {
  return (
    <div>
      <Header />
      <Table />
      <Filter />
    </div>
  );
};

export default Home;

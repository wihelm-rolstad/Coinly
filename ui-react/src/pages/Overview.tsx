import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import IncomesCard from "../components/IncomesCard";
import ExpensesCard from "../components/ExpensesCard";
import "../style/Overview.css";

const Overview = () => {
  return (
    <>
    <NavBar />
      <h2 id="messagelabel">USER's Overview</h2>
      <div id="overview-container">
          <IncomesCard incomes={[]} />
          <ExpensesCard expenses={[]} />
          <p></p>
        </div>
    </>
  );
};

export default Overview;
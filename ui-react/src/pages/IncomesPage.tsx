import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CreateIncome from "../components/CreateIncome";
import IncomesCard from "../components/IncomesCard";
import { getIncomes } from "../services/IncomeService";
import "../style/IncomesPage.css";

type Income = {
  incomeName: string;
  value: number;
};


const IncomesPage = () => {
    const [incomes, setIncomes] = useState<Income[]>([]);

    // Fetch existing incomes on page load
    useEffect(() => {
        getIncomes().then(setIncomes).catch(console.error);
    }, []);

  // Add new income locally after POST succeeds
    const handleAddIncome = (income: Income) => {
        setIncomes((prev) => [...prev, income]);
    };

    return(
        <>
        <NavBar />
        <div id="incomes-container">
          <CreateIncome onAdd={(income) => setIncomes((prev) => [...prev, income])} />
          <IncomesCard incomes={incomes} />
        </div>
        </>
    )
}

export default IncomesPage;
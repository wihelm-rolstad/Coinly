import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CreateExpense from "../components/CreateExpense";
import ExpensesCard from "../components/ExpensesCard";
import { getExpenses } from "../services/ExpensesService";

type Expense = {
  expenseName: string;
  value: number;
};

const IncomesPage = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    // Fetch existing incomes on page load
    useEffect(() => {
        getExpenses().then(setExpenses).catch(console.error);
    }, []);

  // Add new income locally after POST succeeds
    const handleAddIncome = (expense: Expense) => { setExpenses((prev) => [...prev, expense]);};

    return(
        <>
        <NavBar />
        <CreateExpense onAdd={(expense) => setExpenses((prev) => [...prev, expense])} />
        <ExpensesCard expenses={expenses} />
        </>
    )
}

export default IncomesPage;
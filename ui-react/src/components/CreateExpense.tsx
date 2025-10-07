import { useState } from "react";
import TextField from "@mui/material/TextField";
import { addExpense } from "../services/ExpensesService";

const CreateExpense = ({ onAdd }: { onAdd: (expense: any) => void }) => {
    const [expenseName, setExpenseName] = useState("");
    const [value, setValue] = useState<number | "">("");

    const handleSubmit = async () => {
        const newExpense = { expenseName, value: Number(value)};
        try {
            const savedExpense = await addExpense(newExpense);
            onAdd(savedExpense);
            setExpenseName("");
            setValue(""); 
        } catch (err) {
            console.error("Error adding expense:", err);
        }
    };

    return (
        <div id="create-expense">
             <h3>Add New Expense</h3>
                  <TextField
                    placeholder="Name"
                    style={{ backgroundColor: "white", marginBottom: "10px" }}
                    value={expenseName}
                    onChange={(e) => setExpenseName(e.target.value)}
                  />
                  <TextField
                    type="number"
                    placeholder="Amount"
                    style={{ backgroundColor: "white", marginBottom: "10px" }}
                    value={value}
                    onChange={(e) => setValue(e.target.value ? Number(e.target.value) : "")}
                  />
                  <button onClick={handleSubmit}>Add Expense</button>




        </div>
    )
};

export default CreateExpense;
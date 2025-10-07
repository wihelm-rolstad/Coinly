import { useState } from "react";
import TextField from "@mui/material/TextField";
import { addIncome } from "../services/IncomeService";
import "../style/CreateIncome.css";



const CreateIncome = ({ onAdd }: { onAdd: (income: any) => void }) => {
  const [incomeName, setIncomeName] = useState("");
  const [value, setValue] = useState<number | "">("");

  const handleSubmit = async () => {
    const newIncome = { incomeName, value: Number(value) };
    try {
      const savedIncome = await addIncome(newIncome);
      onAdd(savedIncome);
      setIncomeName("");
      setValue("");
    } catch (err) {
      console.error("Error adding income:", err);
    }
  };

  
  return (
    <div id="create-income">
      <h3>Add New Income</h3>
      <TextField
        placeholder="Name"
        style={{ backgroundColor: "white", marginBottom: "10px" }}
        value={incomeName}
        onChange={(e) => setIncomeName(e.target.value)}
      />
      <TextField
        type="number"
        placeholder="Amount"
        style={{ backgroundColor: "white", marginBottom: "10px" }}
        value={value}
        onChange={(e) => setValue(e.target.value ? Number(e.target.value) : "")}
      />
      <button onClick={handleSubmit}>Add Income</button>
    </div>
  );
};

export default CreateIncome;

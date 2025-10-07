type Expense = {
    expenseName: string;
    value: number;
};

const ExpensesCard = ({expenses}: {expenses: Expense[]}) => {
    return (
        <>
        <div style={{
             border: "1px solid black",
            padding: "20px",
            margin: "10px",
            borderRadius: "10px",
            width: "300px",
            backgroundColor: "#f9f9f9",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
            fontFamily: "Arial, sans-serif",
            overflow: "auto",
            height: "300px",
        }}>
            <h2>All expenses:</h2>
         {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul style={{marginTop: "10px", color: "#ff0606ff"}}>
          {expenses.map((expense, index) => (
            <li key={index}>
              <strong>{expense.expenseName}</strong>: ${expense.value}
            </li>
          ))}
        </ul>
      )}

        </div>
        </>
    )
}

export default ExpensesCard;
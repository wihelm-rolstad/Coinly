import "../style/IncomesCard.css";

type Income = {
  incomeName: string;
  value: number;
};

const IncomesCard = ({ incomes }: { incomes: Income[] }) => {
  return (
    <div id="incomes-card">
      <h2>All Incomes:</h2>
      {incomes.length === 0 ? (
        <p>No incomes yet.</p>
      ) : (
        <ul style={{marginTop: "10px"}}>
          {incomes.map((income, index) => (
            <li key={index}>
              <strong>{income.incomeName}</strong>: ${income.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IncomesCard;
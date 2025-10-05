import NavBar from "../components/NavBar";
import Card from "../components/Card";
import CreateIncome from "../components/CreateIncome";

const Overview = () => {
  return (
    <>
      <NavBar />
      <h2>Overview</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Card title="Balance" content="$5400" />
        <Card title="Income" content="$7500" />
        <Card title="Expenses" content="$2000" />
      </div>
      <CreateIncome onAdd={(income) => console.log("Added income:", income)}/>
    </>
  );
};

export default Overview;
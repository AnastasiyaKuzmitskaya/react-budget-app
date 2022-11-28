import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

export const AddExpensess = () => {
  const { setNewExpense } = useExpensesContext();
  const handleSubmit = () => {
    setNewExpense({ id: "22222fgdrg", name: "opata", price: 200 });
  };

  return <button onClick={handleSubmit}>fregrtgrt</button>;
};

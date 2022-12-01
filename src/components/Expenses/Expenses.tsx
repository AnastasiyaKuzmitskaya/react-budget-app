import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext";
import { useInput } from "../../hooks";
import { IExpense } from "../../types/types";
import { ExpensesList } from "../ExpensesList";
import { Search } from "../Search";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const searchInput = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setfilteredExpenses] = useState<IExpense[]>(expenses);

  useEffect(() => {
    searchInput.value
      ? setfilteredExpenses(
          expenses.filter((expense) =>
            expense.name.toLowerCase().includes(searchInput.value.toLocaleLowerCase()),
          ),
        )
      : setfilteredExpenses(expenses);
  }, [expenses, searchInput.value]);

  return (
    <StyledExpenses>
      <Title label={"Expenses"} />
      <Search {...searchInput} />
      <ExpensesList searchResult={filteredExpenses} />
    </StyledExpenses>
  );
};

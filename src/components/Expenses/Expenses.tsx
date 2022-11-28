import { ExpensesList } from "../ExpensesList/ExpensesList";
import { Search } from "../Search/Search";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title label="Expenses" />
      <Search />
      <ExpensesList />
    </StyledExpenses>
  );
};

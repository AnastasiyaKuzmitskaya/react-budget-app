import { useExpensesContext } from "../../context";
import { IExpense } from "../../types/types";
import { ExpensesListItem } from "../ExpensesListItem/ExpensesListItem";
import { SeachError, StyledList } from "./styles";

interface IProps {
  searchResult: IExpense[];
}
export const ExpensesList = ({ searchResult }: IProps) => {
  const { expenses } = useExpensesContext();

  if (searchResult.length) {
    return (
      <StyledList>
        {searchResult.map(({ name, price, id }) => {
          return <ExpensesListItem key={id} name={name} price={price} id={id} />;
        })}
      </StyledList>
    );
  }

  if (!searchResult.length && expenses.length) return <SeachError>Oooops 🙈</SeachError>;
  return <></>;
};

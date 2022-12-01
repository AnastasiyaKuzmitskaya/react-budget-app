import { useCurrencyContext, useExpensesContext } from "../../context";

import { ExpensesItemBadge, ExpensesItemText, StyledExpensesItem, DeleteButton } from "./styles";

interface IProps {
  name: string;
  price: number;
  id: string;
}

export const ExpensesListItem = ({ name, price, id }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(id);
  };
  return (
    <StyledExpensesItem>
      <ExpensesItemText>{name}</ExpensesItemText>
      <ExpensesItemBadge>
        {currentCurrency.value}
        {price}
      </ExpensesItemBadge>
      <DeleteButton onClick={handleDelete} />
    </StyledExpensesItem>
  );
};

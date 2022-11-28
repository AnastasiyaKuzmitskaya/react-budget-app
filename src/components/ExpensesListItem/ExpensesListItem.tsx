import React from "react";

export const ExpensesListItem = () => {
  return <div>ExpensesListItem</div>;
};

/* import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

interface IProps {
  title: string;
  price: number;
  id: string;
}

export const SpendingItem = ({ title, price, id }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(id);
  };
  return (
    <StyledListItem>
      <StyledItemText>{name}</StyledItemText>
      <StyledItemBadge>
        {currentCurrency.value}
        {price}
      </StyledItemBadge>
      <StyledItemDelete onClick={handleDelete} />
    </StyledListItem>
  );
}; */

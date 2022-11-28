import React from 'react'

export const ExpensesList = () => {
  return (
    <div>ExpensesList</div>
  )
}

/* import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpense } from "../../types/types";
import { ExpensesListItem } from "../ExpensesListItem/ExpensesListItem";
import { OppsError, StyledList } from "./styles";

interface IProps {
  searchResult: IExpense[];
}

export const ExpensesList = ({ searchResult }: IProps) => {
  const { expenses } = useExpensesContext();

  if (searchResult.length) {
    return (
      <StyledList>
        {searchResult.map(({ title, price, id }) => {
          return (
            <ExpensesListItem
              key={id}
              id={id}
              title={title}
              price={price}
            />
          );
        })}
      </StyledList>
    );
  }

  if (!searchResult.length && expenses.length)
    return <OppsError>Oooops 🙈</OppsError>;

  return <></>;
}; */
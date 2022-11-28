import { createContext, ReactNode, useContext, useState } from "react";
import { IExpenseContext, IExpensesContextProviderProps } from "./types";

export const ExpensesContext = createContext<IExpenseContext>({} as IExpenseContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>(() => ({
    expenses: [],

    setNewExpense: (newExpenses) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses, newExpenses],
      }));
    },
    deleteExpense: (id) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses].filter((exp) => exp.id !== id),
      }));
    },

    searchValue: "",
    searchExpense: (name) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        searchValue: name.toLowerCase(),
      }));
    },
  }));

  return expensesContext;
};

export const useExpensesContext = () => useContext<IExpenseContext>(ExpensesContext);

export const ExpensesContextProvider = ({ children }: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};

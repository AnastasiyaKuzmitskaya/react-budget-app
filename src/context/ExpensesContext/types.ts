import { ReactNode } from "react";
import { IExpense } from "../../types/types";

export interface IExpensesContextProviderProps {
    children: ReactNode;
  }


  export interface IExpenseContext{
    expenses: IExpense[];
    setNewExpense: (expenses: IExpense) => void;
    deleteExpense:(id:string) =>void;
    searchExpense: (title: string) => void;
  }
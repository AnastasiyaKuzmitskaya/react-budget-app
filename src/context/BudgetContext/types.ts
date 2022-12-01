import { ReactNode } from "react";

export interface IChildrenContext {
  children: ReactNode;
}

export interface IBudgetContext {
  budget: number;
  setBudget: (value: number) => void;
}

import { ReactNode } from "react";

export interface IChildrenContext {
  children: ReactNode;
};

export interface IBudgetContext {
  budget: number;
  remaining: number;
  spending: number;
  setBudget: (budget: number) => void;
  setRemaining: () => void;
  setSpending: (value: number) => void;
};

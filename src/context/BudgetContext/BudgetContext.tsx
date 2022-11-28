import { createContext, useContext, useState } from "react";
import { IBudgetContext, IChildrenContext } from "./types";

export const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>({
    budget: 0,
    setBudget: (value) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        budget: value,
      }));
    },
    remaining: 0,
    setRemaining: () => {
      setBudgetContext((ctx) => ({
        ...ctx,
        remaining: ctx.budget - ctx.spending,
      }));
    },
    spending: 0,
    setSpending: (value) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        spending: ctx.spending + value,
      }));
    },
  });
  return budgetContext;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);
export const BudgetContextProvider = ({ children }: IChildrenContext) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};

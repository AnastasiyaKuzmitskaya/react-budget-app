import { AddExpensess } from "./components/AddExpensess/AddExpensess";
import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";

import { Wrapper } from "./wrapper";

export const App = () => {
  return (
    <>
      <Wrapper>
        <Budget />
        <Expenses />
        <AddExpensess />
      </Wrapper>
    </>
  );
};

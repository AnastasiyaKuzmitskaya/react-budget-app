import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AppContextProvider } from "./context/AppContext/AppContextProvaider";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";

import { GlobalStyle } from "./GlobalStyle";

const providers = [BudgetContextProvider, CurrencyContextProvider, ExpensesContextProvider];

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppContextProvider components={providers}>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
);

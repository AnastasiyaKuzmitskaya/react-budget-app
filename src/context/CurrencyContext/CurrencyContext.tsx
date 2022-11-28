import { createContext, useContext, useState } from "react";
import { Currency } from "../../config/currency";
import { IOption } from "../../types/types";
import { ICurrencyContextProviderProps, ICurrencyContex } from "./types";

const CurrencyContext = createContext<ICurrencyContex>({} as ICurrencyContex);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContex>({
    currentCurrency: { value: Currency.USD, label: "USD" },
    currencies: [
      { value: Currency.USD, label: "USD" },
      { value: Currency.EUR, label: "EUR" },
      { value: Currency.GBR, label: "GBR" },
      { value: Currency.BYN, label: "BYN" },
    ],
    setCurrency: (currentCurrency: IOption) => {
      setCurrencyContext((ctx) => ({
        ...ctx,
        currentCurrency,
      }));
    },
  });
  return currencyContext;
};

export const useCurrencyContext = () => useContext<ICurrencyContex>(CurrencyContext);

export const CurrencyContextProvider = ({ children }: ICurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};

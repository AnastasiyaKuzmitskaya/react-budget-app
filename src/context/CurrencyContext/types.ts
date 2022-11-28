import { ReactNode } from "react";
import { IOption } from "../../types/types";

export interface ICurrencyContextProviderProps {
  children: ReactNode;
}

export interface ICurrencyContex {
  currentCurrency: IOption;
  setCurrency: (currency: IOption) => void;
  currencies: IOption[];
}

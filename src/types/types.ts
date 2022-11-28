import { Currency } from "../config/currency";

export interface IOption {
  value: Currency;
  label: keyof typeof Currency;
}

export interface IExpense {
  id: string;
  name: string;
  price: number;
}

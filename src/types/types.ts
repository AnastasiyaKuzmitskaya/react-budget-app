import { Currency } from "../config/currency";

export interface IOption {
  value: Currency;
  label: keyof typeof Currency;
}

export interface IExpense {
  name: any;
  id: string;
  title: string;
  cost: number;
}

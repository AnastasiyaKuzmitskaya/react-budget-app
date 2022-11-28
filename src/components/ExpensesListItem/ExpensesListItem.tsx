import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import {
  StyledDeleteButton,
  StyledExpensesItemBadge,
  StyledExpensesItemText,
  StyledExpensesListItem,
} from "./styles";

interface IProps {
  name: string;
  price: number;
  id: string;
}

export const ExpensesListItem = ({ name, price, id }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(id);
  };
  return (
    <StyledExpensesListItem>
      <StyledExpensesItemText>{name}</StyledExpensesItemText>
      <StyledExpensesItemBadge>
        {currentCurrency.value}
        {price}
      </StyledExpensesItemBadge>
      <StyledDeleteButton onClick={handleDelete} />
    </StyledExpensesListItem>
  );
};

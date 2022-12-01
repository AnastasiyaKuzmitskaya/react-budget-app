import { useBudgetContext, useCurrencyContext, useExpensesContext } from "../../context";
import { StyledRemainingCard, Title } from "./styles";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const { budget } = useBudgetContext();

  const remaining = budget - expenses.reduce((total, { price }) => total + price, 0);

  const isOverSpending = remaining < 0;
  return (
    <StyledRemainingCard $isOverSpending={isOverSpending}>
      <Title $isOverSpending={isOverSpending}>
        {isOverSpending
          ? `Overspending by ${currentCurrency.value}${Math.abs(remaining)}`
          : `Remaining: ${currentCurrency.value}${remaining}`}
      </Title>
    </StyledRemainingCard>
  );
};

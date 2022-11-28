import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledSpentCard } from "./styles";

export const SpentCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { spending } = useBudgetContext();

  return (
    <StyledSpentCard>
      Spent so far: {currentCurrency.value}
      {spending}
    </StyledSpentCard>
  );
};

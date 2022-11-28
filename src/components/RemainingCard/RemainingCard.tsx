import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledRemainingCard } from "./styles";


export const  RemainingCard = () => {
	const { currentCurrency } = useCurrencyContext();
	const { remaining  } = useBudgetContext();

  if (remaining < 0) {
    return (
      <StyledRemainingCard error>
        Overspending by {currentCurrency.value}
        {Math.abs(remaining)}
      </StyledRemainingCard>
    );
  }
  return (
    <StyledRemainingCard>
      Remaining {currentCurrency.value}:{remaining}{" "}
    </StyledRemainingCard>
  );
};




import { useEffect, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { useToogle } from "../../hooks/useToogle";
import { Button, Input, StyledBudgetCart, SubTitle } from "./styles";

export const BudgetCard = () => {
  const budgetInput = useInput();
  const { setBudget, budget, setRemaining } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();

  const [isActive, toogleIsActive] = useToogle(false);
  const [isDisableSave, setDisableSave] = useState<boolean>(true);
  const handleSave = () => {
    setBudget(+budgetInput.value);
    setRemaining();
    toogleIsActive();
  };
  const handleEdit = () => toogleIsActive();
  const debounceBudget = useDebounce(budgetInput.value, 500);
  useEffect(
    () => (debounceBudget && +debounceBudget > 0 ? setDisableSave(false) : setDisableSave(true)),
    [debounceBudget],
  );

  return (
    <StyledBudgetCart>
      {isActive ? (
        <>
          <Input {...budgetInput} placeholder="Enter Budget ..." type="number" />
          <Button onClick={handleSave} disabled={isDisableSave}>
            Save
          </Button>
        </>
      ) : (
        <>
          <SubTitle>
            Budget: {currentCurrency.value}
            {budget}
          </SubTitle>
          <Button onClick={handleEdit}>Edit</Button>
        </>
      )}
    </StyledBudgetCart>
  );
};

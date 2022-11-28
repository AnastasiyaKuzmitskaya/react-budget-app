import { BudgetCard } from "../BudgetCard/BudgetCard";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../SpentCard/SpentCard";
import { Title } from "../Title/Title";
import { BudgetHeader, StyledBudget } from "./styles";

export const Budget = () => {
  return (
    <>
      <StyledBudget>
        <BudgetHeader>
          <Title label="Budget App" />
          <CustomSelect />
        </BudgetHeader>
        <BudgetCard />
        <RemainingCard />
        <SpentCard />
      </StyledBudget>
    </>
  );
};

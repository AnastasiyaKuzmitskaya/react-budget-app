import { SubmitHandler, useForm } from "react-hook-form";
import { v4 } from "uuid";
import { useBudgetContext, useExpensesContext } from "../../context";
import { IExpense } from "../../types/types";
import { Submit } from "../Submit/Submit";
import { Title } from "../Title";
import { StyledAddExpenses, StyledAddInput } from "./styles";

export const AddExpensess = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IExpense>();

  const { setNewExpense } = useExpensesContext();
  const { budget } = useBudgetContext();

  const onSubmit: SubmitHandler<IExpense> = ({ name, price }) => {
    if (budget > 0) {
      setNewExpense({ name, price, id: v4() });
      reset();
    }
  };

  return (
    <StyledAddExpenses onSubmit={handleSubmit(onSubmit)}>
      <Title label={"Add Expense"} />

      <StyledAddInput
        type="text"
        placeholder="enter name ..."
        {...register("name", {
          required: "Name is required",
          maxLength: { value: 10, message: "Maximum lenghts 20 letters" },
        })}
      />
      <span className="ErrorMessage">{errors.name && errors.name.message}</span>

      <StyledAddInput
        type="text"
        placeholder="enter price ..."
        {...register("price", {
          required: "Price is required",
          maxLength: { value: 10, message: "Maximum lenghts 10 letters" },
          pattern: { value: /^[ 0-9]+$/, message: "Only numbers please" },
        })}
      />
      <span className="ErrorMessage ">{errors.price && errors.price.message}</span>
      <Submit />
    </StyledAddExpenses>
  );
};

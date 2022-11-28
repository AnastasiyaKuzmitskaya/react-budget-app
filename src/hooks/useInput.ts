import { ChangeEvent, useState } from "react";

export const useInput = (initValue: string = "") => {
  const [value, setInputValue] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};

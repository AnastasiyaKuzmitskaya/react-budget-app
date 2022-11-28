import { ChangeEvent, useState } from "react";

export const useInput = (_initValue: string = "") => {
  const [value, setValue] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};

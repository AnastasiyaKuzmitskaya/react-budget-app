import { useState } from "react";

export const useToogle = (initlValue: boolean = false): [value: boolean, toogle: () => void] => {
  const [value, setValue] = useState<boolean>(initlValue);

  const toogle = () => setValue((state) => !state);

  return [value, toogle];
};

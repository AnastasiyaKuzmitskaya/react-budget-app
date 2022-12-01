import { ChangeEvent } from "react";
import { StyledSearch } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ value, onChange }: IProps) => {
  return <StyledSearch type="text" placeholder="search ..." value={value} onChange={onChange} />;
};

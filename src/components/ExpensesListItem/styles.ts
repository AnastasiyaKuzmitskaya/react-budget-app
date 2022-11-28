import styled from "styled-components";

export const StyledExpensesListItem = styled.li`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1.1fr 0.2fr 0.1fr;
  padding: 15px 20px;
  align-items: center;
  border-bottom: 2px solid #ccd5ff;
`;

export const StyledExpensesItemText = styled.p`
  text-transform: lowercase;
  font-weight: 400;
  font-size: 16px;
`;

export const StyledExpensesItemBadge = styled.span`
  justify-self: center;
  border-radius: 10px;
  padding: 3px 10px;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
`;

export const StyledDeleteButton = styled.span`
  justify-self: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

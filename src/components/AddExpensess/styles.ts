import styled from "styled-components";

export const StyledAddExpenses = styled.form`
  display: flex;
  flex-direction: column;
  .ErrorMessage {
    font-weight: 400;
    font-size: 12px;
  }
`;
export const StyledAddInput = styled.input`
  padding: 15px 20px;
  margin-bottom: 20px;
  color: #999999;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

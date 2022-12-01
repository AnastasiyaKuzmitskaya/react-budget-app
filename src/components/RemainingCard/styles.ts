import styled from "styled-components";

interface IProps {
  $isOverSpending?: boolean;
}

export const StyledRemainingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${(props: IProps) => (props.$isOverSpending ? "#FF0000" : "#CCD5FF")};
`;

export const Title = styled.p`
  color: ${(props: IProps) => (props.$isOverSpending ? "#FFF" : "000000")};
  font-weight: ${({ $isOverSpending }) => ($isOverSpending ? "700" : "500")};
  font-size: 24px;
`;

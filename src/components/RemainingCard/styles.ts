import styled from "styled-components";

interface IProps {
  error?: boolean;
}

export const StyledRemainingCard = styled.div`
  background-color: ${(props: IProps) => (props.error ? "#FF0000 " : "#CCD5FF")};
  color: ${(props: IProps) => (props.error ? "#FFF" : "#000000")};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
`;

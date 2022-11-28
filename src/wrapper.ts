import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px auto;
  padding: 30px 20px 53px 20px;
  width: 550px;
  background-color: #FFFFFF;
  @media (max-width: 480px) {
    max-width: 375px;
  }
`;

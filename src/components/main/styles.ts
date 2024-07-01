import styled from "styled-components";

const MainStyled = styled.main`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 10px;
    gap: 15px;
  }
`;

export default MainStyled;

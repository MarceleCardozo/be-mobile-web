import styled from "styled-components";

const ContainerStyled = styled.body`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.neutral.gray00};
`;

export default ContainerStyled;

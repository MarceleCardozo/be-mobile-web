import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.neutral.white};
  display: flex;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadows.shadow2};
`;

export default HeaderStyled;

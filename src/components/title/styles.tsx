import styled from "styled-components";

const TitleStyled = styled.h1`
  font-family: ${(props) => props.theme.typography.h1.fontFamily};
  font-weight: ${(props) => props.theme.typography.h1.fontWeight};
  font-size: ${(props) => props.theme.typography.h1.fontSize};
`;

export default TitleStyled;

import styled, { css } from "styled-components";

const ExpandIconStyled = styled.img<{ rotated: boolean }>`
  transition: transform 0.3s ease-in-out;
  ${(props) =>
    props.rotated &&
    css`
      transform: rotate(180deg);
    `}
`;

export default ExpandIconStyled;

import styled from "styled-components";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    align-items: start;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.regular28};
  }
`;

export default WrapperStyled;

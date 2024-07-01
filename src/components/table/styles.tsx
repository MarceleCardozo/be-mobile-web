import styled from "styled-components";

const TableStyled = styled.table`
  background-color: ${(props) => props.theme.colors.neutral.white};
  font-family: "Roboto";
  border-collapse: collapse;
  box-shadow: ${(props) => props.theme.shadows.shadow1};
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`;

const THeadStyled = styled.thead`
  background: ${(props) => props.theme.colors.primary.gradient};
  color: ${(props) => props.theme.colors.neutral.white};
  height: 50px;
  border-radius: 8px 8px 0 0;
`;

const TRStyled = styled.tr`
  border-bottom: 2px solid ${(props) => props.theme.colors.neutral.gray10};
  height: 48px;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const AvatarStyled = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 100%;
`;

const TDStyled = styled.td`
  text-align: center;
`;

const THStyled = styled.th`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.theme.colors.neutral.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  TableStyled,
  THeadStyled,
  TRStyled,
  AvatarStyled,
  TDStyled,
  Circle,
  THStyled,
};

import styled from "styled-components";

const SearchWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid ${(props) => props.theme.colors.neutral.gray10};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.neutral.white};
  justify-content: space-between;
`;

const SearchInputStyled = styled.input`
  background-color: transparent;
  border: none;
  font-family: ${(props) => props.theme.typography.h3.fontFamily};
  font-weight: ${(props) => props.theme.typography.h3.fontWeight};
  font-size: ${(props) => props.theme.typography.h3.fontSize};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.neutral.gray10};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.neutral.gray20};
  }
`;

export { SearchWrapperStyled, SearchInputStyled };

import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  100% {
    max-height: 200px;
    opacity: 1;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 30px;
  border-bottom: 1px dashed ${(props) => props.theme.colors.neutral.gray10};
  transition: opacity 0.5s ease-out;
`;

const ExpandedContentWrapper = styled.div<{ expanded: boolean }>`
  display: ${(props) => (props.expanded ? "table-row" : "none")};
  overflow: hidden;
  transition: max-height 0.5s ease-out, opacity 0.3s ease-out;
  max-height: ${(props) => (props.expanded ? "200px" : "0")};
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  border-bottom: ${(props) =>
    props.expanded ? `2px solid ${props.theme.colors.neutral.gray10}` : "none"};
  transition: opacity 1s ease-out;
  animation: ${(props) => (props.expanded ? slideDown : "none")} 1.5s ease-out;
`;

export { ContentWrapper, ExpandedContentWrapper };

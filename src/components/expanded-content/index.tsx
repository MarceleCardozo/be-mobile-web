import React from "react";
import styled from "styled-components";
import { TDStyled } from "../table/styles";
import formatPhoneNumber from "../../utils/formatPhoneNumber";

interface ExpandedContentProps {
  job: string;
  admission_date: Date;
  phone: string;
  isMobile: boolean;
  expanded: boolean;
}

const ExpandedContentWrapper = styled.div<{ expanded: boolean }>`
  display: ${(props) => (props.expanded ? "table-row" : "none")};
  overflow: hidden;
  transition: max-height 0.5s ease-out, opacity 0.3s ease-out;
  max-height: ${(props) => (props.expanded ? "200px" : "0")};
  opacity: ${(props) => (props.expanded ? "1" : "0")};
`;

const ExpandedContent: React.FC<ExpandedContentProps> = ({
  job,
  admission_date,
  phone,
  isMobile,
  expanded,
}) => {
  return (
    <ExpandedContentWrapper expanded={expanded}>
      <TDStyled colSpan={isMobile ? 4 : 5}>
        <div>
          <strong>Cargo:</strong> {job}
        </div>
        <div>
          <strong>Data de Admissão:</strong>{" "}
          {new Date(admission_date).toLocaleDateString()}
        </div>
        <div>
          <strong>Telefone:</strong> {formatPhoneNumber(phone)}
        </div>
      </TDStyled>
    </ExpandedContentWrapper>
  );
};

export default ExpandedContent;

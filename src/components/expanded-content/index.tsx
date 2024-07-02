import React from "react";
import { TDStyled } from "../table/styles";
import formatPhoneNumber from "../../utils/formatPhoneNumber";
import { ExpandedContentWrapper, ContentWrapper } from "./styled";

interface ExpandedContentProps {
  job: string;
  admission_date: Date;
  phone: string;
  isMobile: boolean;
  expanded: boolean;
}

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
        <ContentWrapper>
          <strong>Cargo:</strong>
          <p>{job}</p>
        </ContentWrapper>
        <ContentWrapper>
          <strong>Data de Admissão:</strong>
          <p>{new Date(admission_date).toLocaleDateString()}</p>
        </ContentWrapper>
        <ContentWrapper>
          <strong>Telefone:</strong>
          <p>{formatPhoneNumber(phone)}</p>
        </ContentWrapper>
      </TDStyled>
    </ExpandedContentWrapper>
  );
};

export default ExpandedContent;

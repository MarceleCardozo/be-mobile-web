import { useState } from "react";
import formatPhoneNumber from "../../utils/formatPhoneNumber";
import ExpandIcon from "../../assets/charm_chevron-down.svg";
import { IEmployee } from "../../types/types";
import { AvatarStyled, TDStyled, TRStyled } from "../table/styles";
import ExpandedContent from "../expanded-content";
import ExpandIconStyled from "./styles";

interface EmployeeRowProps {
  employee: IEmployee;
  isMobile: boolean;
}

function EmployeeRow({ employee, isMobile }: EmployeeRowProps) {
  const { image, name, job, admission_date, phone } = employee;
  const [expanded, setExpanded] = useState(false);

  const handleIconClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <TRStyled expanded={expanded}>
        <TDStyled>
          <AvatarStyled src={image} alt={`${name}'s profile`} />
        </TDStyled>
        <TDStyled>{name}</TDStyled>
        {!isMobile && (
          <>
            <TDStyled>{job}</TDStyled>
            <TDStyled>{new Date(admission_date).toLocaleDateString()}</TDStyled>
            <TDStyled>{formatPhoneNumber(phone)}</TDStyled>
          </>
        )}

        {isMobile && (
          <TDStyled onClick={handleIconClick}>
            <ExpandIconStyled
              src={ExpandIcon}
              alt="Expand"
              rotated={expanded}
            />
          </TDStyled>
        )}
      </TRStyled>

      {isMobile && (
        <ExpandedContent
          job={job}
          admission_date={admission_date}
          phone={phone}
          isMobile={isMobile}
          expanded={expanded}
        />
      )}
    </>
  );
}

export default EmployeeRow;

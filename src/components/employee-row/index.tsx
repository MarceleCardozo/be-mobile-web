import formatPhoneNumber from "../../utils/formatPhoneNumber";
import ExpandIcon from "../../assets/charm_chevron-down.svg";
import { IEmployee } from "../../types/types";
import { AvatarStyled, TDStyled, TRStyled } from "../table/styles";

interface EmployeeRowProps {
  employee: IEmployee;
  isMobile: boolean;
}

function EmployeeRow({ employee, isMobile }: EmployeeRowProps) {
  const { image, name, job, admission_date, phone } = employee;

  return (
    <TRStyled>
      <TDStyled>
        <AvatarStyled src={image} alt={`${name}'s profile`} />
      </TDStyled>
      <TDStyled>{name}</TDStyled>
      {isMobile ? (
        <TDStyled>
          <img src={ExpandIcon} alt="Expand" />
        </TDStyled>
      ) : (
        <>
          <TDStyled>{job}</TDStyled>
          <TDStyled>{new Date(admission_date).toLocaleDateString()}</TDStyled>
          <TDStyled>{formatPhoneNumber(phone)}</TDStyled>
        </>
      )}
    </TRStyled>
  );
}

export default EmployeeRow;

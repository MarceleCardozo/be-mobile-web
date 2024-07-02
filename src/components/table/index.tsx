import { IEmployee } from "../../types/types";
import { Circle, THStyled, THeadStyled, TableStyled } from "./styles";
import EmployeeRow from "../employee-row";

interface TableProps {
  isMobile: boolean;
  data: IEmployee[];
}

function Table({ isMobile, data }: TableProps) {
  return (
    <TableStyled>
      <THeadStyled>
        <tr>
          {isMobile ? (
            <>
              <th>FOTO</th>
              <th>NOME</th>
              <THStyled>
                <Circle />
              </THStyled>
            </>
          ) : (
            <>
              <th>FOTO</th>
              <th>NOME</th>
              <th>CARGO</th>
              <th>DATA DE ADMISSÃO</th>
              <th>TELEFONE</th>
            </>
          )}
        </tr>
      </THeadStyled>
      <tbody>
        {data.map((employee) => (
          <EmployeeRow
            key={employee.id}
            employee={employee}
            isMobile={isMobile}
          />
        ))}
      </tbody>
    </TableStyled>
  );
}

export default Table;

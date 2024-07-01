import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IEmployee } from "../../types/types";
import useIsMobile from "../../hooks/useIsMobile";
import { Circle, THStyled, THeadStyled, TableStyled } from "./styles";
import EmployeeRow from "../employee-row";

function Table() {
  const [data, setData] = useState<IEmployee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/employees");
        setData(response.data);
      } catch (error) {
        const axiosError = error as AxiosError<{ message: string }>;
        setError(
          axiosError.response?.data.message || "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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

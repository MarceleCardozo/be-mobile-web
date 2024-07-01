import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IEmployee } from "../../types/types";
import formatPhoneNumber from "../../utils/formatPhoneNumber";
import {
  AvatarStyled,
  TDStyled,
  THeadStyled,
  TRStyled,
  TableStyled,
} from "./styles";

function Table() {
  const [data, setData] = useState<IEmployee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/employees");
        setData(response.data);
      } catch (error) {
        const axiosError = error as AxiosError<{ message: string }>;
        throw new Error(axiosError.response?.data.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <TableStyled>
      <THeadStyled>
        <tr>
          <th>FOTO</th>
          <th>NOME</th>
          <th>CARGO</th>
          <th>DATA DE ADMISSÃO</th>
          <th>TELEFONE</th>
        </tr>
      </THeadStyled>
      <tbody>
        {data.map((employee) => (
          <TRStyled key={employee.id}>
            <TDStyled>
              <AvatarStyled
                src={employee.image}
                alt={`${employee.name}'s profile`}
              />
            </TDStyled>
            <TDStyled>{employee.name}</TDStyled>
            <TDStyled>{employee.job}</TDStyled>
            <TDStyled>
              {new Date(employee.admission_date).toLocaleDateString()}
            </TDStyled>
            <TDStyled>{formatPhoneNumber(employee.phone)}</TDStyled>
          </TRStyled>
        ))}
      </tbody>
    </TableStyled>
  );
}

export default Table;

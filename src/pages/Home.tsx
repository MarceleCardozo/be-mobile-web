import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

import MainStyled from "../components/main/styles";
import ContainerStyled from "../components/container/styles";
import Header from "../components/header";
import Table from "../components/table";
import WrapperStyled from "../components/wrapper/styles";
import TitleStyled from "../components/title/styles";
import {
  SearchInputStyled,
  SearchWrapperStyled,
} from "../components/search/styles";
import SearchIcon from "../assets/search.svg";
import useIsMobile from "../hooks/useIsMobile";
import { IEmployee } from "../types/types";

function Home() {
  const [data, setData] = useState<IEmployee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const isMobile = useIsMobile();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IEmployee[]>(
          "http://localhost:3000/employees"
        );
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

  const filteredData = data.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ContainerStyled>
      <Header />
      <MainStyled>
        <WrapperStyled>
          <TitleStyled>Funcionários</TitleStyled>
          <SearchWrapperStyled>
            <SearchInputStyled
              placeholder="Pesquisar por nome, cargo ou telefone"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <img src={SearchIcon} alt="Search Icon" />
          </SearchWrapperStyled>
        </WrapperStyled>
        <Table isMobile={isMobile} data={filteredData} />
      </MainStyled>
    </ContainerStyled>
  );
}

export default Home;

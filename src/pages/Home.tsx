import MainStyled from "../components/body/styles";
import ContainerStyled from "../components/container/styles";
import Header from "../components/header";
import Table from "../components/table";
import Wrapper from "../components/wrapper";

function Home() {
  return (
    <ContainerStyled>
      <Header />
      <MainStyled>
        <Wrapper />
        <Table />
      </MainStyled>
    </ContainerStyled>
  );
}

export default Home;

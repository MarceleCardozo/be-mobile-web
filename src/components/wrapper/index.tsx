import { SearchInputStyled, SearchWrapperStyled } from "../search/styles";
import TitleStyled from "../title/styles";
import WrapperStyled from "./styles";
import iconSearch from "../../assets/Default.svg";

function Wrapper() {
  return (
    <WrapperStyled>
      <TitleStyled>Funcionários</TitleStyled>
      <SearchWrapperStyled>
        <SearchInputStyled placeholder="Pesquisar" />
        <img src={iconSearch} />
      </SearchWrapperStyled>
    </WrapperStyled>
  );
}

export default Wrapper;

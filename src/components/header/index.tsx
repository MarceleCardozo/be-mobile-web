import LogoStyled from "../logo-component/styles";
import HeaderStyled from "./styles";
import beMobileLogo from "../../assets/be-mobile-logo.svg";

function Header() {
  return (
    <HeaderStyled>
      <LogoStyled src={beMobileLogo} alt="be-mobile-logo" />
    </HeaderStyled>
  );
}

export default Header;

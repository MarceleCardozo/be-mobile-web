import ImageStyled from "../image/styles";
import HeaderStyled from "./styles";
import beMobileLogo from "../../assets/be-mobile-logo.svg";

function Header() {
  return (
    <HeaderStyled>
      <ImageStyled src={beMobileLogo} alt="be-mobile-logo" />
    </HeaderStyled>
  );
}

export default Header;

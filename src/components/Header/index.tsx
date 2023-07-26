import { HeaderContainer, HeaderContent } from "./style";
import Logo from "../../assets/logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>
          <img src={Logo} alt="" />
        </h1>
      </HeaderContent>
    </HeaderContainer>
  )
}
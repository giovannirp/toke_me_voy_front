import { HeaderContainer, HeaderContent } from "./style";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>
         <Link to="/">
            <img src={Logo} alt="" />
         </Link>
        </h1>
      </HeaderContent>
    </HeaderContainer>
  )
}
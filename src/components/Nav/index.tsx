import { Link } from "react-router-dom";
import { ContainerMenu, ContentMenu } from "./style";

export function Nav() {
  return (
    <ContainerMenu>
      <ContentMenu>
        <ul>
          <li><Link to="">Meu Canal</Link></li>
          <li><Link to="#">Bola Cheia</Link></li>
          <li><Link to="#">Bola Mucha</Link></li>
          <li><Link to="#">Torcidromentro</Link></li>
          <li><Link to="#">Login</Link></li>
        </ul>
      </ContentMenu>
    </ContainerMenu>
  )
} 
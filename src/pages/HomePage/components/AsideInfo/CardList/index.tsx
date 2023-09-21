import torcidaOrganizada from '../../../../../assets/torcida.png';
import { ContentAsidePrime } from './style';

export function CardList() {
  return (
      <ContentAsidePrime>
        <img src={torcidaOrganizada}  alt="" />
        <div>
          <h2>lorem ipsum</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <span />
          <h2>lorem ipsum</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <span />
          <h2>lorem ipsum</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </ContentAsidePrime>
  )
}
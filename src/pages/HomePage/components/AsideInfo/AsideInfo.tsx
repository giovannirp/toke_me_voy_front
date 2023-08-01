import torcidaOrganizada from '../../../../assets/torcida.png';


import { ContainerAside, ContentAside, ContentAsidePrime } from "./style";

export function AsideInfo() {
  return (
    <ContainerAside>
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
      <ContentAside>
        <iframe
          width="500"
          height="250"
          src="https://www.youtube.com/embed/2012mo2YgcU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </ContentAside>
    </ContainerAside>
  );
}

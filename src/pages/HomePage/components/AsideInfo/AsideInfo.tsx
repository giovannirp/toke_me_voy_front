import { CardList } from "./CardList";
import { CardVideo } from "./CardVideo";
import { ContainerAside } from "./style";

export function AsideInfo() {
  return (
    <ContainerAside>
      <CardList />
      <CardVideo />
      {/* <ContentAside>
        <iframe
          width="500"
          height="250"
          src="https://www.youtube.com/embed/2012mo2YgcU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </ContentAside> */}
    </ContainerAside>
  );
}

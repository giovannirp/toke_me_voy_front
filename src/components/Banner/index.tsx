import BannerImg from '../../assets/banner-new.jpg';
import { ContentBanner } from './style';

export function Banner() {
  return (
    <ContentBanner>
      <img src={BannerImg} alt="" />
    </ContentBanner>
  )
}
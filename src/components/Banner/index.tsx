import BannerImg from '../../assets/banner-new.jpg';
import BannerImgSeconds from '../../assets/banner-new-2.jpg';
import BannerTree from '../../assets/banner-new-3.jpg';

import { useKeenSlider } from 'keen-slider/react';

import { ContentBanner } from './style';

import 'keen-slider/keen-slider.min.css';

export function Banner() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
    }
  })

  return (
    <ContentBanner ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <img src={BannerImg} alt="" />
      </div>

      <div className="keen-slider__slide">
        <img src={BannerImgSeconds} alt="" />
      </div>
      
      <div className="keen-slider__slide">
        <img src={BannerTree} alt="" />
      </div>
    </ContentBanner>
  )
}
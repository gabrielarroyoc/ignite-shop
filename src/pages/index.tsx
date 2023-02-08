import * as S from "../styles/pages/home";
import Image from "next/image";
import camiseta1 from "../assets/1.png";
import camiseta2 from "../assets/2.png";
import camiseta3 from "../assets/3.png";

import { useKeenSlider } from "keen-slider/react";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      <S.Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product ref={sliderRef} className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product ref={sliderRef} className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product ref={sliderRef} className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
    </S.HomeContainer>
  );
}

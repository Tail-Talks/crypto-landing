import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import pic1 from "../../assets/mission-pic1.jpeg"
import pic2 from "../../assets/mission-pic2.jpeg"
import pic3 from "../../assets/mission-pic3.jpeg"
import pic4 from "../../assets/mission-pic4.jpeg"
import NextArrow from "./NextArrow"
import PrevArrow from "./PrevArrow"

const Carousel: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  }

  return (
    <div className="w-full">
      <div className="mb-[30px] flex items-center justify-between">
        <h2 className="text-[40px] font-semibold leading-[72px] text-white">
          Наша миссия
        </h2>
        <div className="flex w-[150px] justify-end">
          <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>
      <div className="overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          <div className="">
            <div className="mission__slider-card mr-[30px]">
              <div className="mission__slider-card-inner flex h-[515px] w-[407px] flex-col items-center">
                <img
                  className="mission__slider-card mb-[28px] h-[250px] w-[355px]"
                  src={pic1}
                  alt="image1"
                ></img>
                <div className="mb-auto flex flex-col items-center justify-center">
                  <div className="mb-[17px] text-[25px] font-semibold leading-[40px] text-white">
                    Объединить
                  </div>
                  <p className="text-center text-[20px] font-thin text-white">
                    сообщество владельцев питомцев со всего мира
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mission__slider-card mr-[30px]">
              <div className="mission__slider-card-inner h-[515px] w-[407px] rounded-[20px]">
                <img
                  className="mission__slider-card mb-[28px] h-[250px] w-[355px]"
                  src={pic2}
                  alt="image2"
                ></img>
                <div className="mb-auto flex flex-col items-center justify-center">
                  <div className="mb-[17px] text-[25px] font-semibold leading-[40px] text-white">
                    Популяризировать
                  </div>
                  <p className="text-center text-[20px] font-thin text-white">
                    технологии блокчейна — фото вашего питомца станет NFT!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mission__slider-card mr-[30px]">
              <div className="mission__slider-card-inner h-[515px] w-[407px] rounded-[20px]">
                <img
                  className="mission__slider-card mb-[28px] h-[250px] w-[355px]"
                  src={pic3}
                  alt="image3"
                ></img>
                <div className="mb-auto flex flex-col items-center justify-center">
                  <div className="mb-[17px] text-[25px] font-semibold leading-[40px] text-white">
                    Создать
                  </div>
                  <p className="text-center text-[20px] font-thin text-white">
                    безопасное и интерактивное пространство для общения и обмена
                    опытом
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mission__slider-card mr-[30px]">
              <div className="mission__slider-card-inner h-[515px] w-[407px] rounded-[20px]">
                <img
                  className="mission__slider-card mb-[28px] h-[250px] w-[355px]"
                  src={pic4}
                  alt="image4"
                ></img>
                <div className="mb-auto flex flex-col items-center justify-center">
                  <div className="mb-[17px] text-[25px] font-semibold leading-[40px] text-white">
                    Поддержать
                  </div>
                  <p className="text-center text-[20px] font-thin text-white">
                    благотворительные инициативы, помогающие животным в беде
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Carousel

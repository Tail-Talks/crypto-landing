import React, { useRef } from "react"
import "../Mission.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import pic1 from "../../../assets/mission-pic1.jpeg"
import pic2 from "../../../assets/mission-pic2.jpeg"
import pic3 from "../../../assets/mission-pic3.jpeg"
import pic4 from "../../../assets/mission-pic4.jpeg"
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
        <h2 className="font-semibold text-white lg:text-35 xl:text-40 xl:leading-[72px]">
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
            <div className="mission__slider-card lg:mr-[40px] xl:mr-[30px]">
              <div className="mission__slider-card-inner rounded-md sm:h-[435px] sm:w-[367px] lg:p-[30px] xl:h-[515px] xl:w-[407px] xl:px-[26px] xl:py-[40px]">
                <img
                  className="mission__slider-card mb-[28px] lg:h-[225px] lg:w-[307px] xl:h-[250px] xl:w-[355px]"
                  src={pic1}
                  alt="image1"
                ></img>
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-[17px] font-semibold text-white lg:text-xl xl:text-2xl">
                    Объединить
                  </div>
                  <p className="text-center font-light text-white lg:text-base xl:text-xl">
                    сообщество владельцев питомцев со всего мира
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mission__slider-card lg:mr-[40px] xl:mr-[30px]">
              <div className="mission__slider-card-inner rounded-md sm:h-[435px] sm:w-[367px] lg:p-[30px] xl:h-[515px] xl:w-[407px] xl:px-[26px] xl:py-[40px]">
                <img
                  className="mission__slider-card mb-[28px] lg:h-[225px] lg:w-[307px] xl:h-[250px] xl:w-[355px]"
                  src={pic2}
                  alt="image2"
                ></img>
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-[17px] font-semibold text-white lg:text-xl xl:text-2xl">
                    Популяризировать
                  </div>
                  <p className="text-center font-light text-white lg:text-base xl:text-xl">
                    технологии блокчейна — фото вашего питомца станет NFT!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mission__slider-card lg:mr-[40px] xl:mr-[30px]">
              <div className="mission__slider-card-inner rounded-md sm:h-[435px] sm:w-[367px] lg:p-[30px] xl:h-[515px] xl:w-[407px] xl:px-[26px] xl:py-[40px]">
                <img
                  className="mission__slider-card mb-[28px] lg:h-[225px] lg:w-[307px] xl:h-[250px] xl:w-[355px]"
                  src={pic3}
                  alt="image3"
                ></img>
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-[17px] font-semibold text-white lg:text-xl xl:text-2xl">
                    Создать
                  </div>
                  <p className="text-center font-light text-white lg:text-base xl:text-xl">
                    безопасное и интерактивное пространство для общения и обмена
                    опытом
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mission__slider-card lg:mr-[40px] xl:mr-[30px]">
              <div className="mission__slider-card-inner rounded-md sm:h-[435px] sm:w-[367px] lg:p-[30px] xl:h-[515px] xl:w-[407px] xl:px-[26px] xl:py-[40px]">
                <img
                  className="mission__slider-card mb-[28px] lg:h-[225px] lg:w-[307px] xl:h-[250px] xl:w-[355px]"
                  src={pic4}
                  alt="image4"
                ></img>
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-[17px] font-semibold text-white lg:text-xl xl:text-2xl">
                    Поддержать
                  </div>
                  <p className="text-center font-light text-white lg:text-base xl:text-xl">
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

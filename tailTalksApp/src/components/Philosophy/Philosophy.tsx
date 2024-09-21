import React, { useState } from "react"
import ImgMinus from "../../assets/philosophy-minus.svg"
import ImgPlus from "../../assets/philosophy-plus.svg"

const Philosophy: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const items = [
    {
      title: "Социализация и общение",
      content:
        "Помогает владельцам находить друзей для своих питомцев, что способствует их социальному развитию и укрепляет связи между животными и людьми.",
    },
    {
      title: "Здоровье и активность",
      content:
        "Стимулирует владельцев к регулярным прогулкам и активности, что важно для физического и эмоционального благополучия питомцев.",
    },
    {
      title: "Участие в конкурсах",
      content:
        "Организация фотоконкурсов и других мероприятий, предоставляя возможность для творчества и получения наград, что также мотивирует к лучшему уходу за питомцами.",
    },
    {
      title: "Образование и информирование",
      content:
        "Делится актуальной информацией о правильном уходе и здоровье животных, помогая владельцам быть более осведомленными и ответственными.",
    },
    {
      title: "Поддержка и советы",
      content:
        "Создаем среду для обмена опытом и получения советов, что особенно ценно для новых владельцев питомцев.",
    },
    {
      title: "NFT и блокчейн",
      content:
        "Предлагаем создание NFT из фотографий питомцев, что может быть не только увлекательным, но и прибыльным хобби, подчеркивающим уникальность каждого животного.",
    },
    {
      title: "Благотворительность и помощь нуждающимся животным",
      content:
        "Организуем акции и сборы средств для поддержки бездомных и больных животных, способствуя созданию заботливого сообщества.",
    },
    {
      title: "Экологическое сознание",
      content:
        "Вовлекаем пользователей в экологические инициативы, способствуя формированию ответственного отношения к окружающей среде.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center px-[24px] sm:px-[40px] lg:my-[120px] xl:my-[170px] xl:px-[80px]">
      <h3 className="bg-gradient-to-r from-[#9B51E0] to-[#3081ED] bg-clip-text text-center text-[26px] font-semibold leading-[82px] tracking-[-2px] text-transparent">
        Общие цели и философия
      </h3>
      <p className="mb-[40px] text-4xl font-bold text-white">Tail Talks</p>

      <div className="w-full max-w-[732px] space-y-4">
        {items.map((item, index) => (
          <button
            key={index}
            className="relative overflow-hidden rounded-[10px] bg-gradient-to-r from-[#fb37ff] to-[#1bb2de] p-px"
            onClick={() => toggleAccordion(index)}
          >
            <div
              className={`relative z-10 flex w-full items-center justify-between rounded-t-[10px] bg-[#1f1d2b] px-[24px] py-[22px] duration-500 ease-in-out ${activeIndex === index ? "" : "rounded-b-[10px]"}`}
            >
              <div className="flex w-full items-center justify-between text-white outline-none">
                <span className="text-[18px] font-semibold leading-[150%] text-white">
                  {item.title}
                </span>
                <span className="text-2xl">
                  {activeIndex === index ? (
                    <img src={ImgMinus} alt="ImgMinus" />
                  ) : (
                    <img src={ImgPlus} alt="ImgPlus" />
                  )}
                </span>
              </div>
            </div>
            <div
              className={`overflow-hidden rounded-[10px] rounded-t-none transition-[max-height] duration-300 ease-in-out ${
                activeIndex === index ? "max-h-96" : "max-h-0 rounded-t-[-20px]"
              }`}
            >
              <div className="bg-[#1f1d2b] p-4">
                <p className="text-left text-[15px] leading-[150%] text-white">
                  {item.content}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Philosophy

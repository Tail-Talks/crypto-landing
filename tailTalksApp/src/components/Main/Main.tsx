import React from "react"
import "./Main.css"
import imageMainDogs from "../../assets/mainDogs.png"
import imageMainLera from "../../assets/mainLera.png"
import imageMainLike from "../../assets/mainLike.svg"

const Main: React.FC = () => {
  return (
    <div className="flex w-full justify-between px-[24px] sm:px-[40px] lg:mb-[147px] xl:mb-[230px] xl:px-[80px]">
      <div className="flex flex-col items-start justify-between sm:max-w-[485px] lg:mr-16 xl:max-w-[672px]">
        <h1 className="mb-[36px] text-2xl font-bold tracking-[-2px] text-white md:text-5xl xl:text-7xl">
          Протяните руку вашему питомцу с&nbsp;NFT
        </h1>
        <p className="mb-[36px] tracking-[0.5px] text-[#E2E2E2] sm:max-w-[485px] sm:text-base lg:text-xl xl:max-w-[637px]">
          Tail Talks&nbsp;&mdash; социальная сеть нового поколения для питомцев
          и&nbsp;их&nbsp;владельцев, где каждый питомец заслуживает стать
          звездой
        </p>
        <button className="h-[60px] rounded-sm bg-[#9B51E0] bg-gradient-to-r from-[#9B51E0] to-[#3081ED] text-[22px] font-semibold leading-[36px] text-white transition-all duration-300 hover:opacity-75 sm:w-[250px] lg:w-[407px]">
          Узнать подробнее
        </button>
      </div>
      <div className="border-gradient flex items-center justify-center rounded-md sm:max-h-[431px] sm:min-w-[395px] xl:min-h-[525px] xl:min-w-[505px]">
        <div className="relative flex size-full flex-col items-center justify-center p-[25px]">
          <div className="z-[2] mb-2 rounded-md before:absolute before:inset-0 before:z-[-1] before:bg-[#3081ed] before:opacity-5 before:content-[''] sm:pt-4 xl:mb-4 xl:pt-0">
            <img
              src={imageMainDogs}
              alt="Ваш питомец"
              className="rounded-md sm:h-[356px] sm:w-[374px] xl:h-[402px] xl:w-[448px]"
            />
            <div className="pointer-events-none absolute left-[-45px] top-[-60px] z-[-1] size-[123px] rounded-full bg-[radial-gradient(circle,_rgba(169,_42,_162,_0.5),_#f62cf680)] opacity-70 blur-[55px]"></div>
            <div className="pointer-events-none absolute bottom-[-90px] right-[-45px] z-[-1] size-[123px] rounded-full bg-[radial-gradient(circle,_rgba(62,_131,_234,_0.5),_rgba(48,_129,_237,_0.5))] opacity-70 blur-[55px]"></div>
          </div>
          <div className="flex h-[50px] items-center justify-between px-[15px] sm:h-[356px] sm:w-[374px] sm:pb-3 xl:h-[402px] xl:w-[448px] xl:pb-0">
            <button className="z-10 flex items-center justify-center rounded bg-transparent text-16 font-semibold leading-[24px] text-white transition duration-300 hover:opacity-75">
              <img
                src={imageMainLera}
                alt="Аватар Леры"
                className="mr-[15px] lg:size-[41px] xl:h-[50px] xl:w-[53px]"
              />
              ЛЕРА
            </button>
            <button className="z-10 flex items-center justify-center rounded bg-transparent text-16 leading-[24px] text-white transition duration-300 hover:opacity-75">
              <img src={imageMainLike} alt="imageMainLike" className="mr-2" />
              338
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main

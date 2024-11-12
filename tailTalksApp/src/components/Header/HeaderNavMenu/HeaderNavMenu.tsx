import React from "react"
import SmallArrow from "../../../assets/header-small-arrow.svg"

const HeaderNavMenu = () => {
  return (
    <nav className="flex">
      <ul className="flex items-center justify-between lg:mr-10 xl:mr-16">
        <li className="mr-[10px] w-max lg:mr-[25px] xl:mr-[35px]">
          <button className="underline-gradient hover:underline-gradient text-color relative cursor-pointer text-xs font-medium leading-6 transition duration-300 ease-in-out md:text-xs lg:text-sm xl:font-bold">
            НАША МИССИЯ
          </button>
        </li>
        <li className="mr-[10px] w-max lg:mr-[25px] xl:mr-[35px]">
          <button className="underline-gradient hover:underline-gradient text-color relative cursor-pointer text-xs font-medium leading-6 transition duration-300 ease-in-out md:text-xs lg:text-sm xl:font-bold">
            СООБЩЕСТВО
          </button>
        </li>
        <li className="mr-[10px] w-max lg:mr-[25px] xl:mr-[35px]">
          <button className="underline-gradient hover:underline-gradient text-color relative cursor-pointer text-xs font-medium leading-6 transition duration-300 ease-in-out md:text-xs lg:text-sm xl:font-bold">
            ДОРОЖНАЯ КАРТА
          </button>
        </li>
        <li className="mr-[10px] w-max lg:mr-[25px] xl:mr-[35px]">
          <button className="underline-gradient hover:underline-gradient text-color relative cursor-pointer text-xs font-medium leading-6 transition duration-300 ease-in-out md:text-xs lg:text-sm xl:font-bold">
            NFT
          </button>
        </li>
        <li className="mr-0 w-max md:mr-[15px] xl:mr-[35px]">
          <button className="underline-gradient hover:underline-gradient text-color relative cursor-pointer text-xs font-medium leading-6 transition duration-300 ease-in-out md:text-xs lg:text-sm xl:font-bold">
            FAQ
          </button>
        </li>
        <li className="hidden">
          <button className="underline-gradient hover:underline-gradient text-color relative hidden cursor-pointer text-xs font-bold leading-6 text-gray-400 transition-opacity duration-300 ease-in-out hover:opacity-70 md:text-xs">
            RU
            <img src={SmallArrow} alt="SmallArrow" className="ml-1 inline" />
          </button>
        </li>
      </ul>

      <button className="relative z-10 flex min-w-[150px] items-center justify-center rounded-2xl bg-[#1f1d2b] px-4 transition-opacity duration-100 ease-in-out before:absolute before:inset-[-2px] before:z-[-1] before:rounded-2xl before:bg-gradient-to-r before:from-[#9B51E0] before:to-[#3081ED] before:content-[''] after:absolute after:inset-0 after:z-[-1] after:rounded-2xl after:bg-[#1f1d2b] after:content-[''] hover:opacity-70 md:py-[7px] lg:h-[36px] xl:h-[46px] xl:min-w-[240px] xl:px-10">
        <span className="text-sm font-semibold text-white">
          Подключить кошелек
        </span>
      </button>
    </nav>
  )
}

export default HeaderNavMenu

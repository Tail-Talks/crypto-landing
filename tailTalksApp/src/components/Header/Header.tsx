import React from "react"
import "./Header.css"
import Logo from "../../assets/logo.svg"
import SmallArrow from "../../assets/header-small-arrow.svg"

const Header: React.FC = () => {
  return (
    <div className="mb-[78px] w-full px-[24px] sm:mt-10 sm:px-[40px] xl:mt-12 xl:px-[80px]">
      <header className="relative flex w-full items-center justify-between">
        <img
          src={Logo}
          alt="Logo"
          className="h-[22px] sm:mr-12 sm:w-[148px] xl:mr-28 xl:w-[179px]"
        />
        <nav className="lg:mr-10 xl:mr-16">
          <ul className="flex items-center justify-between">
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
            <li className="mr-0 w-max xl:mr-[35px]">
              <button className="underline-gradient hover:underline-gradient text-color relative cursor-pointer text-xs font-medium leading-6 transition duration-300 ease-in-out md:text-xs lg:text-sm xl:font-bold">
                FAQ
              </button>
            </li>
            <li className="hidden xl:block">
              <button className="underline-gradient hover:underline-gradient text-color relative hidden cursor-pointer text-xs font-bold leading-6 text-gray-400 transition-opacity duration-300 ease-in-out hover:opacity-70 md:text-xs">
                RU
                <img
                  src={SmallArrow}
                  alt="SmallArrow"
                  className="ml-1 inline"
                />
              </button>
            </li>
          </ul>
        </nav>
        <button className="relative z-10 flex min-w-[210px] items-center justify-center rounded-2xl bg-[#1f1d2b] px-4 transition-opacity duration-100 ease-in-out before:absolute before:inset-[-2px] before:z-[-1] before:rounded-2xl before:bg-gradient-to-r before:from-[#9B51E0] before:to-[#3081ED] before:content-[''] after:absolute after:inset-0 after:z-[-1] after:rounded-2xl after:bg-[#1f1d2b] after:content-[''] hover:opacity-70 md:py-[7px] lg:h-[36px] xl:h-[46px] xl:min-w-[240px] xl:px-10">
          <span className="text-sm font-semibold text-white">
            Подключить кошелек
          </span>
        </button>
      </header>
    </div>
  )
}

export default Header

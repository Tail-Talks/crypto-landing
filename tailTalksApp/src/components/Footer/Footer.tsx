import React from "react"
import Logo from "../../assets/logo.svg"
import Vk from "../../assets/social-vk.svg"
import Slink from "../../assets/social-link.svg"
import Dzen from "../../assets/social-dzen.svg"
import Vc from "../../assets/social-vc.svg"
import Tg from "../../assets/social-tg.svg"

const Footer: React.FC = () => {
  return (
    <div className="xs:py-7 xs:px-6 flex h-[267px] flex-col sm:h-auto sm:px-[24px] lg:px-[40px] xl:px-[80px]">
      <div className="xs:before:hidden relative w-full before:absolute before:left-0 before:top-0 before:h-px before:w-full before:bg-gradient-to-r before:from-[#9B51E0] before:to-[#3081ED]">
        <div className="flex min-h-[215px] w-full flex-col justify-between sm:h-auto sm:flex-col md:py-[30px] lg:py-[40px]">
          <div className="w-full justify-between md:hidden lg:flex lg:items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-[22px] w-[179px] sm:mb-[20px] md:hidden lg:block"
            />
            <nav className="flex items-center sm:mb-[20px] xl:mr-[130px]">
              <ul className="flex flex-col font-semibold text-white sm:flex-row lg:text-[14px] lg:leading-[21px] xl:text-[16px] xl:leading-[150%]">
                <li className="mr-[40px] hover:opacity-70 sm:mb-[10px] md:mr-[15px]">
                  <a href="#mission">Наша миссия</a>
                </li>
                <li className="mr-[40px] hover:opacity-70 sm:mb-[10px] md:mr-[15px]">
                  <a href="#community">Сообщество</a>
                </li>
                <li className="mr-[40px] hover:opacity-70 sm:mb-[10px] md:mr-[15px]">
                  <a href="#roadmap">Дорожная карта</a>
                </li>
                <li className="mr-[40px] hover:opacity-70 sm:mb-[10px] md:mr-[15px]">
                  <a href="#nft">NFT</a>
                </li>
                <li className="hover:opacity-70">
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </nav>
            <ul className="flex flex-col sm:mb-[20px] sm:flex-row">
              <li className="hover:opacity-70 sm:mb-[15px] md:mr-[10px] lg:mr-[15px]">
                <a href="https://vk.com/club226488112">
                  <img src={Vk} alt="Vk" className="size-[30px]" />
                </a>
              </li>
              <li className="hover:opacity-70 sm:mb-[15px] md:mr-[10px] lg:mr-[15px]">
                <a href="https://t.me/tailtalkstg">
                  <img src={Slink} alt="Slink" className="size-[30px]" />
                </a>
              </li>
              <li className="hover:opacity-70 sm:mb-[15px] md:mr-[10px] lg:mr-[15px]">
                <a href="https://dzen.ru/tailtalksblog">
                  <img src={Dzen} alt="Dzen" className="size-[30px]" />
                </a>
              </li>
              <li className="hover:opacity-70 sm:mb-[15px] md:mr-[10px] lg:mr-[15px]">
                <a href="https://vc.ru/u/3474601-tail-talks">
                  <img src={Vc} alt="Vc" className="size-[30px]" />
                </a>
              </li>
              <li className="hover:opacity-70">
                <a href="https://t.me/tailtalksrus">
                  <img src={Tg} alt="Tg" className="size-[30px]" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex w-full flex-col justify-between sm:flex-row xl:pl-[330px]">
            <div className="flex w-fit flex-col">
              <span className="mb-[10px] text-[16px] font-medium text-white">
                Свяжитесь с нами:
              </span>
              <span className="text-[16px] font-medium text-white sm:mb-[15px]">
                Email:{" "}
                <a
                  href="mailto:Tailtalks.official@gmail.com"
                  className="text-[14px] font-light"
                >
                  Tailtalks.official@gmail.com
                </a>
              </span>
            </div>
            <a
              href="https://t.me/tailtalkstg"
              target="_blank"
              className="relative z-10 flex h-12 items-center justify-center rounded-2xl bg-[#1F1D2B] p-5 px-12 py-3 text-[18px] font-semibold leading-[150%] text-transparent transition-opacity duration-100 ease-in-out before:absolute before:inset-[-3px] before:z-[-1] before:rounded-2xl before:bg-gradient-to-r before:from-[#9B51E0] before:to-[#3081ED] before:content-[''] after:absolute after:inset-0 after:z-[-1] after:rounded-2xl after:bg-[#1f1d2b] after:content-[''] hover:opacity-70 sm:w-[312px] md:w-[303px] lg:w-[333px]"
              rel="noreferrer"
            >
              <span className="bg-gradient-to-r from-[#9B51E0] to-[#3081ED] bg-clip-text text-transparent">
                Сообщество Telegram
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="xs:before:hidden relative flex w-full justify-between py-[30px] pt-[35px] before:absolute before:left-0 before:top-0 before:h-px before:w-full before:bg-gradient-to-r before:from-[#9B51E0] before:to-[#3081ED]">
        <span className="text-[14px] leading-[150%] text-white">
          © 2024 Tail Talks. All Rights Reserved.
        </span>
        <a
          href="official@tailtalks.world"
          className="text-[14px] font-medium leading-[150%] text-white underline underline-offset-1 hover:opacity-70"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  )
}

export default Footer

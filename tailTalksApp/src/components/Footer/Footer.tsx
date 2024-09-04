import React from "react"
import Logo from "../../assets/logo.svg"
import Vk from "../../assets/social-vk.svg"
import Slink from "../../assets/social-link.svg"
import Dzen from "../../assets/social-dzen.svg"
import Vc from "../../assets/social-vc.svg"
import Tg from "../../assets/social-tg.svg"

const Footer: React.FC = () => {
  return (
    <div className="relative mb-[30px] flex h-[267px] w-full flex-col justify-between before:absolute before:left-0 before:top-0 before:h-px before:w-full before:bg-gradient-to-r before:from-[#9B51E0] before:to-[#3081ED]">
      <div className="flex min-h-[215px] justify-between py-[40px]">
        <div className="flex w-full">
          <img src={Logo} alt="Logo" className="h-[22px] w-[179px]" />
        </div>

        <div className="mr-[40px] flex min-w-[578px] flex-col justify-between">
          <nav>
            <ul className="flex text-[16px] font-semibold leading-[150%] text-white">
              <li className="mr-[40px] hover:opacity-70">
                <a href="#mission">Наша миссия</a>
              </li>
              <li className="mr-[40px] hover:opacity-70">
                <a href="#community">Сообщество</a>
              </li>
              <li className="mr-[40px] hover:opacity-70">
                <a href="#roadmap">Дорожная карта</a>
              </li>
              <li className="mr-[40px] hover:opacity-70">
                <a href="#nft">NFT</a>
              </li>
              <li className="hover:opacity-70">
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>
          <div className="flex w-fit flex-col">
            <span className="text-[16px] font-medium text-white">
              Свяжитесь с нами:
            </span>
            <span className="text-[16px] font-medium text-white">
              Email:{" "}
              <a
                href="mailto:Tailtalks.official@gmail.com"
                className="text-[14px] font-light"
              >
                Tailtalks.official@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className="flex w-fit flex-col items-end justify-between">
          <ul className="flex">
            <li className="mr-[15px] hover:opacity-70">
              <a href="https://vk.com/club226488112">
                <img src={Vk} alt="Vk" className="size-[30px]" />
              </a>
            </li>
            <li className="mr-[15px] hover:opacity-70">
              <a href="https://t.me/tailtalkstg">
                <img src={Slink} alt="Slink" className="size-[30px]" />
              </a>
            </li>
            <li className="mr-[15px] hover:opacity-70">
              <a href="https://dzen.ru/tailtalksblog">
                <img src={Dzen} alt="Dzen" className="size-[30px]" />
              </a>
            </li>
            <li className="mr-[15px] hover:opacity-70">
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
          <a
            href="https://t.me/tailtalkstg"
            target="_blank"
            className="relative z-10 flex h-12 w-[333px] items-center justify-center rounded-2xl bg-[#1F1D2B] p-5 px-12 py-3 text-[18px] font-semibold leading-[150%] text-transparent transition-opacity duration-100 ease-in-out before:absolute before:inset-[-3px] before:z-[-1] before:rounded-2xl before:bg-gradient-to-r before:from-[#9B51E0] before:to-[#3081ED] before:content-[''] after:absolute after:inset-0 after:z-[-1] after:rounded-2xl after:bg-[#1f1d2b] after:content-[''] hover:opacity-70"
            rel="noreferrer"
          >
            <span className="bg-gradient-to-r from-[#9B51E0] to-[#3081ED] bg-clip-text text-transparent">
              Сообщество Telegram
            </span>
          </a>
        </div>
      </div>

      <div className="relative flex h-[267px] w-full justify-between pt-[35px] before:absolute before:left-0 before:top-0 before:h-px before:w-full before:bg-gradient-to-r before:from-[#9B51E0] before:to-[#3081ED]">
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

import React, { useEffect, useState } from "react"
import "./Header.css"
import Logo from "../../assets/logo.svg"
import HeaderNavMenu from "./HeaderNavMenu/HeaderNavMenu"
import Footer from "../Footer/Footer"

const Header: React.FC = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  const toggleBurgerMenu = () => {
    setOpenBurgerMenu(prev => !prev)
  }

  useEffect(() => {
    if (openBurgerMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [openBurgerMenu])

  return (
    <div className="xs:mt-10 xs:mb-7 w-full px-[24px] sm:mb-[78px] sm:px-[40px] xl:mt-12 xl:px-[80px]">
      <header className="relative flex w-full items-center justify-between">
        <img
          src={Logo}
          alt="Logo"
          className={`${openBurgerMenu ? "hidden" : "block"} z-0 h-[22px] sm:mr-12 sm:w-[148px] xl:mr-28 xl:w-[179px]`}
        />

        <div className="xs:hidden z-0 sm:block">
          <HeaderNavMenu />
        </div>

        {openBurgerMenu ? (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black">
            <Footer />
          </div>
        ) : (
          <></>
        )}

        <button
          className="sm:xs:hidden z-20 flex h-[18px] w-[27px] flex-col justify-between"
          onClick={toggleBurgerMenu}
        >
          <span
            className={`${openBurgerMenu ? "translate-y-2 rotate-45" : ""} inline-block h-px w-full border border-white`}
          ></span>
          <span
            className={`${openBurgerMenu ? "hidden" : "inline-block"} w-full border border-white`}
          ></span>
          <span
            className={`${openBurgerMenu ? "-translate-y-2 -rotate-45" : ""} inline-block h-px w-full border border-white`}
          ></span>
        </button>
      </header>
    </div>
  )
}

export default Header

/* eslint-disable tailwindcss/no-custom-classname */
import React from "react"

const Header: React.FC = () => {
  return (
    <div className="flex w-full justify-center pt-12">
      <header className="relative flex items-center">
        <svg
          className="mr-28"
          width="178"
          height="24"
          viewBox="0 0 178 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.144 0.535999V4.92H12.192V23H6.72V4.92H0.768V0.535999H18.144ZM36.3743 19.032H27.9903L26.6463 23H20.9183L29.0463 0.535999H35.3823L43.5103 23H37.7183L36.3743 19.032ZM34.9663 14.808L32.1823 6.584L29.4303 14.808H34.9663ZM52.956 0.535999V23H47.484V0.535999H52.956ZM63.8935 18.776H71.0615V23H58.4215V0.535999H63.8935V18.776ZM91.3315 0.535999V4.92H85.3795V23H79.9075V4.92H73.9555V0.535999H91.3315ZM109.562 19.032H101.178L99.8338 23H94.1058L102.234 0.535999H108.57L116.698 23H110.906L109.562 19.032ZM108.154 14.808L105.37 6.584L102.618 14.808H108.154ZM126.144 18.776H133.312V23H120.672V0.535999H126.144V18.776ZM150.446 23L142.894 13.08В23H137.422В0.535999H142.894В10.392L150.382В0.535999H156.814L148.11 11.544L157.134 23H150.446З"
            fill="url(#paint0_linear_1941_908)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1941_908"
              x1="3.72917"
              y1="4.33928"
              x2="150.299"
              y2="77.4197"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9B51E0" />
              <stop offset="1" stopColor="#3081ED" />
            </linearGradient>
          </defs>
        </svg>
        <nav>
          <ul className="mr-16 flex w-[584px] items-center justify-between">
            <li>
              <button
                className="
                underline-gradient
                hover:underline-gradient 
                text-color 
                relative 
                cursor-pointer 
                text-sm 
                font-bold 
                leading-6
                transition
                duration-300
                ease-in-out"
              >
                НАША МИССИЯ
              </button>
            </li>
            <li>
              <button
                className="
                underline-gradient
                hover:text-gradient 
                hover:underline-gradient 
                relative 
                cursor-pointer 
                text-sm 
                font-bold 
                leading-6 
                text-gray-400
                transition
                duration-300
                ease-in-out"
              >
                СООБЩЕСТВО
              </button>
            </li>
            <li>
              <button
                className="
                underline-gradient
                hover:text-gradient 
                hover:underline-gradient 
                relative 
                cursor-pointer 
                text-sm 
                font-bold 
                leading-6 
                text-gray-400 
                transition
                duration-300
                ease-in-out"
              >
                ДОРОЖНАЯ КАРТА
              </button>
            </li>
            <li>
              <button
                className="
                underline-gradient
                hover:text-gradient 
                hover:underline-gradient 
                relative 
                cursor-pointer 
                text-sm 
                font-bold 
                leading-6 
                text-gray-400 
                transition
                duration-300
                ease-in-out"
              >
                NFT
              </button>
            </li>
            <li>
              <button
                className="
                underline-gradient
                hover:text-gradient 
                hover:underline-gradient 
                relative 
                cursor-pointer 
                text-sm 
                font-bold 
                leading-6 
                text-gray-400 
                transition
                duration-300
                ease-in-out"
              >
                FAQ
              </button>
            </li>
          </ul>
        </nav>
        <button
          className="
            relative 
            mr-16 
            cursor-pointer 
            text-sm 
            font-bold 
            leading-6 
            text-gray-400 
            transition-opacity 
            duration-100 
            ease-in-out 
            hover:opacity-70"
        >
          RU
          <svg
            className="ml-1 inline"
            width="7"
            height="4"
            viewBox="0 0 7 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91895 0H0.918945L3.91895 4L6.91895 0З"
              fill="url(#paint0_linear_1941_913)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1941_913"
                x1="1.04395"
                y1="0.607142"
                x2="7.1269"
                y2="1.1663"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9B51E0" />
                <stop offset="1" stopColor="#3081ED" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button
          className="
            relative 
            z-10 
            flex 
            h-12 
            w-fit 
            items-center 
            justify-center 
            rounded-2xl 
            bg-[#1f1d2b] 
            px-12 
            py-3 
            text-sm 
            font-semibold 
            leading-9 
            text-white 
            transition-opacity 
            duration-100 
            ease-in-out 
            before:absolute 
            before:inset-[-3px] 
            before:z-[-1] 
            before:rounded-2xl 
            before:bg-gradient-to-r 
            before:from-[#9B51E0] 
            before:to-[#3081ED] 
            before:content-[''] 
            after:absolute 
            after:inset-0 
            after:z-[-1] 
            after:rounded-2xl 
            after:bg-[#1f1d2b] 
            after:content-[''] 
            hover:opacity-70"
        >
          Подключить кошелек
        </button>
      </header>
    </div>
  )
}

export default Header

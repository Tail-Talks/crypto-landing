/* eslint-disable tailwindcss/no-custom-classname */
import React from "react"

const Header: React.FC = () => {
  return (
    <div className="mb-[78px] flex w-full pt-12">
      <header className="relative flex w-full items-center justify-between">
        <svg
          className="mr-28"
          width="178"
          height="24"
          viewBox="0 0 178 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.144 0.535999V4.92H12.192V23H6.72V4.92H0.768V0.535999H18.144ZM36.3743 19.032H27.9903L26.6463 23H20.9183L29.0463 0.535999H35.3823L43.5103 23H37.7183L36.3743 19.032ZM34.9663 14.808L32.1823 6.584L29.4303 14.808H34.9663ZM52.956 0.535999V23H47.484V0.535999H52.956ZM63.8935 18.776H71.0615V23H58.4215V0.535999H63.8935V18.776ZM91.3315 0.535999V4.92H85.3795V23H79.9075V4.92H73.9555V0.535999H91.3315ZM109.562 19.032H101.178L99.8338 23H94.1058L102.234 0.535999H108.57L116.698 23H110.906L109.562 19.032ZM108.154 14.808L105.37 6.584L102.618 14.808H108.154ZM126.144 18.776H133.312V23H120.672V0.535999H126.144V18.776ZM150.446 23L142.894 13.08V23H137.422V0.535999H142.894V10.392L150.382 0.535999H156.814L148.11 11.544L157.134 23H150.446ZM169.362 23.224C167.719 23.224 166.247 22.9573 164.946 22.424C163.645 21.8907 162.599 21.1013 161.81 20.056C161.042 19.0107 160.637 17.752 160.594 16.28H166.418C166.503 17.112 166.791 17.752 167.282 18.2C167.773 18.6267 168.413 18.84 169.202 18.84C170.013 18.84 170.653 18.6587 171.122 18.296C171.591 17.912 171.826 17.3893 171.826 16.728C171.826 16.1733 171.634 15.7147 171.25 15.352C170.887 14.9893 170.429 14.6907 169.874 14.456C169.341 14.2213 168.573 13.9547 167.57 13.656C166.119 13.208 164.935 12.76 164.018 12.312C163.101 11.864 162.311 11.2027 161.65 10.328C160.989 9.45333 160.658 8.312 160.658 6.904C160.658 4.81333 161.415 3.18133 162.93 2.008C164.445 0.813333 166.418 0.216 168.85 0.216C171.325 0.216 173.319 0.813333 174.834 2.008C176.349 3.18133 177.159 4.824 177.266 6.936H171.346C171.303 6.21067 171.037 5.64533 170.546 5.24C170.055 4.81333 169.426 4.6 168.658 4.6C167.997 4.6 167.463 4.78133 167.058 5.144C166.653 5.48533 166.45 5.98667 166.45 6.648C166.45 7.37333 166.791 7.93867 167.474 8.344C168.157 8.74933 169.223 9.18667 170.674 9.656C172.125 10.1467 173.298 10.616 174.194 11.064C175.111 11.512 175.901 12.1627 176.562 13.016C177.223 13.8693 177.554 14.968 177.554 16.312C177.554 17.592 177.223 18.7547 176.562 19.8C175.922 20.8453 174.983 21.6773 173.746 22.296C172.509 22.9147 171.047 23.224 169.362 23.224Z"
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
                СООБЩЕСТВО
              </button>
            </li>
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
                ДОРОЖНАЯ КАРТА
              </button>
            </li>
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
                NFT
              </button>
            </li>
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

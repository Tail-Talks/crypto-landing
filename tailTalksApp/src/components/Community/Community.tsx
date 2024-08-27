import React from "react"

const Community: React.FC = () => {
  return (
    <div className="relative mb-[170px] flex flex-col items-center justify-center">
      <div className="relative z-10 mb-[100px] flex w-[1157px] items-center justify-between rounded-[20px] bg-gradient-to-r from-[#3E314F] via-[#3F3977] to-[#3F3977] p-[40px]">
        <div className="flex w-[459px] flex-col">
          <h3 className="mb-[20px] text-[30px] font-semibold leading-[150%] text-white">
            Присоединяйся к&nbsp;нашему сообществу в&nbsp;Телеграм
          </h3>
          <p className="text-[20px] font-light leading-[30px] text-white">
            Не пропусти новости о Tail Talks
          </p>
        </div>
        <div>
          <a
            className="mx-auto flex h-[69px] w-[344px] items-center justify-center rounded-[15px] bg-gradient-to-r from-[#9B51E0] to-[#3081ED] px-[45px] py-[16px] text-[22px] font-semibold leading-[36px] tracking-[-1px] text-white hover:opacity-70"
            href="https://t.me/tailtalksrus"
            target="_blank"
            rel="noreferrer"
          >
            Сообщество в Telegram
          </a>
        </div>
      </div>

      <div className="relative z-10 flex w-[1087px] flex-col items-center justify-center">
        <h3 className="mb-[50px] text-[40px] font-semibold leading-[160%] text-white">
          TailTalks - это не просто социальная сеть, это:
        </h3>
        <ul className="flex flex-wrap items-center justify-between">
          <li className="mb-[50px] flex w-[509px]">
            <div>
              <svg
                className="mr-[20px]"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#4C2356" />
                <path
                  d="M49.4231 20.835C48.573 19.9942 47.3148 19.6809 46.1416 20.0107L18.7846 27.677C17.5468 28.0083 16.6695 28.9596 16.4331 30.1681C16.1917 31.398 17.035 32.9593 18.1368 33.6122L26.6907 38.6785C27.5681 39.1978 28.7004 39.0676 29.4264 38.362L39.2216 28.864C39.7147 28.3694 40.5308 28.3694 41.0239 28.864C41.5169 29.3421 41.5169 30.117 41.0239 30.6116L31.2117 40.1112C30.484 40.8152 30.348 41.9115 30.8836 42.7622L36.1101 51.088C36.7222 52.0772 37.7764 52.6377 38.9326 52.6377C39.0686 52.6377 39.2216 52.6377 39.3576 52.6213C40.6838 52.4564 41.738 51.5826 42.129 50.3461L50.2392 24.0169C50.5963 22.8958 50.2732 21.6758 49.4231 20.835Z"
                  fill="url(#paint0_linear_919_566)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_919_566"
                    x1="17.0998"
                    y1="24.8537"
                    x2="51.712"
                    y2="27.0548"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9B51E0" />
                    <stop offset="1" stopColor="#3081ED" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="mb-[12px] text-[20px] font-semibold leading-[130%] text-white">
                WEB 3.0 сообщество
              </h4>
              <p className="text-[18px] text-white opacity-70">
                Мы&nbsp;используем технологии блокчейн, чтобы дать вам больше
                контроля над своими данными и&nbsp;вознаградить вас
                за&nbsp;участие в&nbsp;развитии платформы.
              </p>
            </div>
          </li>
          <li className="mb-[50px] flex w-[509px]">
            <div>
              <svg
                className="mr-[20px]"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#E9E9E9" />
                <path
                  d="M34.9915 50.8827C35.9106 50.8827 36.3779 50.2688 37.3127 49.0076L47.2818 35.7806C47.7328 35.1666 48 34.552 48 33.8885C48 33.2081 47.7328 32.6104 47.2818 31.9965L37.3127 18.7531C36.3779 17.5083 35.9098 16.8944 34.9915 16.8944C34.0902 16.8944 33.6221 17.5083 32.6873 18.7531L22.7182 31.9965C22.2672 32.6104 22 33.2081 22 33.8885C22 34.5527 22.2672 35.1666 22.7182 35.7806L32.6873 49.0076C33.6221 50.268 34.0902 50.8827 34.9915 50.8827Z"
                  fill="url(#paint0_linear_1289_14408)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1289_14408"
                    x1="22.5417"
                    y1="22.0533"
                    x2="49.0656"
                    y2="23.2967"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9B51E0" />
                    <stop offset="1" stopColor="#3081ED" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="mb-[12px] text-[20px] font-semibold leading-[130%] text-white">
                NFT-токены для ваших питомцев
              </h4>
              <p className="text-[18px] text-white opacity-70">
                Уникальные и&nbsp;неповторимые NFT-токены станут цифровым
                отражением личности вашего любимца.
              </p>
            </div>
          </li>
          <li className="flex w-[509px]">
            <div>
              <svg
                className="mr-[20px]"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#E9E9E9" />
                <path
                  d="M34.9915 50.8827C35.9106 50.8827 36.3779 50.2688 37.3127 49.0076L47.2818 35.7806C47.7328 35.1666 48 34.552 48 33.8885C48 33.2081 47.7328 32.6104 47.2818 31.9965L37.3127 18.7531C36.3779 17.5083 35.9098 16.8944 34.9915 16.8944C34.0902 16.8944 33.6221 17.5083 32.6873 18.7531L22.7182 31.9965C22.2672 32.6104 22 33.2081 22 33.8885C22 34.5527 22.2672 35.1666 22.7182 35.7806L32.6873 49.0076C33.6221 50.268 34.0902 50.8827 34.9915 50.8827Z"
                  fill="url(#paint0_linear_969_240)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_969_240"
                    x1="22.5417"
                    y1="22.0533"
                    x2="49.0656"
                    y2="23.2967"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9B51E0" />
                    <stop offset="1" stopColor="#3081ED" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="mb-[12px] text-[20px] font-semibold leading-[130%] text-white">
                NFT-токены для ваших питомцев
              </h4>
              <p className="text-[18px] text-white opacity-70">
                Уникальные и&nbsp;неповторимые NFT-токены станут цифровым
                отражением личности вашего любимца.
              </p>
            </div>
          </li>
          <li className="flex w-[509px]">
            <div>
              <svg
                className="mr-[20px]"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#4C2356" />
                <path
                  d="M46.2419 37.9789C45.7499 38.4278 45.5238 39.0771 45.6359 39.7139L47.3248 48.5145C47.4673 49.2604 47.1329 50.0153 46.4699 50.4464C45.8202 50.8935 44.9558 50.9472 44.2472 50.5895L35.8332 46.4575C35.5406 46.3108 35.2158 46.2321 34.8833 46.2231H34.3685C34.1899 46.2482 34.0151 46.3018 33.8555 46.3841L25.4396 50.5358C25.0236 50.7325 24.5524 50.8023 24.0908 50.7325C22.9662 50.5322 22.2158 49.5234 22.4 48.4591L24.0908 39.6585C24.2029 39.0163 23.9768 38.3634 23.4848 37.9073L16.6248 31.6467C16.0511 31.1226 15.8516 30.3356 16.1137 29.6255C16.3683 28.9171 17.018 28.4002 17.8026 28.2839L27.2444 26.9942C27.9625 26.9245 28.5932 26.5131 28.9162 25.9049L33.0766 17.8735C33.1754 17.6946 33.3027 17.53 33.4566 17.3905L33.6276 17.2653C33.7168 17.1723 33.8194 17.0954 33.9334 17.0328L34.1405 16.9612L34.4635 16.836H35.2632C35.9776 16.9058 36.6064 17.3082 36.935 17.9092L41.1506 25.9049C41.4545 26.4898 42.0454 26.8959 42.7274 26.9942L52.1691 28.2839C52.967 28.3912 53.6338 28.91 53.8979 29.6255C54.1468 30.3427 53.9321 31.1298 53.347 31.6467L46.2419 37.9789Z"
                  fill="url(#paint0_linear_919_581)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_919_581"
                    x1="16.7917"
                    y1="21.9949"
                    x2="55.461"
                    y2="24.6443"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9B51E0" />
                    <stop offset="1" stopColor="#3081ED" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="mb-[12px] text-[20px] font-semibold leading-[130%] text-white">
                Инновационные функции
              </h4>
              <p className="text-[18px] text-white opacity-70">
                Мы&nbsp;постоянно разрабатываем новые функции, чтобы сделать
                TailTalks еще более интересным и&nbsp;полезным для вас.
              </p>
            </div>
          </li>
        </ul>

        <div className="highlight-circle highlight-circle-pink absolute top-[45px] size-[123px] opacity-50 blur-[100px]"></div>
        <div className="highlight-circle highlight-circle-blue absolute left-[-100px] top-[350px] size-[200px] opacity-60 blur-[100px]"></div>
      </div>
    </div>
  )
}

export default Community

import React from "react"

const Community: React.FC = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center sm:px-[24px] md:px-[40px] lg:mb-[70px] lg:px-[80px] xl:mb-[100px]">
      <div className="relative z-10 flex max-w-[1157px] items-center justify-between rounded-[20px] bg-gradient-to-r from-[#3E314F] via-[#3F3977] to-[#3F3977] p-[40px]">
        <div className="flex max-w-[459px] flex-col">
          <h3 className="mb-[20px] text-2xl font-semibold text-white lg:text-3xl">
            Присоединяйся к&nbsp;нашему сообществу в&nbsp;Телеграм
          </h3>
          <p className="text-xl font-light text-white lg:text-2xl">
            Не пропусти новости о Tail Talks
          </p>
        </div>
        <a
          className="flex h-[69px] items-center justify-center rounded-[15px] bg-gradient-to-r from-[#9B51E0] to-[#3081ED] tracking-[-1px] text-white hover:opacity-70 sm:min-w-[240px] sm:px-4 sm:py-2 lg:min-w-[344px] lg:px-10 lg:py-4"
          href="https://t.me/tailtalksrus"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-center font-semibold md:text-xl lg:text-2xl">
            Сообщество в Telegram
          </span>
        </a>
      </div>
    </div>
  )
}

export default Community

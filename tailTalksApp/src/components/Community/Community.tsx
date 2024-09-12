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
    </div>
  )
}

export default Community

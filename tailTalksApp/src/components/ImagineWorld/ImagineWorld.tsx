import React from "react"

export default function ImagineWorld() {
  return (
    <section id="imagine_world" className="mt-36">
      <div className="flex flex-col font-sans text-white xs:mx-6 lg:mx-10 xl:mx-48">
        <h2 className="flex-wrap text-center text-40 font-medium xs:text-30 lg:text-35">
          Представьте себе мир, где:
        </h2>
        <div>
          <div className="mt-5 rounded-2xl bg-color-nft-base">
            <div className="xs:px-5 xs:py-6 lg:px-11 lg:py-7 xl:px-11 xl:py-6">
              <div className="flex items-center gap-3 border-b border-white pb-2">
                <p className="text-50 font-medium xs:text-30">01</p>
                <p className="text-25 font-medium xs:text-18">
                  Вы общаетесь...
                </p>
              </div>
              <p className="mt-4 text-18 font-normal xs:text-16">
                Вы можете общаться с единомышленниками, делиться забавными
                моментами из жизни своих питомцев и получать поддержку от
                сообщества, которое вас понимает.
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-color-nft-base-reverse xs:mt-5">
            <div className="xs:px-5 xs:py-6 lg:px-11 lg:py-7 xl:px-11 xl:py-6">
              <div className="flex items-center gap-3 border-b border-white pb-2">
                <p className="text-50 font-medium xs:text-30">02</p>
                <p className="text-25 font-medium xs:text-18">
                  Ваш питомец становится...
                </p>
              </div>
              <p className="mt-4 text-18 font-normal xs:text-16">
                Ваш питомец становится звездой, а его уникальная личность
                увековечена в виде NFT-токена.
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-color-nft-base xs:mt-5">
            <div className="xs:px-5 xs:py-6 lg:px-11 lg:py-7 xl:px-11 xl:py-6">
              <div className="flex items-center gap-3 border-b border-white pb-2">
                <p className="text-50 font-medium xs:text-30">03</p>
                <p className="text-25 font-medium xs:text-18">
                  Вы помогаете...
                </p>
              </div>
              <p className="mt-4 text-18 font-normal xs:text-16">
                Вы помогаете бездомным животным обрести дом и заботу, просто
                будучи частью TailTalks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

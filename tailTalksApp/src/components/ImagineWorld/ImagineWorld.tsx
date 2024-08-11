import React from "react"

export default function ImagineWorld() {
  return (
    <section id="imagine_world" className="mt-36">
      <div className="xl:mx-48 lg:mx-10 xs:mx-6 flex flex-col font-sans text-white">
        <h2 className="flex-wrap text-center  text-40 lg:text-35 xs:text-30 font-medium">
          Представьте себе мир, где:
        </h2>
        <div className="">
          <div className="bg-colorNFTBase mt-5 rounded-2xl ">
            <div
              className="xl:px-11 xl:py-6 lg:px-11 lg:py-7
              xs:px-5 xs:py-6"
            >
              <div className="flex gap-3 items-center pb-2 border-b border-white">
                <p className="text-50 xs:text-30 font-medium">01</p>
                <p className="text-25 xs:text-18 font-medium">
                  Вы общаетесь...
                </p>
              </div>
              <p className="mt-4 text-18 xs:text-16 font-normal">
                Вы можете общаться с единомышленниками, делиться забавными
                моментами из жизни своих питомцев и получать поддержку от
                сообщества, которое вас понимает.
              </p>
            </div>
          </div>

          <div className="bg-colorNFTBase-reverse  mt-7 xs:mt-5 rounded-2xl">
            <div
              className="xl:px-11 xl:py-6 lg:px-11 lg:py-7
              xs:px-5 xs:py-6"
            >
              <div className="flex gap-3 items-center pb-2 border-b border-white">
                <p className="text-50 xs:text-30 font-medium">02</p>
                <p className="text-25 xs:text-18 font-medium">
                  Ваш питомец становится...
                </p>
              </div>
              <p className="mt-4 text-18 xs:text-16 font-normal">
                Ваш питомец становится звездой, а его уникальная личность
                увековечена в виде NFT-токена.
              </p>
            </div>
          </div>

          <div className="bg-colorNFTBase mt-7 xs:mt-5 rounded-2xl">
            <div
              className="xl:px-11 xl:py-6 lg:px-11 lg:py-7
              xs:px-5 xs:py-6"
            >
              <div className="flex gap-3 items-center pb-2 border-b border-white">
                <p className="text-50 xs:text-30 font-medium">03</p>
                <p className="text-25 xs:text-18 font-medium">
                  Вы помогаете...
                </p>
              </div>
              <p className="mt-4 text-18 xs:text-16 font-normal">
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

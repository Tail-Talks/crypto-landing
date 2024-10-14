import EmailForm from "../Forms/EmailForm"
import TimeDisplay from "../TimeDisplay/TimeDisplay"

export default function Counter() {
  return (
    <section id="counter" className="mx-auto w-full xs:mt-28 lg:mt-30 xl:mt-42">
      <div className="flex flex-col items-center justify-center rounded-lg font-sans text-white xs:mx-6 lg:mx-30 lg:bg-background-nft-base xl:mx-52">
        <div className="lg:mt-12">
          <svg
            className="xs:size-[70px]"
            width="122"
            height="117"
            viewBox="0 0 122 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100.906 40.8303C100.906 40.8303 91.1415 36.9445 84.6375 37.4526C79.0543 37.8887 73.2154 40.9233 71.1385 42.5193C67.0145 45.6884 65.2543 48.9371 63.1775 52.9904C60.526 58.1656 59.0638 59.726 53.8318 62.4481C50.013 64.4349 48.9863 64.0259 43.7942 65.826C41.1684 66.7364 41.5089 66.6984 38.2561 67.8527C34.4487 69.2038 37.0606 76.4904 39.6405 80.6883C41.9239 84.4038 44.7678 86.6831 49.6783 88.7948C54.2966 90.7808 56.7963 91.4789 61.7929 92.1726C67.2058 92.9241 73.2645 92.1468 75.2921 93.8616C77.1848 95.4623 81.3171 97.8782 83.5079 99.5874C83.7838 99.8026 83.9124 100.148 83.8752 100.496C83.6564 102.543 83.3035 109.403 88.8745 106.458C92.2432 104.677 95.5762 102.409 98.1879 100.194C102.017 96.9482 104.667 93.9308 104.667 93.9308"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M95.4139 48.6553C92.9743 52.0084 91.162 57.843 90.8832 63.7444C90.6044 69.6459 90.8832 71.7917 93.6713 74.8096C95.8398 77.1568 98.0941 78.5402 101.687 79.1687C105.521 79.8393 112.839 79.504 115.627 73.8036C118.472 67.987 119.112 57.3734 117.718 49.9965C116.198 41.949 113.959 36.751 109.568 29.5753C106.963 25.3177 104.101 21.9796 100.653 18.6765C98.29 16.4127 94.9323 14.1897 92.1434 12.4487C87.779 9.72395 84.342 8.03072 79.9867 6.61003C76.4106 5.44351 74.3733 4.88905 70.6666 4.27457C67.9872 3.8304 65.5662 3.5837 63.3578 3.49621M43.1113 6.23652C43.7919 6.01862 46.372 4.95035 49.9951 4.27915C52.8441 3.75138 56.4807 3.56362 59.3085 3.4962M59.3085 3.4962C60.7233 3.46247 61.9581 3.44075 63.3578 3.49621M59.3085 3.4962L63.3578 3.49621"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M29.7537 41.4993C29.7537 42.8283 29.456 44.0067 28.9998 44.835C28.5337 45.6812 27.9708 46.0578 27.4677 46.0578C26.9646 46.0578 26.4017 45.6812 25.9356 44.835C25.4794 44.0067 25.1816 42.8283 25.1816 41.4993C25.1816 40.1704 25.4794 38.992 25.9356 38.1637C26.4017 37.3175 26.9646 36.9409 27.4677 36.9409C27.9708 36.9409 28.5337 37.3175 28.9998 38.1637C29.456 38.992 29.7537 40.1704 29.7537 41.4993Z"
              fill="white"
              stroke="white"
            />
            <path
              d="M52.7449 48.2434C52.7449 49.5723 52.4472 50.7507 51.991 51.5791C51.5249 52.4253 50.962 52.8019 50.4589 52.8019C49.9558 52.8019 49.3929 52.4253 48.9268 51.5791C48.4706 50.7507 48.1729 49.5723 48.1729 48.2434C48.1729 46.9145 48.4706 45.7361 48.9268 44.9077C49.3929 44.0615 49.9558 43.6849 50.4589 43.6849C50.962 43.6849 51.5249 44.0615 51.991 44.9077C52.4472 45.7361 52.7449 46.9145 52.7449 48.2434Z"
              fill="white"
              stroke="white"
            />
            <path
              d="M75.6971 60.175C75.0471 61.3881 74.2262 62.3142 73.4699 62.8465C72.6628 63.4146 72.1945 63.3752 72.0237 63.2894C71.8529 63.2036 71.55 62.8555 71.565 61.8895C71.579 60.9841 71.8882 59.801 72.5382 58.5879C73.1882 57.3748 74.0091 56.4487 74.7655 55.9163C75.5726 55.3482 76.0408 55.3876 76.2116 55.4734C76.3824 55.5593 76.6853 55.9073 76.6704 56.8734C76.6564 57.7788 76.3471 58.9619 75.6971 60.175Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
            <ellipse
              cx="3.49902"
              cy="5.43361"
              rx="3.49902"
              ry="5.43361"
              transform="matrix(0.893556 0.448952 -0.472291 0.881443 40.2549 65.4409)"
              fill="white"
            />
            <path
              d="M75.5096 111.945C75.5096 111.945 70.8912 112.763 68.6258 113.119C60.1742 114.447 49.9436 113.452 40.6856 109.987C38.6746 109.235 36.9349 108.607 35.0166 107.638C28.6083 104.401 24.7144 101.434 19.836 96.262C15.4283 91.589 12.8483 88.6334 9.911 82.9756C6.69671 76.7841 5.10065 71.4591 4.24179 64.5763C3.35983 57.5084 4.41246 49.9862 6.30216 43.107C8.09594 36.577 9.76485 34.3592 11.8933 30.4568C12.9934 28.4398 16.822 23.052 22.3634 17.9692C25.0392 15.5147 33.4053 8.41773 34.4443 12.1156C34.7177 13.0885 34.847 15.2375 35.1014 17.2624C35.2377 18.3481 36.0695 20.7152 36.5087 21.9141C36.666 22.3435 37.0967 22.6049 37.5524 22.5661C39.2547 22.4214 43.4203 22.1803 46.4772 22.9369C49.5115 23.6879 52.6628 25.975 54.3306 27.326C54.9021 27.7889 55.7969 27.5535 56.0455 26.8614C57.3131 23.3331 60.7478 14.8789 64.1404 16.2135C64.7439 16.451 67.2017 22.3961 67.95 24.6178C69.3088 28.6518 69.4789 32.408 69.4789 32.408"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M38.7951 56.1304C37.9831 56.8383 36.718 56.51 36.3803 55.5038L35.9756 54.298C35.6222 53.2452 36.5187 52.1775 37.6295 52.3282L38.2957 52.4185C38.413 52.4344 38.5277 52.464 38.6376 52.5067L39.3418 52.7804C40.3844 53.1856 40.6117 54.5467 39.7607 55.2886L38.7951 56.1304Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center px-22 xs:px-6 lg:px-12">
          <div className="text-center">
            <h3 className="text-center text-30 font-semibold xs:mt-5 lg:mt-7 lg:text-25">
              Отсчет времени до запуска нашей социальной сети{" "}
              <span className="bg-color-nft-base bg-clip-text text-transparent">
                Tail Talks
              </span>{" "}
              начался!
            </h3>
            {/* текст для расширений от 1024 */}
            <p className="hidden text-center lg:mt-4 lg:block lg:text-20">
              Следите за запуском нашей уникальной социальной сети для питомцев,
              где каждый момент с вашим любимцем превращается в ценность. Не
              пропустите эксклюзивную предпродажу NFT и пресейл токенов Tail
              Talks. Будьте в числе первых, кто откроет для себя новые горизонты
              взаимодействия с питомцами!
            </p>
            {/* текст для расширения 360 */}
            <p className="block px-6 text-16 xs:mt-6 lg:hidden">
              Следите за запуском нашей уникальной социальной сети для питомцев.
              Будьте в числе первых, кто откроет для себя новые горизонты
              взаимодействия с питомцами!
            </p>
          </div>
          <div className="mx-6 xs:mt-10">
            <TimeDisplay />
            {/* </div>
          <div className="mx-6"> */}
            <EmailForm />
          </div>
        </div>
      </div>
    </section>
  )
}

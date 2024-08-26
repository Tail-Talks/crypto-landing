import React, { useState } from "react"

export default function EmailForm() {
  const [email, setEmail] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  function validateEmail(email: string): boolean {
    // Регулярное выражение для проверки, что после "@"
    const regex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|mail\.ru|outlook\.com|icloud\.com|yahoo\.com|yandex\.ru|rambler\.ru)$/
    return regex.test(email)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validateEmail(email)) {
      setError("Пожалуйста, введите корректный адрес электронной почты!")
      setIsSubmitted(false)
    } else {
      setError("")
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <div>
      <p className="text-center text-14 xs:px-5 xs:mt-10 lg:mt-12">
        Оставьте свой e-mail для предварительной регистрации
      </p>
      <form
        className="xs:mt-4 lg:mt-5 flex flex-col items-center gap-2.5 xs:gap-5 lg:flex-row"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="someaddress@gmail.com"
          className="py-5 xs:w-full w-[60%] text-black rounded-sm border-black-80 px-3.5"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center flex-1 py-5 font-bold rounded-sm xs:w-full w-[40%] px-9 bg-color-nft-base text-18 xs:text-16"
        >
          {isSubmitted ? (
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8429 22.4875C12.0618 23.2685 10.7954 23.2684 10.0144 22.4873L1.41393 13.8851C0.633014 13.104 0.633079 11.8378 1.41407 11.0568L1.8157 10.6552C2.59667 9.87418 3.86285 9.87409 4.64393 10.655L10.0143 16.0238C10.7954 16.8047 12.0616 16.8046 12.8426 16.0235L27.3515 1.51268C28.1325 0.731547 29.3989 0.731503 30.18 1.51259L30.5857 1.91828C31.3668 2.69936 31.3667 3.96574 30.5856 4.74678L12.8429 22.4875Z"
                fill="white"
              />
            </svg>
          ) : (
            "Регистрация"
          )}
        </button>
      </form>
      {error && (
        <p className="mt-5 text-center text-red-400 xs:px-6 text-14 xs:text-12">
          {error}
        </p>
      )}
      <p className="my-5 text-center text-14 xs:px-6 xs:text-12">
        Нажимая на кнопку «Отправить», вы даете согласие на обработку
        персональных данных
      </p>
    </div>
  )
}

import React, { useState } from "react"
import investment1 from "../../assets/investment1.png"
import investment2 from "../../assets/investment2.png"
import investment3 from "../../assets/investment3.png"
import QRCode from "../QRCode/QRCode"
import "./investment.css"
import { Modal } from "../Modal/Modal"

export default function Investment() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copiedText, setCopiedText] = useState<{ [key: string]: boolean }>({})
  //модальное окно с qr-кодом
  function handleQrCode() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function copyToClipboard(text: string) {
    return navigator.clipboard
      .writeText(text)
      .then(() => true)
      .catch(err => {
        console.error("Ошибка копирования:", err)
        return false
      })
  }

  //функция копирования номера кошелька в буфер обмена
  async function handleCopy(text: string, buttonKey: string) {
    const success = await copyToClipboard(text)
    if (success) {
      setCopiedText(prev => ({
        ...prev,
        [buttonKey]: true,
      }))
      setTimeout(() => {
        setCopiedText(prev => ({
          ...prev,
          [buttonKey]: false,
        }))
      }, 2000)
    }
  }

  return (
    <section id="imagine_world" className="mt-36">
      <div className="xs:mx-6 flex flex-col font-sans text-white lg:mx-10 xl:mx-48">
        <h2 className="text-30 xs:text-20 lg:text-25 flex-wrap text-center font-semibold">
          Хотите помочь нам построить дружелюбное пространство для питомцев?
        </h2>
        <p className="text-16 lg:text-20 mt-5 flex-wrap text-center font-normal">
          Ваша щедрость поможет нам разработать новые функции платформы,
          поддержать благотворительные приюты для животных и сделать Tail Talks
          доступным для большего числа людей
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-4">
          <button className="border-linear mt-11 min-w-[30%]">
            <div className="flex flex-col items-center justify-center">
              <img src={investment1} alt="money icon" />
              <div className="flex flex-col">
                <button
                  className="text-13 lg:text-16 flex gap-3 font-normal"
                  onClick={() =>
                    handleCopy("1й номер кошелька получателя", "one")
                  }
                >
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 9.9325C4 7.10547 4 5.69096 4.879 4.81327C5.757 3.93457 7.172 3.93457 10 3.93457H13C15.828 3.93457 17.243 3.93457 18.121 4.81327C19 5.69096 19 7.10547 19 9.9325V14.9308C19 17.7578 19 19.1723 18.121 20.05C17.243 20.9287 15.828 20.9287 13 20.9287H10C7.172 20.9287 5.757 20.9287 4.879 20.05C4 19.1723 4 17.7578 4 14.9308V9.9325Z"
                      stroke="white"
                    />
                    <path
                      d="M4 17.9297C3.20435 17.9297 2.44129 17.6137 1.87868 17.0513C1.31607 16.4889 1 15.7261 1 14.9307V8.93278C1 5.16309 1 3.27774 2.172 2.10714C3.343 0.935547 5.229 0.935547 9 0.935547H13C13.7956 0.935547 14.5587 1.25151 15.1213 1.81392C15.6839 2.37634 16 3.13914 16 3.93451"
                      stroke="white"
                    />
                  </svg>
                  {copiedText["one"]
                    ? "Скопировано"
                    : "1234567890123456738483774TRC20"}
                </button>

                <button
                  className="text-16 font-semibold"
                  onClick={handleQrCode}
                >
                  QR-код
                </button>
              </div>
            </div>
          </button>

          <button className="border-linear-reverse mt-11 min-w-[30%]">
            <div className="flex flex-col items-center justify-center">
              <img src={investment2} alt="money icon" />
              <div className="flex flex-col">
                <button
                  className="text-13 lg:text-16 flex gap-3 font-normal"
                  onClick={() =>
                    handleCopy("2й номер кошелька получателя", "two")
                  }
                >
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 9.9325C4 7.10547 4 5.69096 4.879 4.81327C5.757 3.93457 7.172 3.93457 10 3.93457H13C15.828 3.93457 17.243 3.93457 18.121 4.81327C19 5.69096 19 7.10547 19 9.9325V14.9308C19 17.7578 19 19.1723 18.121 20.05C17.243 20.9287 15.828 20.9287 13 20.9287H10C7.172 20.9287 5.757 20.9287 4.879 20.05C4 19.1723 4 17.7578 4 14.9308V9.9325Z"
                      stroke="white"
                    />
                    <path
                      d="M4 17.9297C3.20435 17.9297 2.44129 17.6137 1.87868 17.0513C1.31607 16.4889 1 15.7261 1 14.9307V8.93278C1 5.16309 1 3.27774 2.172 2.10714C3.343 0.935547 5.229 0.935547 9 0.935547H13C13.7956 0.935547 14.5587 1.25151 15.1213 1.81392C15.6839 2.37634 16 3.13914 16 3.93451"
                      stroke="white"
                    />
                  </svg>
                  {copiedText["two"]
                    ? "Скопировано"
                    : "1234567890123456738483774TRC20"}
                </button>
                <button onClick={handleQrCode}>QR-код</button>
              </div>
            </div>
          </button>

          <button className="border-linear mt-11 min-w-[30%]">
            <div className="flex flex-col items-center justify-center">
              <img src={investment3} alt="money icon" />
              <div className="flex flex-col">
                <button
                  className="text-13 lg:text-16 flex gap-3 font-normal"
                  onClick={() =>
                    handleCopy("3й номер кошелька получателя", "three")
                  }
                >
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 9.9325C4 7.10547 4 5.69096 4.879 4.81327C5.757 3.93457 7.172 3.93457 10 3.93457H13C15.828 3.93457 17.243 3.93457 18.121 4.81327C19 5.69096 19 7.10547 19 9.9325V14.9308C19 17.7578 19 19.1723 18.121 20.05C17.243 20.9287 15.828 20.9287 13 20.9287H10C7.172 20.9287 5.757 20.9287 4.879 20.05C4 19.1723 4 17.7578 4 14.9308V9.9325Z"
                      stroke="white"
                    />
                    <path
                      d="M4 17.9297C3.20435 17.9297 2.44129 17.6137 1.87868 17.0513C1.31607 16.4889 1 15.7261 1 14.9307V8.93278C1 5.16309 1 3.27774 2.172 2.10714C3.343 0.935547 5.229 0.935547 9 0.935547H13C13.7956 0.935547 14.5587 1.25151 15.1213 1.81392C15.6839 2.37634 16 3.13914 16 3.93451"
                      stroke="white"
                    />
                  </svg>
                  {copiedText["three"]
                    ? "Скопировано"
                    : "1234567890123456738483774TRC20"}
                </button>
                <button onClick={handleQrCode}>QR-код</button>
              </div>
            </div>
          </button>
        </div>
      </div>
      {isModalOpen && <Modal onClick={closeModal} child={<QRCode />} />}
    </section>
  )
}

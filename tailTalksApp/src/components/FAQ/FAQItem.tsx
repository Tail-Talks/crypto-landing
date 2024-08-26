import React from "react"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <div className="p-[1px] rounded-sm bg-gradient-to-r from-[#564e5d] to-[#3081ED] mb-4 lg:mx-34 xs:mx-6 xl:mx-64">
      <div className="bg-[#1f1d2b] rounded-sm">
        <button
          type="button"
          className="w-full lg:px-6 xs:px-2 lg:pt-6 xs:pt-5"
          aria-expanded={isOpen}
          onClick={onToggle}
        >
          {isOpen ? (
            <div className="flex items-center justify-between">
              <span className="w-[80%] text-left text-transparent lg:font-semibold xs:font-medium xs:text-15 lg:text-18 bg-color-nft-base bg-clip-text">
                {question}
              </span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66699 16H25.3337"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : (
            <div className="flex items-center justify-between lg:pb-6 xs:pb-5">
              <span className="w-[80%] text-left lg:font-semibold xs:font-medium xs:text-15 lg:text-18">
                {question}
              </span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </button>
        {isOpen && (
          <div className="lg:pt-6 lg:px-6 xs:px-2 xs:pb-5 xs:pt-2">
            <p className="font-normal xs:text-13 lg:text-16">{answer}</p>
          </div>
        )}
      </div>
    </div>
  )
}

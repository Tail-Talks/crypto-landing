import { useState } from "react"
import { faqs } from "../../data/faq"
import FAQItem from "./FAQItem"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="w-full font-sans text-white xs:mt-28 lg:mt-30 xl:mt-28"
    >
      <div className="text-center xs:mx-6 lg:mx-34">
        <h2 className="font-medium text-transparent uppercase lg:text-20 xl:text-30 bg-color-nft-base bg-clip-text">
          FAQ
        </h2>
        <h3 className="font-semibold lg:mt-0 xs:text-25 xl:text-40 lg:text-30 xs:mt-4">
          Часто задаваемые вопросы
        </h3>
      </div>
      <div className="xs:mt-4 lg:mt-5 xl:mt-10">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  )
}

import React, { useState, useRef, useEffect } from "react"
import { Element } from "react-scroll"
import { roadmapData } from "../../data/raodmap"

const RoadMap = () => {
  const [selectedItem, setSelectedItem] = useState<number>(1)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  // функция когда пользователь кликает на элемент, чтобы прокрутить к нему
  const handleScrollTo = (index: number) => {
    setSelectedItem(roadmapData[index].id)
    const container = containerRef.current
    const targetElement = document.getElementById(`element-${index}`)

    if (container && targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      })
    }
  }
  // функция когда пользователь нажимает мышь на контейнере дорожной карты
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current
    if (container) {
      isDragging.current = true
      startX.current = e.pageX - container.offsetLeft
      scrollLeft.current = container.scrollLeft
    }
  }
  // функция когда пользователь перемещает мышь с зажатой кнопкой
  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current
    if (!isDragging.current || !container) return
    e.preventDefault()
    const x = e.pageX - container.offsetLeft
    const step = (x - startX.current) * 2
    container.scrollLeft = scrollLeft.current - step
  }
  // функция когда пользователь отпускает мышь или покидает контейнер
  const handleMouseUpOrLeave = () => {
    isDragging.current = false
  }
  // функция когда происходит прокрутка контейнера
  const handleScroll = () => {
    const container = containerRef.current
    if (!container) return

    const scrollLeft = container.scrollLeft
    const quarterWidth = container.scrollWidth / roadmapData.length
    const currentVisibleIndex = Math.round(scrollLeft / quarterWidth)

    if (selectedItem !== roadmapData[currentVisibleIndex].id) {
      setSelectedItem(roadmapData[currentVisibleIndex].id)
    }
  }
  // функция для прокрутки с помощью клавиатуры
  const handleKeyDown = (e: KeyboardEvent) => {
    const container = containerRef.current
    if (!container) return

    const scrollAmount = 50 // Установите значение прокрутки при нажатии кнопки
    if (e.key === "ArrowRight") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    } else if (e.key === "ArrowLeft") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }
  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      container.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
        container.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [selectedItem])

  return (
    <section id="roadmap" className="lg:mt-36 xs:mt-28">
      <div className="flex flex-col font-sans text-white xl:mx-48 lg:mx-10 xs:mx-6">
        <h2 className="mb-3 font-semibold text-center xs:mb-4 text-40 lg:text-30 xs:text-25 ">
          Дорожная карта Tail Talks 2024!
        </h2>
        <span className="mb-10 font-light text-center lg:mb-7 xs:mb-5 text-20 xs:text-16">
          Отслеживайте развитие нашей социальной сети для животных
        </span>

        <div
          ref={containerRef}
          role="listbox"
          tabIndex={0}
          className="relative w-full mx-auto overflow-x-hidden scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
        >
          <div className="relative w-max">
            {/* скролл */}
            <div className="relative lg:mx-52 xs:mx-36">
              {/* основной цвет */}
              <div className="absolute w-full top-3.5 h-[2px] bg-white"></div>
              {/* выделение */}
              <div
                className="absolute top-3.5 h-[2px] bg-color-nft-base transition-all duration-300"
                style={{
                  width:
                    selectedItem === 1 || selectedItem === roadmapData.length
                      ? `${100 / (roadmapData.length - 1) / 2}%`
                      : `${100 / (roadmapData.length - 1)}%`,
                  left:
                    selectedItem === 1
                      ? "0%"
                      : selectedItem === roadmapData.length
                        ? `${100 - 100 / (roadmapData.length - 1) / 2}%`
                        : `${(selectedItem - 1) * (100 / (roadmapData.length - 1)) - 100 / (roadmapData.length - 1) / 2}%`,
                }}
              ></div>
            </div>

            {/* Контрольные точки */}
            <div className="flex lg:gap-12 xs:gap-5 ">
              {roadmapData.map((quarter, index) => (
                <button
                  key={quarter.id}
                  className="z-10 flex flex-col items-center gap-5 rounded-sm"
                  onClick={() => handleScrollTo(index)}
                >
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <circle
                      cx="13"
                      cy="13"
                      r={selectedItem === quarter.id ? "12.5" : "13"}
                      fill={
                        selectedItem === quarter.id
                          ? "url(#paint0_linear_911_300)"
                          : "white"
                      }
                      stroke={
                        selectedItem === quarter.id
                          ? "url(#paint1_linear_911_300)"
                          : "none"
                      }
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_911_300"
                        x1="0.5"
                        y1="3.9"
                        x2="27"
                        y2="5.5"
                      >
                        <stop stopColor="#9B51E0" />
                        <stop offset="1" stopColor="#3081ED" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_911_300"
                        x1="0.5"
                        y1="3.9"
                        x2="27"
                        y2="5.5"
                      >
                        <stop stopColor="#9B51E0" />
                        <stop offset="1" stopColor="#3081ED" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Element
                    name={quarter.id.toString()}
                    className="lg:w-64 xs:w-62"
                  >
                    <h3 className="font-semibold lg:mb-9 xs:mb-5 text-20">
                      {quarter.title}
                    </h3>
                    <div className="border-2 rounded-sm ">
                      {quarter.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="lg:my-10 xs:my-7 lg:mx-10 xs:mx-5"
                        >
                          <h4 className="mb-3 font-semibold text-left text-18 ">
                            {item.title}
                          </h4>
                          <ul className="mt-3 text-left list-disc">
                            {item.tasks.map((task, taskIdx) => (
                              <li
                                className="mx-5 font-light text-16"
                                key={taskIdx}
                              >
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Element>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap

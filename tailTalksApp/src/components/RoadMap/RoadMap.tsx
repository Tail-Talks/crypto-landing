import React, { useState, useRef, useEffect, useCallback } from "react"
import { Element, Link, Events, scrollSpy, scroller } from "react-scroll"
import { roadmapData } from "../../data/raodmap"

const RoadMap = () => {
  const [selectedItem, setSelectedItem] = useState<number>(1)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element)
    })

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element)
    })

    scrollSpy.update()

    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
    }
  }, [])

  const scrollToNext = () => {
    const currentIndex = roadmapData.findIndex(item => item.id === selectedItem)
    const nextIndex = (currentIndex + 1) % roadmapData.length

    // скролл к сл.эелементу - scroller из react-scroll
    scroller.scrollTo(roadmapData[nextIndex].id.toString(), {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: 50,
    })

    setSelectedItem(roadmapData[nextIndex].id)
  }

  const handleSetActive = (to: string) => {
    console.log(to)
    const itemId = parseInt(to, 10)
    if (itemId !== selectedItem) {
      setSelectedItem(itemId)
    }
  }
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
  // const handleScroll = () => {
  //   const container = containerRef.current
  //   if (!container) return

  //   const scrollLeft = container.scrollLeft
  //   const quarterWidth = container.scrollWidth / roadmapData.length
  //   const currentVisibleIndex = Math.round(scrollLeft / quarterWidth)

  //   if (selectedItem !== roadmapData[currentVisibleIndex].id) {
  //     setSelectedItem(roadmapData[currentVisibleIndex].id)
  //   }
  // }

  const handleKeyDown = (e: KeyboardEvent) => {
    const container = containerRef.current
    if (!container) return

    const scrollAmount = 50
    if (e.key === "ArrowRight") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    } else if (e.key === "ArrowLeft") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  // функция когда происходит прокрутка контейнера
  const handleScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const scrollLeft = container.scrollLeft
    const quarterWidth = container.scrollWidth / roadmapData.length
    const currentVisibleIndex = Math.round(scrollLeft / quarterWidth)
    if (selectedItem !== roadmapData[currentVisibleIndex].id) {
      setSelectedItem(roadmapData[currentVisibleIndex].id)
    }
  }, [selectedItem])
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
  }, [handleScroll, selectedItem])

  return (
    <section id="roadmap" className="xs:mt-28 lg:mt-36">
      <div className="flex flex-col font-sans text-white xs:mx-6 lg:mx-10 xl:mx-48">
        <h2 className="mb-3 text-center text-40 font-semibold xs:mb-4 xs:text-25 lg:text-30">
          Дорожная карта Tail Talks 2024!
        </h2>
        <span className="mb-10 text-center text-20 font-light xs:mb-5 xs:text-16 lg:mb-7">
          Отслеживайте развитие нашей социальной сети для животных
        </span>

        <div
          ref={containerRef}
          role="listbox"
          tabIndex={0}
          className="relative mx-auto w-full overflow-x-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
        >
          <div className="relative w-max">
            {/* скролл */}
            <div className="relative xs:mx-36 lg:mx-52">
              {/* основной цвет */}
              <div className="absolute top-3.5 h-[2px] w-full bg-white"></div>
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
            <div className="flex xs:gap-5 lg:gap-12">
              {roadmapData.map((quarter, index) => (
                <Link
                  key={quarter.id}
                  to={quarter.id.toString()}
                  spy={true}
                  smooth={true}
                  offset={-180}
                  duration={500}
                  activeClass="active"
                  onSetActive={handleSetActive}
                  className="z-10 flex cursor-pointer flex-col items-center gap-5 rounded-sm"
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
                    onClick={scrollToNext}
                    name={quarter.id.toString()}
                    className="flex flex-col items-center xs:w-62 lg:w-64"
                  >
                    <h3 className="text-20 font-semibold xs:mb-5 lg:mb-9">
                      {quarter.title}
                    </h3>
                    <div className="rounded-sm border-2">
                      {quarter.items.map((item, idx) => (
                        <div key={idx} className="xs:mx-5 xs:my-7 lg:m-10">
                          <h4 className="mb-3 text-left text-18 font-semibold">
                            {item.title}
                          </h4>
                          <ul className="mt-3 list-disc text-left">
                            {item.tasks.map((task, taskIdx) => (
                              <li
                                className="mx-5 text-16 font-light"
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap

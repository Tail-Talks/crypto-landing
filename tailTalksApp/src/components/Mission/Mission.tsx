import React from "react"
import "./Mission.css"
import Carousel from "./Carousel/Carousel"

const Mission: React.FC = () => {
  return (
    <div className="mb-[120px] w-full px-[24px] sm:px-[40px] lg:mt-[120px] lg:h-[515px] xl:mt-[170px] xl:h-[617px] xl:px-[80px]">
      <Carousel />
    </div>
  )
}

export default Mission

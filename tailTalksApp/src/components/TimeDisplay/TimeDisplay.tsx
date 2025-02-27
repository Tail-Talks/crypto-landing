import React, { useEffect, useState } from "react"

type TimeLeftProps = {
  days: number
  hours: number
  minutes: number
  seconds: number
}
//отражение боковых границ и правильных окончаний при изменении цифры
type TimeUnitProps = {
  value: number
  singular: string
  few: string
  many: string
  showBorderLg?: boolean
  showBorderXs?: boolean
}

function calculateTimeLeft(): TimeLeftProps {
  const finalDate = new Date("2025-01-01T00:00:00")
  const now = new Date()
  const difference = finalDate.getTime() - now.getTime()

  return difference > 0
    ? {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    : { days: 0, hours: 0, minutes: 0, seconds: 0 }
}

//отражение правильных окончаний при изменении цифры
function timeFormat(
  value: number,
  singular: string,
  few: string,
  many: string,
): string {
  if (value % 10 === 1 && value % 100 !== 11) return singular
  if (
    value % 10 >= 2 &&
    value % 10 <= 4 &&
    !(value % 100 >= 12 && value % 100 <= 14)
  )
    return few
  return many
}

export default function TimeDisplay() {
  const [timeLeft, setTimeLeft] = useState<TimeLeftProps>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function TimeUnit({
    value,
    singular,
    few,
    many,
    showBorderLg = false,
    showBorderXs = false,
  }: TimeUnitProps) {
    return (
      <div
        className={`flex flex-col items-center justify-center px-10 xs:px-5 ${
          showBorderLg ? "border-white lg:border-r" : ""
        } ${showBorderXs ? "border-white xs:border-r" : ""} xs:w-28 lg:w-42`}
      >
        <span className="text-60 font-semibold xl:text-70">{value}</span>
        <span className="text-16 font-light">
          {timeFormat(value, singular, few, many)}
        </span>
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <TimeUnit
        value={timeLeft.days}
        singular="день"
        few="дня"
        many="дней"
        showBorderLg
        showBorderXs
      />
      <TimeUnit
        value={timeLeft.hours}
        singular="час"
        few="часа"
        many="часов"
        showBorderLg
        showBorderXs
      />
      <TimeUnit
        value={timeLeft.minutes}
        singular="минута"
        few="минуты"
        many="минут"
        showBorderLg
      />
      <div className="xs:hidden lg:block">
        <TimeUnit
          value={timeLeft.seconds}
          singular="секунда"
          few="секунды"
          many="секунд"
        />
      </div>
    </div>
  )
}

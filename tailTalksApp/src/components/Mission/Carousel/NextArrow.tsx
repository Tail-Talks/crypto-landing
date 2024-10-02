import "../Mission.css"

const NextArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="circle-gradient-border flex size-[43px] items-center justify-center rounded-full border hover:opacity-75"
    >
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.85246 14.9838C0.530124 14.6816 0.513804 14.1754 0.81598 13.853L6.30304 8.00019L0.815979 2.14739C0.513803 1.82499 0.530123 1.31875 0.852459 1.01651C1.1748 0.714433 1.68107 0.730753 1.98324 1.05299L7.98329 7.45304C8.27177 7.76077 8.27177 8.23962 7.98329 8.54734L1.98324 14.9473C1.68107 15.2697 1.1748 15.286 0.85246 14.9838Z"
          fill="white"
        />
      </svg>
    </button>
  )
}

export default NextArrow

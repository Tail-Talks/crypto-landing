import "../Mission.css"

const PrevArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="circle-gradient-border mr-[10px] flex size-[43px] items-center justify-center rounded-full border hover:opacity-75"
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
          d="M8.14754 1.01618C8.46988 1.31837 8.4862 1.82464 8.18402 2.14696L2.69696 7.99981L8.18402 13.8526C8.4862 14.175 8.46988 14.6812 8.14754 14.9835C7.8252 15.2856 7.31893 15.2692 7.01676 14.947L1.01671 8.54696C0.728228 8.23923 0.728228 7.76038 1.01671 7.45266L7.01676 1.05266C7.31893 0.730319 7.8252 0.713999 8.14754 1.01618Z"
          fill="white"
        />
      </svg>
    </button>
  )
}

export default PrevArrow

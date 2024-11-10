import React, { ReactNode } from "react"

interface ModalProps {
  child: ReactNode
  onClick: () => void
}

export const Modal: React.FC<ModalProps> = ({ child, onClick }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)]">
      <div className="relative rounded-md bg-white p-20">
        <button className="absolute right-7 top-4 text-black" onClick={onClick}>
          X
        </button>
        {child}
      </div>
    </div>
  )
}

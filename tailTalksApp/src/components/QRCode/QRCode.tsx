import React from "react"
import { QRCodeSVG } from "qrcode.react"

export default function QRCode() {
  return (
    <div>
      <QRCodeSVG value="https://t.me/tailtalksrus" size={200} />
    </div>
  )
}

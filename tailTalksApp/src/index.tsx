import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Mission from "./components/Mission/Mission"
import Community from "./components/Community/Community"
import Philosophy from "./components/Philosophy/Philosophy"

const rootElement = document.getElementById("root")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <>
      <Header />
      <Main />
      <Mission />
      <Community />
      <Philosophy />
    </>,
  )
} else {
  console.error("Root element not found")
}

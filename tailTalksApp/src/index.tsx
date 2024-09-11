import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Mission from "./components/Mission/Mission"
import Community from "./components/Community/Community"
import Philosophy from "./components/Philosophy/Philosophy"
import ImagineWorld from "./components/ImagineWorld/ImagineWorld"
import DescTailTalks from "./components/DescTailTalks/DesTailTalks"
import Counter from "./components/Counter/Counter"
import FAQ from "./components/FAQ/FAQ"
import RoadMap from "./components/RoadMap/RoadMap"

const rootElement = document.getElementById("root")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <>
      <Header />
      <Main />
      <ImagineWorld />
      <Mission />
      <Community />
      <DescTailTalks />
      <Counter />
      <Philosophy />
      <RoadMap />
      <FAQ />
    </>,
  )
} else {
  console.error("Root element not found")
}

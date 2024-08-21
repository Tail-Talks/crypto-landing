import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./Header/Header"
import ImagineWorld from "./components/ImagineWorld/ImagineWorld"
import DescTailTalks from "./components/DescTailTalks/DesTailTalks"
import Counter from "./components/Counter/Counter"

const rootElement = document.getElementById("root")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Header />
      <ImagineWorld />
      <DescTailTalks />
      <Counter />
    </React.StrictMode>,
  )
} else {
  console.error("Root element not found")
}

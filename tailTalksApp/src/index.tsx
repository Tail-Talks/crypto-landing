import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./Header/Header"
import ImagineWorld from "./components/ImagineWorld/ImagineWorld"

const rootElement = document.getElementById("root")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Header />
      <ImagineWorld />
    </React.StrictMode>,
  )
} else {
  console.error("Root element not found")
}

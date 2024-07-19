import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./Header/Header"

const rootElement = document.getElementById("root")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>,
  )
} else {
  console.error("Root element not found")
}

import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Articles from "./components/Articles"
import Authors from "./components/Authors"
import Errors from "./components/Errors"
import WeatherPage from "./components/WeatherPage"
import "./App.css"
import Footer from "./components/Footer"

const routes = (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/Authors" element={<Authors />} />
      <Route path="/Weather" element={<WeatherPage />} />
      <Route path="*" element={<Errors />} />
    </Routes>
    <Footer />
  </BrowserRouter>

)

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App

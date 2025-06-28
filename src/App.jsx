import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Home from "./components/Home"
import Cards from "./components/Cards"
import Benefits from "./components/Benefits"
import AboutSpoken from "./components/AboutSpoken"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import CardsAulas from "./pages/CardsAulas"
import Video from "./components/Video"

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Home />
              <Benefits />
              <AboutSpoken />
              <Video />
              <Cards />
              <AboutMe />
              <Footer />
            </>
          } 
        />
        <Route path="/aula/:id" element={<CardsAulas />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

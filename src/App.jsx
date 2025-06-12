import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Cards from "./components/Cards"
import Benefits from "./components/Benefits"
import AboutSpoken from "./components/AboutSpoken"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import CardsAulas from "./pages/CardsAulas"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Benefits />
              <AboutSpoken />
              <Cards />
              <AboutMe />
              <Footer />
            </>
          }
        />

        <Route path="/aula/:id" element={ <CardsAulas /> } />

      </Routes>
    </BrowserRouter>
  )
}



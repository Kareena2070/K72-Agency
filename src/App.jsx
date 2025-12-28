import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import Agency from "./pages/Agency.jsx"
import Stairs from "./components/loading/Stairs.jsx"
import Navigation from "./components/Navigation/Navigation.jsx"
import FullScreenNav from "./components/Navigation/fullScreenNav.jsx"
import { useState } from "react"



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    {isMenuOpen && <FullScreenNav onClose={() => setIsMenuOpen(false)} />}
      <Navigation onMenuOpen={() => setIsMenuOpen(true)} />
    <Navigation />
    <Stairs />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/agency" element={<Agency/>} />
    </Routes>
     
    </>
  )
}

export default App

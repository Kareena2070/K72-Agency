import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import Agency from "./pages/Agency.jsx"


function App() {


  return (
    <>




    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/agency" element={<Agency/>} />
    </Routes>
     
    </>
  )
}

export default App

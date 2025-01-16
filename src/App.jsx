import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Projects from "./Pages/Projects/Projects"
import NavBar from "./Navbar/NavBar";
const App = () => {
  return (
    <>
      <NavBar/>

      <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Projects" element={<Projects/>} />
          </Routes>

      </main>
    </>
  )
}

export default App

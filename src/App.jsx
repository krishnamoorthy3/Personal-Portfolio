import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Projects from "./Pages/Projects/Projects"
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer"
import StickyNav from "./StickyNav/StickyNav"





import "./App.css"
const App = () => {
  

  return (
    <>
      <NavBar/>

      <main>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/projects" element={<Projects/>} />
          </Routes>
      </main>
      <Footer/>
      <StickyNav/>
    </>
  )
}

export default App

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Projects from "./Pages/Projects/Projects"
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer"
import StickyNav from "./StickyNav/StickyNav"

//image for projectdeatil
import interiorimg from "./assets/images/interior-p-thumb.png"
import prothumb1 from "./assets/images/project1.png"
import prothumb2 from "./assets/images/project-2.png"


import "./App.css"
const App = () => {
  const projectDetail=[
    {
      id:1,
      title:"Innovat",
      discription:"Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.",
      usedtech:["react","react","react"],
      giturl:"https://github.com/krishnamoorthy3/Interior-Design-Website",
      liveurl:"https://interior-design-k.netlify.app/",
      imgsrc:interiorimg,
      prothumb:prothumb1,
      colt:"col-md-5",
    },
    {
      id:2,
      title:"Innovat2",
      discription:"Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.",
      usedtech:["react","react","react"],
      giturl:"https://github.com/krishnamoorthy3/Interior-Design-Website",
      liveurl:"https://interior-design-k.netlify.app/",
      imgsrc:interiorimg,
      prothumb:prothumb2,
      colt:"col-md-7",
    },
    {
      id:3,
      title:"Innovat3",
      discription:"Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.",
      usedtech:["react","react","react"],
      giturl:"https://github.com/krishnamoorthy3/Interior-Design-Website",
      liveurl:"https://interior-design-k.netlify.app/",
      imgsrc:interiorimg,
      prothumb:prothumb1,
      colt:"col-md-4",
    },
    {
      id:4,
      title:"Innovat4",
      discription:"Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.",
      usedtech:["react","react","react"],
      giturl:"https://github.com/krishnamoorthy3/Interior-Design-Website",
      liveurl:"https://interior-design-k.netlify.app/",
      imgsrc:interiorimg,
      prothumb:prothumb1,
      colt:"col-md-4",
    },
    {
      id:5,
      title:"Innovat5",
      discription:"Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.",
      usedtech:["react","react","react"],
      giturl:"https://github.com/krishnamoorthy3/Interior-Design-Website",
      liveurl:"https://interior-design-k.netlify.app/",
      imgsrc:interiorimg,
      prothumb:prothumb1,
      colt:"col-md-4",
    },
  ]

  return (
    <>
      <NavBar/>

      <main>
          <Routes>
            <Route path="/" element={<Home projectDetail={projectDetail}/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Projects" element={<Projects projectDetail={projectDetail} />} />
          </Routes>
      </main>
      <Footer/>
      <StickyNav/>
    </>
  )
}

export default App

// import images 
import Socialmedia from "../assets/images/social-media.png"
import close from "../assets/images/close.png"
import linkedin from "../assets/images/linkedin.png"
import github from "../assets/images/github.png"
import mail from "../assets/images/mail.png"
import project from "../assets/images/project.png"
// import from react
import { useState } from "react"

// import Css
import "./Stickynav.css"
import { Link } from "react-router-dom"

const StickyNav = () => {
  const [showsocial,setSohowsocial]=useState(false)
  // const [position,setPosition]=useState({x:10,y:10})
  return (
    <>
      <div className="sticky-f-wrap">
            <div className="sticky-wrapper">
                <div className="center-wrap">
                  {!showsocial?
                    <button className="sticky-btn" onClick={()=>setSohowsocial(true)} ><img src={Socialmedia} width="40px"/></button>:
                    <button className="sticky-btn" onClick={()=>setSohowsocial(false)}><img src={close} width="40px"/></button>
                  }
                </div>
                {showsocial && <div>
                    <div className="sticky-nav-item sticky-nav-item-1">
                      <Link to="https://www.linkedin.com/in/krishna-moorthy-m-b089142a4/" target="_blank"> <img src={linkedin} width="20px"/></Link>
                    </div>
                    <div className="sticky-nav-item sticky-nav-item-2">
                        <Link to="https://github.com/krishnamoorthy3" target="_blank"><img src={github} width="20px"/></Link>
                    </div> 
                    <div className="sticky-nav-item sticky-nav-item-3">
                        <Link to="mailto:krishnamoorthym3009@gmail.com" target="_blank"><img src={mail} width="20px"/></Link>
                    </div>
                    <div className="sticky-nav-item sticky-nav-item-4">
                        <Link to="/Projects"><img src={project} width="20px"/></Link>
                    </div>
                </div>}
            </div>
        </div>
    </>
  )
}

export default StickyNav

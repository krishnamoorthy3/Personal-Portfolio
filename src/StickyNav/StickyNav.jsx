// import images 
import Socialmedia from "../assets/images/social-media.png"
import close from "../assets/images/close.png"
import linkedin from "../assets/images/linkedin.png"
import github from "../assets/images/github.png"
import whatsapp from "../assets/images/whatsapp-c.png"
import twitter from "../assets/images/twitter.png"
// import from react
import { useState } from "react"

// import Css
import "./Stickynav.css"

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
                      <a href="#"> <img src={linkedin} width="20px"/></a>
                    </div>
                    <div className="sticky-nav-item sticky-nav-item-2">
                        <a href="#"><img src={github} width="20px"/></a>
                    </div> 
                    <div className="sticky-nav-item sticky-nav-item-3">
                        <a href="#"><img src={whatsapp} width="20px"/></a>
                    </div>
                    <div className="sticky-nav-item sticky-nav-item-4">
                        <a href="#"><img src={twitter} width="20px"/></a>
                    </div>
                </div>}
            </div>
        </div>
    </>
  )
}

export default StickyNav

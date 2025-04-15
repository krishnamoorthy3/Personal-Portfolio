import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/logo.png"
import "./Navbar.css"
import { useEffect } from "react"
import { useState } from "react"
import { ImCross } from "react-icons/im";
const NavBar = () => {
    const [mobileWidth, setMobileWidth] = useState(true);
    const [scrollHeight,setScrollHeight]=useState(false);
    useEffect(() => {
        const handleMobToggle = () => {
            setMobileWidth(window.innerWidth >= 768);
        };
        // Execute on mount
        handleMobToggle();

        const handelScroll=()=>{
            setScrollHeight(window.scrollY >=100 );
            
        }
        handelScroll()
        // Add resize event listener
        window.addEventListener("resize", handleMobToggle);
        window.addEventListener("scroll",handelScroll)

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("resize", handleMobToggle);
        };
    }, []);
    const handelmobClose=()=>{
        if(window.innerWidth < 768){
            setMobileWidth(false)
        }
        
    }
    return <>
        <div>
            <nav className={`nav-wrapper ${scrollHeight && "nav-wrap-bg-f"}`}>
                <div className="container-fluid">
                    <div className="nav-inner">
                        <div className="nav-logo-wrap">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                        {!mobileWidth&&<div className="nav-btn-mob">
                            <button onClick={()=>setMobileWidth(true)}>
                                <span></span>
                                <span></span>
                            </button>
                        </div>}
                        <ul className={`nav-link-wrapper ${mobileWidth?"mob-tra-ani":""}`}>
                            <li className="nav-item nav-mob-close">
                                <Link to="/" className="nav-link">
                                    <img src={logo} alt="logo"/>
                                </Link>
                                <button className="nav-close-btn" onClick={()=>setMobileWidth(false)}>
                                    <ImCross/>
                                </button> 
                            </li>
                            <li className="nav-item"><NavLink to="/" onClick={handelmobClose} className="nav-link">Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/About" onClick={handelmobClose} className="nav-link">About</NavLink></li>
                            <li className="nav-item"><NavLink to="/Projects"onClick={handelmobClose} className="nav-link">Projects</NavLink></li>
                            <li className="nav-item"><NavLink to="/Contact" onClick={handelmobClose} className="nav-link">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
}

export default NavBar
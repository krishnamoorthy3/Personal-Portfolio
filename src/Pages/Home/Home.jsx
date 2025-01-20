import { MdOutlineArrowOutward } from "react-icons/md";
import bannerbg from "../../assets/images/hero.png"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import Aboutfirstsec from "../About/Aboutfirstsec.jsx"
import Skills from "../About/Skills.jsx"

import "./Home.css"

import PropTypes from "prop-types"; 
import { Link } from "react-router-dom";

const Home = ({projectDetail}) => {
    const projectitem=projectDetail.slice(0,2)
    
    return (
        <>
            <section className="sec-1-wrapper">
                <div className="container">
                    <div>
                        <p className="home-b-ht"><span></span> Hello, I’m </p>
                        <h1 className="home-banner-title">Mark</h1>
                        <h1 className="home-banner-title">Henry</h1>
                        <p className="home-banner-p">Product Designer | Based in Germany</p>
                        <div className="home-banner-btn-wrap">
                            <button className="btn-primary">Let&apos;s Talk <MdOutlineArrowOutward/></button>
                            <button className="btn-secoundary">My Work <MdOutlineArrowOutward/></button>
                        </div>
                        <div className="home-banner-cnt-wrap">
                                <h5 className="home-banner-h-num"><span>1.2k+</span>
                                Worldwide client</h5>
                                <ul className="home-banner-ul">
                                    <li><a href=""><CiLinkedin/></a></li>
                                    <li><a href=""><FaGithub/></a></li>
                                    <li><a href="">Be</a></li>
                                    <li><a href="">Be</a></li>
                                </ul>
                        </div>
                    </div>
                    <div className="home-p-d">
                        <img src={bannerbg} className="banner-bg-pos" alt="" />
                    </div>
                </div>
                
            </section>
            <Aboutfirstsec/>
            <section>
                <div className="container">
                    <Skills/>
                </div>
            </section>
            <section className="home-port-sec-wrapper">
                <div className="container">
                    <h2 className="home-title-h text-center">Portfolio</h2>
                    <h2 className="home-title text-center">My recent work</h2>

                    <div className="row mt-5 row-gap-5">
                        {projectitem.map((item,index)=>
                            <div className="col-md-6 col-12" key={index}>
                                <div className="home-port-inner">
                                    <img src={item.imgsrc} alt={item.title} className="w-100" />

                                    <div className="home-port-se">
                                        {item.usedtech.map((data,index)=>
                                            <span key={index}>{data}</span>
                                        )}
                                    </div>
                                    <Link to={item.liveurl} target="_blank" className="home-port-lc">{item.title}<MdOutlineArrowOutward/></Link>
                                </div>
                            </div>

                        )}
                        
                        <div className="col-12 my-4">
                            <Link to="/Projects" target="_blank" className="btn-primary btn-port-home py-3 w-100 text-decoration-none">
                                View All Project
                                <MdOutlineArrowOutward/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
Home.propTypes={
    projectDetail:PropTypes.array
}
export default Home

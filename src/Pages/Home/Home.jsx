import { MdOutlineArrowOutward } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Aboutfirstsec from "../About/Aboutfirstsec.jsx"
import Skills from "../About/Skills.jsx"

import "./Home.css"

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import homebannerimg from "../../assets/images/1.png"

const Home = ({ projectDetail }) => {
    const projectitem = projectDetail.slice(0, 2)

    return (
        <>
            <section className="sec-1-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <div className="sec-1-home">
                                <p className="home-b-ht"><span></span> Hello, I’m </p>
                                <h1 className="home-banner-title">Krishna</h1>
                                <h1 className="home-banner-title">Moorthy</h1>
                                <p className="home-banner-p">Software Developer | React Developer</p>
                                <div className="home-banner-btn-wrap">
                                    <Link to="/Contact"  className="btn-primary">Let&apos;s Talk <MdOutlineArrowOutward /></Link>
                                    <Link to="/Projects"  className="btn-secoundary">My Work <MdOutlineArrowOutward /></Link>
                                </div>
                                <div className="home-banner-cnt-wrap">
                                    {/* <h5 className="home-banner-h-num"><span>1.2k+</span>
                                Worldwide client</h5> */}
                                    <ul className="home-banner-ul">
                                        <li><Link to="https://www.linkedin.com/in/krishna-moorthy-m-b089142a4/" target="_blank" ><CiLinkedin /></Link></li>
                                        <li><Link to="https://github.com/krishnamoorthy3" target="_blank" ><FaGithub /></Link></li>
                                        <li><Link to="mailto:krishnamoorthym3009@gmail.com" ><MdEmail /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5  col-md-6 hom-banner-img">
                            <img src={homebannerimg} width="100%" alt="" />
                        </div>
                    </div>
                </div>

            </section>
            <Aboutfirstsec />
            <section>
                <div className="container">
                    <Skills />
                </div>
            </section>
            <section className="home-port-sec-wrapper">
                <div className="container">
                    <h2 className="home-title-h text-center">Portfolio</h2>
                    <h2 className="home-title text-center">My recent work</h2>

                    <div className="row mt-5 row-gap-5">
                        {projectitem.map((item, index) =>
                            <div className="col-md-6 col-12" key={index}>
                                <div className="home-port-inner">
                                    <img src={item.imgsrc} alt={item.title} className="w-100" />

                                    <div className="home-port-se">
                                        {item.usedtech.map((data, index) =>
                                            <span key={index}>{data}</span>
                                        )}
                                    </div>
                                    <Link to={item.liveurl}  className="home-port-lc">{item.title}<MdOutlineArrowOutward /></Link>
                                </div>
                            </div>

                        )}

                        <div className="col-12 my-4">
                            <Link to="/Projects"  className="btn-primary btn-port-home py-3 w-100 text-decoration-none">
                                View All Project
                                <MdOutlineArrowOutward />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
Home.propTypes = {
    projectDetail: PropTypes.array
}
export default Home

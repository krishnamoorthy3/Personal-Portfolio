import { MdOutlineArrowOutward } from "react-icons/md";
import bannerbg from "../../assets/images/hero.png"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import interior_p_thumb from "../../assets/images/interior-p-thumb.png"
import e_com from "../../assets/images/e-comm-p-thumb.png"
import "./Home.css"
const Home = () => {
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
                    <div>
                        <img src={bannerbg} className="banner-bg-pos" alt="" />
                    </div>
                </div>
                
            </section>
            <section className="home-sec-2-wrapper">
                <div className="container">
                    <h2 className="home-title-h">Services</h2>
                    <h2 className="home-title">My specialties</h2>

                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <div>

                                    </div>
                                </div>
                                <div className="col-md-4 col-12">

                                </div>
                                <div className="col-md-4 col-12">

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>

            </section>

            <section className="home-port-sec-wrapper">
                <div className="container">
                    <h2 className="home-title-h text-center">Portfolio</h2>
                    <h2 className="home-title text-center">My recent work</h2>

                    <div className="row mt-5">
                        <div className="col-md-6 col-12">
                            <div className="home-port-inner">
                                <img src={interior_p_thumb} alt="" className="w-100" />

                                <div className="home-port-se">
                                    <span>React</span>
                                    <span>Development</span>
                                </div>
                                <a href="#" className="home-port-lc">Basinik Finance App <MdOutlineArrowOutward/></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="home-port-inner">
                                <img src={e_com} alt=""  className="w-100"/>

                                <div className="home-port-se">
                                    <span>React</span>
                                    <span>Development</span>
                                </div>
                                <a href="#" className="home-port-lc">Basinik Finance App <MdOutlineArrowOutward/></a>
                            </div>
                        </div>
                        <div className="col-12 my-4">
                            <button className="btn-primary btn-port-home py-3 w-100 ">
                                View All Project
                                <MdOutlineArrowOutward/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

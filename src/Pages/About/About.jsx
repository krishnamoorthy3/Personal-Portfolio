import Aboutimg from "../../assets/images/about2.png"
import { GoDotFill } from "react-icons/go";
import Reacticon from "../../assets/images/react.svg";
import "./About.css"
const About = () => {
    return (
        <>
            <section className="about-sect-1-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <img src={Aboutimg} alt="" className="w-100" />
                        </div>
                        <div className="col-md-7 about-pad-right">
                            <h2 className="home-title-h">About Me</h2>
                            <h2 className="home-title">Mark Hendry</h2>
                            <p className="abt-d-role">Software Developer</p>
                            <p className="abt-p-content">A Product Designer & Developer and I am in the game for over 7+ years. I am proud of my works and ready to face the next challenge</p>
                            <p className="abt-p-content">That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>

            </section>
            <section className="abt-sec-2-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h2 className="home-title-h">Experience</h2>
                            <div className="exp-abt-wrap">
                                <p className="exp-abt-date">03/216 – Running</p>
                                <h5 className="exp-abt-title"><GoDotFill/>Axtra</h5>
                                <h4 className="exp-abt-de">Lead digital marketer</h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <h2 className="home-title-h">Education</h2>
                            <div className="exp-abt-wrap">
                                <p className="exp-abt-date">03/216 – Running</p>
                                <h5 className="exp-abt-title"><GoDotFill/>Axtra</h5>
                                <h4 className="exp-abt-de">Lead digital marketer</h4>
                            </div>
                        </div>
                    </div>
                    <h2 className="home-title-h">Skills</h2>
                    <div className="d-flex flex-wrap gap-4 my-5">
                        <div className="exp-abt-wrap m-0">
                            <h4 className="exp-abt-de"><img src={Reacticon} alt="" /></h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About

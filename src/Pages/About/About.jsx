import { GoDotFill } from "react-icons/go";
import Aboutfirstsec from "./Aboutfirstsec";
import Skills from "./Skills"
import "./About.css"
const About = () => {
    return (
        <>
            <Aboutfirstsec/>
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
                    <Skills/>
                </div>
            </section>

        </>
    )
}

export default About

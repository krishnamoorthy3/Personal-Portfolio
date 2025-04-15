import { GoDotFill } from "react-icons/go";
import Aboutfirstsec from "./Aboutfirstsec";
import Skills from "./Skills"
import "./About.css"
const About = () => {

    const education=[
        {
            start:"2020",
            ending:"2023",
            place:"Rathinam College of Arts and Science",
            role:"B.Sc (Computer Science)"
        },
    ]
    const experience=[
        {
            start:"2024",
            ending:"Present",
            place:"Renaissance technologies",
            role:"Web Designer & UI Developer"
        }
    ]
    return (
        <>
            <Aboutfirstsec/>
            <section>

            </section>
            <section className="abt-sec-2-wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h2 className="home-title-h">Experience</h2>
                            {experience.map((data,index)=>
                                <div className="exp-abt-wrap" key={index}>
                                    <p className="exp-abt-date">{data.start} – {data.ending}</p>
                                    <h5 className="exp-abt-title"><GoDotFill/>{data.place}</h5>
                                    <h4 className="exp-abt-de">{data.role}</h4>
                                </div>
                            )}
                        </div>
                        <div className="col-md-6 col-12">
                            <h2 className="home-title-h">Education</h2>
                            {education.map((data,index)=>
                                <div className="exp-abt-wrap" key={index}>
                                    <p className="exp-abt-date">{data.start} – {data.ending}</p>
                                    <h5 className="exp-abt-title"><GoDotFill/>{data.place}</h5>
                                    <h4 className="exp-abt-de">{data.role}</h4>
                                </div>
                            )}
                            
                        </div>
                    </div>
                    <Skills/>
                </div>
            </section>

        </>
    )
}

export default About



import aboutimg from "../../assets/images/232.gif"
import "./Aboutfirstsec.css"
const Aboutfirstsec = () => {
    return (
        <>  

            <section className="about-sect-1-wrap">
                <div className="container-fluid">
                    <div className="row align-items-center row-gap-5">
                        <div className="col-md-5">
                            <img src={aboutimg} alt="" className="w-100" />
                        </div>
                        <div className="col-md-7 about-pad-right">
                            <h2 className="home-title-h">About Me</h2>
                            <h2 className="home-title">Krishna Moorthy</h2>
                            <p className="abt-d-role">Software Developer</p>
                            <p className="abt-p-content">I am a web designer and developer with 1.6 years of experience in building responsive and user-friendly websites using HTML, CSS, and JavaScript. My expertise lies in developing interactive web applications.</p>
                            <p className="abt-p-content">Along the way, I picked up React and Redux through outsourcing projects, which helped me dive deeper into building dynamic web applications. I&apos;m always eager to learn new tech and improve my skills to stay ahead in the ever-evolving world of web development.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutfirstsec

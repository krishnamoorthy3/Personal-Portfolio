
import Aboutimg from "../../assets/images/about2.png"
import "./Aboutfirstsec.css"
const Aboutfirstsec = () => {
    return (
        <>  

            <section className="about-sect-1-wrap">
                <div className="container">
                    <div className="row align-items-center row-gap-5">
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
        </>
    )
}

export default Aboutfirstsec

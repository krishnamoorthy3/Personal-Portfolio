import Reacticon from "../../assets/images/react.svg";
import "./About.css"


const Skills = () => {
    return (
        <>
                <div>
                    <h2 className="home-title-h">Skills</h2>
                    <div className="d-flex flex-wrap gap-4 my-5">
                        <div className="exp-abt-wrap m-0">
                            <h4 className="exp-abt-de">
                                <img src={Reacticon} alt="" />
                            </h4>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Skills

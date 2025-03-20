import Reacticon from "../../assets/images/react.svg";
import javascript from "../../assets/images/js.png";
import git from "../../assets/images/github.png";
import social from "../../assets/images/social.png";
import ps from "../../assets/images/photoshop.png";
import nodejs from "../../assets/images/nodejs.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import bootstrap from "../../assets/images/bootstrap.svg";
import redux from "../../assets/images/redux.svg";

import "./About.css"


const Skills = () => {
    const tslogo = [
        Reacticon,
        javascript,
        git,
        social,
        ps,
        nodejs,
        html,
        css,
        bootstrap,
        redux
    ]
    return (
        <>
            <div className="my-5">
                <h2 className="home-title-h">Skills</h2>
                <div className="d-flex flex-wrap gap-4 my-5 justify-content-evenly">
                    {tslogo.map((item, index) =>
                        <div className="exp-abt-wrap m-0" key={index}>
                            <h4 className="exp-abt-de">
                                <img src={item} alt="" />
                            </h4>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Skills

import project1 from "../../assets/images/project1.png"
import project2 from "../../assets/images/project-2.png"
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import ProjectDetail from "../ProjectDetail/ProjectDetail"
import "./Project.css"
import { Link } from "react-router-dom";
import { useState } from "react";
const Projects = () => {
    const [projectpopup,setProjectpopup] = useState(false)
        
    return (
        <>
            <section className="project-sec-1">
                <div className="container">
                    <h2 className="home-title-h text-center">Portfolio</h2>
                    <h2 className="home-title text-center">My recent work</h2>
                    <div className="row my-5 py-5 row-gap-4">
                        <div className="col-md-5 ">
                            <div className="project-inner-wrapper">
                                <img src={project1} alt="" className="w-100" />
                                <div className="project-d-content">
                                    <Link to="" className="project-d-t" onClick={()=>setProjectpopup(true)}>Project Detail <MdOutlineArrowOutward/></Link>
                                    <Link to="https://interior-design-k.netlify.app/" target="_blank" className="project-d-t">Live Demo <FaEye/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 ">
                            <div className="project-inner-wrapper">
                                <img src={project2} alt="" className="w-100" />
                                <div className="project-d-content">
                                    <Link to="" className="project-d-t">Project Detail <MdOutlineArrowOutward/></Link>
                                    <Link to="/ProjectDetails" className="project-d-t">Live Demo <FaEye/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-inner-wrapper">
                                <img src={project1} alt="" className="w-100" />
                                <div className="project-d-content">
                                    <Link to="" className="project-d-t">Project Detail <MdOutlineArrowOutward/></Link>
                                    <Link to="/ProjectDetails" className="project-d-t">Live Demo <FaEye/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="project-inner-wrapper">
                                <img src={project1} alt="" className="w-100" />
                                <div className="project-d-content">
                                    <Link to="" className="project-d-t">Project Detail <MdOutlineArrowOutward/></Link>
                                    <Link to="/ProjectDetails" className="project-d-t">Live Demo <FaEye/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-inner-wrapper">
                                <img src={project1} alt="" className="w-100" />
                                <div className="project-d-content">
                                    <Link to="" className="project-d-t">Project Detail <MdOutlineArrowOutward/></Link>
                                    <Link to="/ProjectDetails" className="project-d-t">Live Demo <FaEye/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="pro-overlay"></div> */}
            {projectpopup && <ProjectDetail setProjectpopup={setProjectpopup}/>}
        </>
    )
}

export default Projects

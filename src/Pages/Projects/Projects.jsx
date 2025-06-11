import { MdOutlineArrowOutward } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import ProjectDetail from "../ProjectDetail/ProjectDetail"
import "./Project.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../context/AppContext.jsx";
import { useContext } from "react";
const Projects = () => {
    const {projectDetail}=useContext(AppContext)
    const [projectpopup,setProjectpopup] = useState(false)
    
    const [proDetailitem,setProDetailitem]=useState({})

    const handelProjectDetail=(id)=>{
        const filterItem=projectDetail.filter(item=>item.id==id)
        setProDetailitem(filterItem[0])
        setProjectpopup(true)
    }
    
    return (
        <>
            <section className="project-sec-1">
                <div className="container-fluid">
                    <h2 className="home-title-h text-center">Portfolio</h2>
                    <h2 className="home-title text-center">My recent work</h2>
                    <div className="row my-5 py-5 row-gap-5">
                        {
                            projectDetail.map(item=>(
                                <div className={`col-md-6 col-12`} key={item.id}>
                                    <div className="project-inner-wrapper">
                                        <img src={item.prothumb} alt="" className="w-100" />
                                        <div className="project-d-content">
                                            <Link  className="project-d-t" onClick={()=>handelProjectDetail(item.id)}>Project Detail <MdOutlineArrowOutward/></Link>
                                            <Link to={item.liveurl} target="_blank" className="project-d-t">Live Demo <FaEye/></Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* <div className="pro-overlay"></div> */}
            {projectpopup && <ProjectDetail setProjectpopup={setProjectpopup} proDetailitem={proDetailitem}/>}
        </>
    )
}
Projects.propTypes={
    projectDetail:PropTypes.array
}
export default Projects

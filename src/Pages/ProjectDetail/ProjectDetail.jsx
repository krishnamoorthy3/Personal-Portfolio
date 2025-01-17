import { FaEye,FaGithub  } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import projectimg from "../../assets/images/project1.png"
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import "./ProjectDetail.css"

const ProjectDetail = ({setProjectpopup}) => {
    return (
        <>
            <div className="pro-detail-wrapper">
                <div className="pro-d-inner-wrap">
                    <div className="pro-d-over-i">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <h5 className="home-title-h">Detail</h5>
                                <h5 className="pro-d-title">Product Design</h5>
                            </div>
                            <div className="d-flex align-items-center gap-2 flex-wrap justify-content-end">
                                <a href="" className="pro-lv-d-btn">Live Demo <FaEye/></a>
                                <a href="" className="pro-lv-d-btn">View Git <FaGithub/></a>
                            </div>
                        </div>
                        <div>
                            <p className="pro-d-cont-p">Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.</p>
                            <div className="row my-4">
                                <div className="col-md-4">
                                    <h3 className="pro-pt-d-do"><GoDotFill/>gferger</h3>
                                </div>
                            </div>
                            <img src={projectimg} className="w-100" alt="" />
                        </div>
                    </div>
                    <div className="popup-btn-close">
                        <button className="popupclose-btn-pr" onClick={()=>setProjectpopup(false)}><ImCross/></button>
                    </div>
                </div>
            </div>
        </>
    )
}
ProjectDetail.propTypes={
    setProjectpopup:PropTypes.func
}
export default ProjectDetail

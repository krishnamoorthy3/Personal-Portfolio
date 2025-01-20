import { FaEye, FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import "./ProjectDetail.css"
import { Link } from "react-router-dom";

const ProjectDetail = ({ setProjectpopup, proDetailitem }) => {
    console.log(proDetailitem);
    
    return (
        <>
               <div className="pro-detail-wrapper" key={proDetailitem.id}>
                <div className="pro-d-inner-wrap">
                    <div className="pro-d-over-i">
                        <div className="d-flex align-items-center justify-content-between pro-d-pop-fmob">
                            <div>
                                <h5 className="home-title-h">Detail</h5>
                                <h5 className="pro-d-title">{proDetailitem.title}</h5>
                            </div>
                            <div className="d-flex align-items-center gap-2 flex-wrap justify-content-end">
                                <Link to={proDetailitem.liveurl} target="_blank" className="pro-lv-d-btn">Live Demo <FaEye /></Link>
                                <Link to={proDetailitem.giturl}  target="_blank" className="pro-lv-d-btn">View Git <FaGithub /></Link>
                            </div>
                        </div>
                        <div>
                            <p className="pro-d-cont-p">{proDetailitem.discription}</p>
                            <div className="row my-4">
                                <div className="col-md-4">
                                    {proDetailitem.usedtech.map((val,index)=>
                                        <h3 className="pro-pt-d-do" key={index}><GoDotFill />{val}</h3>
                                    )}
                                </div>
                            </div>
                            <img src={proDetailitem.imgsrc} className="w-100" alt="" />
                        </div>
                    </div>
                    <div className="popup-btn-close">
                        <button className="popupclose-btn-pr" onClick={() => setProjectpopup(false)}><ImCross /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
ProjectDetail.propTypes = {
    setProjectpopup: PropTypes.func,
    proDetailitem: PropTypes.object,
}
export default ProjectDetail

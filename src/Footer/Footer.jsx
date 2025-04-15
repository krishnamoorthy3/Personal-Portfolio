import { MdOutlineArrowOutward } from "react-icons/md";
import "./Footer.css"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer className="footer-wrapper">
                <div className="container-fluid">
                    <div className="row row-gap-5">
                        <div className="col-md-4">
                            <h6 className="footer-th">Let’s work together</h6>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-wrap">
                                <h5 className="footer-t">Looking for a Developer?</h5>
                                <Link to="/Contact" className="footer-l">krishnamoorthym3009@gmail.com <MdOutlineArrowOutward/></Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-wrap">
                                <h5 className="footer-t">See My Works</h5>
                                <Link to="/Projects" className="footer-l">Projects <MdOutlineArrowOutward/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="ftr-r2">
                        <h2 className="footer-cp">©2025 Krishna Moorthy. All Rights Reserved</h2>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

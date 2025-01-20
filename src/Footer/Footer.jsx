import { MdOutlineArrowOutward } from "react-icons/md";
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <footer className="footer-wrapper">
                <div className="container">
                    <div className="row row-gap-5">
                        <div className="col-md-4">
                            <h6 className="footer-th">Let’s work together</h6>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-wrap">
                                <h5 className="footer-t">Looking for a hectic designer?</h5>
                                <a href="#" className="footer-l">hello@henry.com <MdOutlineArrowOutward/></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-wrap">
                                <h5 className="footer-t">Looking for a hectic designer?</h5>
                                <a href="#" className="footer-l">hello@henry.com <MdOutlineArrowOutward/></a>
                            </div>
                        </div>
                    </div>
                    <div className="ftr-r2">
                        <h2 className="footer-cp">©2025  All Rights Reserved</h2>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

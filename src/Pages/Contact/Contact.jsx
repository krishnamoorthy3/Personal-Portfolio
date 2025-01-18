import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "./Contact.css"
import { Link } from "react-router-dom";
const Contact = () => {
    return (
        <>
            <section className="cont-sec-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 cont-pad-right">
                            <h2 className="home-title-h">Contact</h2>
                            <h3 className="home-title">Let’s <br />
                            connect</h3>

                            <Link className="contact-a-d"><IoMail/><span>hello@henry.com</span></Link>
                            <Link className="contact-a-d"><MdCall/><span>+1 234 567 890</span></Link>
                            <Link className="contact-a-d"><FaLocationDot/><span>Bengaluru</span></Link>
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="row row-gap-4">
                                    <div className="col-md-6">
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" className="form-input" placeholder="Your Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor=""  className="form-label">Email</label>
                                        <input type="email" className="form-input" placeholder="Your Email"  />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor=""  className="form-label">Phone</label>
                                        <input type="tel" className="form-input" placeholder="Your Phone Number"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor=""  className="form-label">Subject</label>
                                        <input type="text"  className="form-input" placeholder="Your Subject"/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor=""  className="form-label">Message</label>
                                        <textarea name="" id="" rows="4" className="form-textarea"  placeholder="Your Message"/>
                                    </div>
                                    <div className="col-12">
                                        <button className="contact-sub-btn">Submite <FaArrowRight/></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact

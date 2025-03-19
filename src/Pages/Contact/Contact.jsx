import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "./Contact.css"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRef, useState } from "react";

import emailjs from '@emailjs/browser';

const Contact = () => {

    const [formdata,setFormdata]=useState({
        name:"",
        email:"",
        phoneno:"",
        subject:"",
        message:"",
    })
    const [errors,setErrors]=useState({}) 
    const form = useRef();

    
    const handelformdata=()=>{
        
        const newErrors = {};

        if (!formdata.name) newErrors.name = "Name is required.";

        if (!formdata.email) {
        newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
        newErrors.email = "Invalid email format.";
        }

        if (!formdata.phoneno) {
        newErrors.phoneno = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formdata.phoneno)) {
        newErrors.phoneno = "Phone number must be 10 digits.";
        }

        if (!formdata.subject) newErrors.subject = "Subject is required.";
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }
    const handelformsubmite=(e)=>{
        e.preventDefault();

        if(!handelformdata()){
            return
        }        
        sendEmail();
        setFormdata({
            name:"",
            email:"",
            phoneno:"",
            subject:"",
            message:"",
        })
    }
    const sendEmail = () => {
        emailjs
            .sendForm(
                'service_8pm2xiz', // Replace with your Service ID
                'template_a4fcqml', // Replace with your Template ID
                form.current,
                '-NoChu8vNcct25NUX' // Replace with your Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Email sent successfully!");
                },
                (error) => {
                    console.error(error.text);
                    toast.error("Failed to send email. Please try again later.");
                }
            );
    };

    const contactdata=[
        {
            title:"krishnamoorthym3009@gmail.com",
            icon:<IoMail/>,
        },
        {
            title:"+91-93847-00729",
            icon:<MdCall/>,
        },
        {
            title:"India",
            icon:<FaLocationDot/>,
        },
    ]   

    return (
        <><ToastContainer position="top-center" autoClose={2000}  />
            <section className="cont-sec-wrapper">
                <div className="container">
                    <div className="row row-gap-5">
                        <div className="col-lg-6 col-md-5 col-12 cont-pad-right">
                            <h2 className="home-title-h">Contact</h2>
                            <h3 className="home-title">Let’s <br />
                                connect</h3>
                            {contactdata.map((item,index)=>(
                                <h2 className="contact-a-d" key={index}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </h2>
                            ))}
                        </div>
                        <div className="col-lg-6 col-md-7 col-12">
                            <form action="" ref={form} onSubmit={handelformsubmite}>
                                <div className="row row-gap-4">
                                    <div className="col-md-6">
                                        <label htmlFor="" className="form-label">Name *</label>
                                        <input type="text" className="form-input" name="name" value={formdata.name} onChange={(e)=>setFormdata({ ...formdata, name: e.target.value })} placeholder="Your Name" />
                                        {errors.name && <div className="error-msg-contact">{errors.name}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className="form-label">Email *</label>
                                        <input type="email" className="form-input" name="email" value={formdata.email} onChange={(e)=>setFormdata({ ...formdata, email: e.target.value })} placeholder="Your Email" />
                                        {errors.email && <div className="error-msg-contact">{errors.email}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className="form-label">Phone *</label>
                                        <input type="tel" className="form-input" name="phoneno" value={formdata.phoneno} onChange={(e)=>setFormdata({ ...formdata, phoneno: e.target.value })} placeholder="Your Phone Number" />
                                        {errors.phoneno && <div className="error-msg-contact">{errors.phoneno}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className="form-label">Subject *</label>
                                        <input type="text" name="subject" className="form-input" value={formdata.subject} onChange={(e)=>setFormdata({ ...formdata, subject: e.target.value })} placeholder="Your Subject" />
                                        {errors.subject && <div className="error-msg-contact">{errors.subject}</div>}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="" className="form-label">Message</label>
                                        <textarea id="" rows="4" className="form-textarea" name="message" value={formdata.message} onChange={(e)=>setFormdata({ ...formdata, message: e.target.value })} placeholder="Your Message" />
                                    </div>
                                    <div className="col-12">
                                        <button className="contact-sub-btn">Submite <FaArrowRight /></button>
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

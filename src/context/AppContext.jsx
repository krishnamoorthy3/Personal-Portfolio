import { useState,createContext, useEffect } from "react"

import realmsimg from "../assets/images/works/realms/realms-full.png"
import realmsthumb from "../assets/images/works/realms/realms.png"
import itcimg from "../assets/images/works/it/it-consultancy.png"
import itcthumb from "../assets/images/works/it/itconsultancy.png"
import interior from "../assets/images/works/interior/interior-design.png"
import interiorthumb from "../assets/images/works/interior/interiordesign.png"
import soccer from "../assets/images/works/soccer/soccer.png"
import soccerthumb from "../assets/images/works/soccer/soccerp.png"
import milk from "../assets/images/works/milk/milk-full.png"
import milkthumb from "../assets/images/works/milk/milk.png"
import dashboard from "../assets/images/works/dashboard/dashboard-full.png"
import dashboardthumb from "../assets/images/works/dashboard/dashboard.png"
export const AppContext=createContext()
export const AppContextProvider = ({children}) => {

    const projectDetail=[
        {
            id:6,
            imgsrc:dashboard,
            prothumb:dashboardthumb,
            giturl:"https://github.com/krishnamoorthy3/React-Ecom-Dashboard-Frontend-",
            discription:"The Admin & Dealer Dashboard is a web-based platform that provides both administrators and dealers with dedicated tools to manage product data efficiently. Designed for businesses that collaborate with third-party dealers or vendors, the system allows admin users to manage dealers and dealers to independently upload, edit, and manage their own products. The dashboard supports role-based access, enabling different user capabilities such as user management (for admins) and product submission (for dealers).",
            title:"Admin & Dealer Dashboard",
            usedtech:["React","css","JavaScript","bootstrap","Contextapi","Axios"],
            liveurl:"https://react-ecom-dashboard-frontend.vercel.app/",
        },
        {
            id:1,
            imgsrc:itcimg,
            prothumb:itcthumb,
            giturl:"https://github.com/krishnamoorthy3/it-consultancy-services-website",
            discription:"IT Consultancy  is a responsive and visually appealing website designed to showcase IT consulting services. Built using HTML, CSS, JavaScript, and the Bootstrap framework, the site offers a clean layout, smooth navigation, and mobile-first design.",
            title:"IT Consultancy",
            usedtech:["html","css","JavaScript","bootstrap"],
            liveurl:"https://it-consultancy-km.netlify.app/",
        },
        {
            id:2,
            imgsrc:interior,
            prothumb:interiorthumb,
            giturl:"https://github.com/krishnamoorthy3/Interior-Design-Website",
            discription:"Interior Design is a sleek and responsive website crafted to showcase modern interior design services. Developed using HTML, CSS, JavaScript, and Bootstrap, the site offers a stylish, mobile-friendly layout with intuitive navigation and visually engaging sections that highlight design projects, services, and contact information.",
            title:"Interior Design",
            usedtech:["html","css","JavaScript","bootstrap"],
            liveurl:"https://interior-design-k.netlify.app/",
        },
        {
            id:3,
            imgsrc:realmsimg,
            prothumb:realmsthumb,
            giturl:"https://github.com/krishnamoorthy3/realms-company",
            discription:"Realms Media is a modern and dynamic digital media agency that brings brands to life through creative design, innovative development, and impactful storytelling. From web design and branding to content production and digital strategy, Realms Media delivers tailored solutions that help businesses grow in the digital world.",
            title:"Realms Media Work",
            usedtech:["Next.js","html","css","JavaScript"],
            liveurl:"https://realms-media.netlify.app/",
        },
        {
            id:4,
            imgsrc:soccer,
            prothumb:soccerthumb,
            giturl:"https://github.com/krishnamoorthy3/Football",
            discription:"Soccer  is a modern, dynamic, and responsive website dedicated to football (soccer) content. Built with a combination of React.js and front-end technologies like HTML, CSS, JavaScript, and Bootstrap, the site offers an engaging user experience with smooth navigation, component-based design, and responsive layouts optimized for all screen sizes.",
            title:"Soccer",
            usedtech:["React.js","html","css","JavaScript","bootstrap"],
            liveurl:"https://soccer-km.netlify.app/",
        },
        {
            id:5,
            imgsrc:milk,
            prothumb:milkthumb,
            giturl:null,
            discription:"Milk & Mellow is a clean and visually engaging static website designed using HTML, CSS, JavaScript, and the Bootstrap framework. The site offers a responsive layout, stylish design elements, and smooth interactions, making it suitable for showcasing a product, service, personal brand, or portfolio.",
            title:"Milk & Mellow",
            usedtech:["html","css","JavaScript","bootstrap"],
            liveurl:"https://stunning-lollipop-d15dbd.netlify.app/",
        },
    ]

    return (
        <>  
            <AppContext.Provider value={{projectDetail}}>
                {children}
            </AppContext.Provider>
        </>
    )
}


import { useState,createContext, useEffect } from "react"


export const AppContext=createContext()
export const AppContextProvider = ({children}) => {
    const [projectDetail,setProjectDetail]=useState([])

    useEffect(()=>{
        fetchData()
    },[setProjectDetail])

    const fetchData=async()=>{
        try{
            const resp=await fetch("/ProjectDetail.json");
            const result=await resp.json();
            setProjectDetail(result);
            
        }catch(err){
            console.error("Error:",err)
        }
    }

    return (
        <>  
            <AppContext.Provider value={{projectDetail}}>
                {children}
            </AppContext.Provider>
        </>
    )
}


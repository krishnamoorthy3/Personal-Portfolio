import { useContext } from "react"
import { AppContext } from "../context/AppContext"
const Data = () => {
    const {projectDetail}=useContext(AppContext)

    console.log(projectDetail);
    
    
    return (
        <>
            <h1>Data</h1>
            <div>

            </div>
        </>
    )
}

export default Data

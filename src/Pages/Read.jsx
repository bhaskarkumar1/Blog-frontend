import Navbar from "../Components/Navbar/Navbar"
import ReadMore from "../Components/ReadMore/ReadMore"

let Read=({t,setT})=>{
    return(
<>
<Navbar t={t}  setT={setT}/>
<ReadMore/>
</>
    )
}

export default Read
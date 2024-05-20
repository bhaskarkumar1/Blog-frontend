import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Input from "../Components/Input/Input";
const Post=({t,setT})=>{
    return(
        <>
         <Navbar t={t}  setT={setT}/>
        <Input t={t} setT={setT}/>
        </>
       
    )
}

export default Post
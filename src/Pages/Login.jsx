import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Signin from "../Components/Signin/Signin";
const Login=({t,setT})=>{
    return(
        <>
        <Navbar/>
        <Signin t={t} setT={setT}/> 
        </>
    )
}

export default Login
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Pages/Home"
import About from "./Pages/About";
import Post from "./Pages/Post";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Read from "./Pages/Read";
const App=()=>{

  let [t,setT]=useState(null)


  return(
    <>
<Routes>
<Route path="/" element={<Home t={t} setT={setT}/>}></Route>

<Route path="/about" element={<About t={t} setT={setT}/>}></Route>
<Route path="/post" element={<Post t={t} setT={setT}/>}></Route>
<Route path="/signup" element={<Register t={t} setT={setT}/>}> </Route>
<Route path="/signin" element={<Login t={t} setT={setT} />}> </Route>
<Route path="/read-more" element={<Read t={t} setT={setT} />}> </Route>
</Routes>

    </>
  )
}

export default App
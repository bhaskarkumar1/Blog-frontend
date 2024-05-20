import { useState } from "react";
import sign from "./Signin.module.css";
import { Outlet, Link,useNavigate } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = ({t,setT}) => {
  const navigate = useNavigate();

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };


  let handleClick=async(e)=>{
    // e.preventDefault
    if(user.email.length!=0 && user.password.length!=0){
        // 
        console.log("User data collected !",user)

        //check uername and the password with db 
        const res= await axios.post(" https://nice-shorts-ray.cyclic.app/auth/login",user)
        // console.log("res",res.data[0].message)
        // console.log("abc",res.data) token 

        if(res.data==="Email Not registered !"){
          toast.error('Please check email and password', {
            // position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000
          });
          console.log("Invalid email or password")
          setT(null)
         

        }else{
          // token will be generated 
          // console.log(res.data.token)
          const token=res.data.token
          if(token){

          setT(token)
          // console.log("i am value of t: ",t)
          navigate('/');

          // console.log("token :",token)
          setUser({
            email:"",
            password:""
        })
      }else{
        setT(null)
        toast.error('Please check email and password', {
          // position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000
        });
     
      }
        }
        
    
  }
  console.log(user);

  }
  return (
    <>
      <div className={sign.container}>
        <div className={sign.inner}>
          <div className={sign.heading}>
            <h1>Login</h1>
          </div>

          <div className={sign.field}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="email"
              value={user.email}
              className={sign.input}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={sign.field}>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="text"
              name="password"
              placeholder="password"
              value={user.password}
              className={sign.input}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <button className={sign.submit}>Submit</button> */}
          <div className={sign.field}>
            <p>
              Not have a account?{" "}
              <Link to="/signup">
                <a href="#"> create One</a>
              </Link>
            </p>
          </div>

          <div className={sign.field}>
            <input type="button" className={sign.submit} value="Submit" onClick={(e)=>handleClick(e)} />
          </div>
        </div>
      </div>
    </>
  );
};


export default Signin
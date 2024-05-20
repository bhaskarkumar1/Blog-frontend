import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

import sign from "./Signup.module.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();

  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };

let handleClick=async(e)=>{
    e.preventDefault
    if(user.name.length!=0 && user.email.length!=0 && user.password.length!=0 ){
        console.log("user created with data : ",user)
        // send this data to db using axios
         const res=await axios.post(" https://nice-shorts-ray.cyclic.app/auth/signup",user)
        console.log(res)
        navigate('/');

         // reset the value of the state 
        setUser({
            name:"",
            email:"",
            password:""

        })

    }else{
        console.log("check for validation")
    }
}


  return (
    <>
      <div className={sign.container}>
        <div className={sign.inner}>
          <div className={sign.heading}>
            <h1>Register</h1>
          </div>

          <div className={sign.field}>
            <label htmlFor="name">name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="name"
              value={user.name}
              className={sign.input}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={sign.field}>
            <label htmlFor="email">email</label>
            <br />
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="email"
              className={sign.input}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={sign.field}>
            <label htmlFor="password">Password</label>
            <br />
            <input
              name="password"
              type="text"
              value={user.password}

              placeholder="password"
              className={sign.input}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <button className={sign.submit}>Submit</button> */}
          <div className={sign.field}>
            <p>
              Already Registered? <Link to="/signin"> Login</Link>
            </p>
          </div>

          <div className={sign.field}>
            <input
              type="button"
              className={sign.submit}
              value="Submit"
              onClick={(e) => handleClick(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

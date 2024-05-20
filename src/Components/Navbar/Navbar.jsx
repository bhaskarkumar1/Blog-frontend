import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Outlet, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = ({t,setT}) => {
  
    const[f,setF]=useState(false)

const handleClick=()=>{
     setF(!f)
     console.log(f)
}

let logout=()=>{
  setT(null)
  // alert("please Login to Post !")
  toast.success('Logout Success', {
    // position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000
  });
}


  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
      
          
          <div>Blog!!!</div>
        </div>
        <div className={styles.hamburger} onClick={()=>{handleClick()}}><RxHamburgerMenu /></div>
        <ul className={`${styles.items} ${f? styles.active:styles.inactive}`}>
          <li>
            {" "}
            <Link to="/">
            <a href="#">Home</a></Link>
          </li>
          <li>
          <Link to="/post"><a href="#">Post</a></Link>
            
          
          </li>
          <li>
          <Link to="/about">
          <a href="#">About Us</a>
              </Link>
           
          </li>
          <li>
            { t==null ? <button className={styles.signin}>
              <Link to="/signin"> 
            <a href="#">Sign in</a>
            </Link>
            </button> : 
            <button className={`${styles.signin} ${styles.logout}`} onClick={logout} >
            <Link to="/"> 
          <a href="#">LogOut</a>
          </Link>
          </button>
            
            }
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;

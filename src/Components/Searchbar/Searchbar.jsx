import React from "react";
import styles from "./Searchbar.module.css"
const Searchbar=({search,setSearch})=>{

let handleChange=(e)=>{
    // console.log(e.target.value)
    setSearch(e.target.value)
}

    return(
        <div className={styles.searchbar}>
            {/* <label htmlFor="search"></label> */}

            <div className={styles.container}>
            <input className={styles.inputSearch} onChange={(e)=>handleChange(e)} type="text" name="search" placeholder="Type Here !"/>
            <button className={styles.search}>Search</button>

            </div>

        </div>
    )
}

export default Searchbar
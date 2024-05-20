import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar"
import Searchbar from "../Components/Searchbar/Searchbar";
import Card from "../Components/Card/Card.jsx"
import axios from "axios"
import { useState } from "react";


// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Home=({t,setT})=>{
    const[data, setData]=useState([])
    const[search,setSearch]=useState("")
    const[filtered,setFiltered]=useState("")

    const[change, setChange]=useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const[current, setCurrent]=useState({
        _id:"",
        title:"",
        description:""
    })
    const fetchData=async()=>{
      let url="https://blog-fs-apino.onrender.com/getallblog"
      let temp=await axios.get(url)
      // console.log(data)
      // console.log("t",t) // token is stored in t 
      setData(temp.data)
  }
useEffect(()=>{

fetchData()
// console.log(data)
console.log("search:",search)
},[change])
    

useEffect(()=>{
    setFiltered(data.filter((item) => item.title.toLowerCase().startsWith(search.toLowerCase())));

},[search])

// console.log("test: ",data)


let handleChange=(e)=>{
    setCurrent({...current,[e.target.name]:e.target.value})
    console.log("current",current)
}

let handleSubmit=async()=>{
    // current 

    const headers={
        "Authorization":`${t}`
      }
    
    //   let dummy={
    //     "title":"dummy updated Title",
    //     "description":"dummy updated description"
    //   }
      try{
      await axios.put(`https://blog-fs-apino.onrender.com/edit-blog/${current._id}`, current,{headers})
    //   console.log("id: ",props._id)
      setShow(false)
      setChange(!change)
    }catch(error){
      console.log("error in updating")
    }
}



    return(
        <>
         <Navbar t={t}  setT={setT}/>
        <Searchbar search={search} setSearch={setSearch}/>


        {/* {search ? filtered.map((item)=>{})} */}


        <div style={{padding:"60px" ,display:"flex",flexDirection:"column",justifyContent:"space-evenly ",alignItems:"center",     background:"radial-gradient(#F7C566, #fff)"
}}>
            
         
            {search ? filtered.map((item)=>(
                <Card 
                t={t}
                _id={item._id}
                key={item._id}
                title={item.title}
                 email={item.email} 
                 author={item.author}
                  description={item.description}
                  setChange={setChange}
                  change={change}
                  />
            )):
            data.map((item)=>(
                <Card 
                t={t}
                _id={item._id}
                key={item._id}
                title={item.title.length>20 ? item.title.slice(0,20)+"..." :item.title.slice(0,20)}
                 email={item.email} 
                 author={item.author}
                  description={item.description.slice(0,200)}
                  setShow={setShow} 
                  setCurrent={setCurrent}
                  setChange={setChange}
                  change={change}

                  />
    
                ))
            
            
            }

        </div>
        
 {/* modals */}





    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              name="title"
                type="text"
                value={current.title}
                onChange={handleChange}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" name="description" value={current.description} onChange={handleChange}
 rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>


        </>
       

    )
}

export default Home
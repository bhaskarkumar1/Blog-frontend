import { useState } from "react";
import inp from "./Input.module.css";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Input = ({t,setT}) => {
  let [obj, setObj] = useState({
    title: "",
    description: "",
  });

  let handleChange = (event) => {
    setObj({ ...obj, [event.target.name]: event.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
console.log("token=",t)
const headers = {
  'Authorization': `${t}`
};

// console.log("t:",t.t.t)
    if (obj.title != 0 && obj.description != 0) {
      console.log(obj);
      let postBlog = async () => {
        try {
            const response = await axios.post('https://blog-fs-apino.onrender.com/create-blog', obj,{headers});
            console.log(response.data); // Log success message or handle response as needed
            if(response.data.error){
              toast.error("Please Login to post!", {
                // Set to 15sec
                // position: toast.POSITION.BOTTOM_LEFT,
                autoClose: 3000,
            });
            }else{
            toast.success('Blog Posted Successfully!', {
              // position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000, // Auto close after 3 seconds
            });
          }
          } catch (error) {
            console.error('Error:', error);
            toast.error("Error in backend", {
              // Set to 15sec
              // position: toast.POSITION.BOTTOM_LEFT,
              autoClose: 3000,
          });
          }
      };
postBlog()
      setObj({
        title: "",
        description: "",
      });
    }
    else{
      toast.warning("Title and description both required", {
        // Set to 15sec
        // position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
    });
    }
  };
  return (
    <>
      <div className={inp.container}>
        <div className={inp.outer}>
          <input
            type="text"
            id={inp.title}
            name="title"
            value={obj.title}
            placeholder="Title"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <textarea
            name="description"
            placeholder="Enter the Description, here!"
            id={inp.textarea}
            value={obj.description}
            onChange={(e) => handleChange(e)}
          ></textarea>
          <div className={inp.btnDiv}>
            <button className={inp.submit} onClick={(e)=>handleSubmit(e)}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;

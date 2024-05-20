import React from "react";
import styles from "./Card.module.css";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = (props) => {
  let navigate = useNavigate();
  let handleDelete = async () => {
    // console.log(props)
    console.log("req for delete");
    console.log(props._id);
    try {
      if (props.t) {
        const headers = {
          Authorization: `${props.t}`,
        };
        await axios.delete(`https://blog-fs-apino.onrender.com/delete-blog/${props._id}`, {
          headers,
        });
        toast.success("Blog Deleted successfully!", {
          // position: toast.POSITION.TOP_RIGHT,
          
          autoClose: 3000,
        });
        props.setChange(!props.change)
        // window.location.reload();
      } else {
        console.log("please provide token !");
        toast.error("Please Login to Delete the Blog! ", {
          // position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
      console.log("delete Success !");
    } catch (error) {
      console.log("error in deleteing !");
    }
  };

  let handleEdit = async (e) => {
    // console.log(props)
    console.log("req for edit");
    props.setShow(true);
    console.log(props._id, props.title, props.description); // current tile and description
    props.setCurrent({
      _id: props._id,
      title: props.title,
      description: props.description,
    });


    // navigate("/post",{
    //   state: {
    //     title: props.title,
    //     description: props.description
    //   }
    // })
  };

  let handleRead = (e) => {
    navigate("/read-more", {
      state: {
        _id:props._id,
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <div>
          <h1>{props.title}</h1>
        </div>
        <div className={styles.reactIcon}>
          <div>
            <FaRegEdit onClick={handleEdit} className={styles.edit} />
          </div>
          <div>
            <RiDeleteBin6Line
              onClick={handleDelete}
              className={styles.delete}
            />
          </div>
        </div>
      </div>

      <br />
      <div className={styles.heading}>
        <div>
          <p>{props.email}</p>
        </div>
        <div>
          <p> Date</p>
        </div>
        <div>
          <p>{props.author}</p>
        </div>
      </div>
      <br />
      <div className={styles.content}>
        <p>{props.description}</p>
        <br />
        <div className={styles.read}>
          <strong  className={styles.more} onClick={(e)=>handleRead(e)}>Read more...</strong>
        </div>
      </div>
    </div>
  );
};

export default Card;

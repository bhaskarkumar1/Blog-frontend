import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import read from './ReadMore.module.css';

const ReadMore = () => {
  const location = useLocation();
  const { _id } = location.state || {};

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://blog-fs-apino.onrender.com/read-more/${_id}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } 
    };

    fetchData();
  }, [_id]);

  if (error) return <div>Error loading data</div>;

  return (
    <div className={read.container}>
        <div  className={read.inner}>
          <h1 className={read.title}>{data.title}</h1>
          <p>{data.description}</p>
        </div>
     
    </div>
  );
};

export default ReadMore;

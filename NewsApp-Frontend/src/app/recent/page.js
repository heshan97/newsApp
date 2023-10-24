'use client'
import axios from 'axios';
import { useState, useEffect } from "react";

function Recent() {
  const [message, setMessage] = useState("");
  console.log("Test");
  useEffect(() => {
  console.log("Test");

    setMessage("Loading");
    const apiUrl = 'http://localhost:5000/';

    axios.get(apiUrl)
      .then(response => {
        console.log(response);
        setMessage(response.data.message); 
      })
      .catch(error => {
        console.error('There was a problem with the request:', error);
        setMessage("dsdsjghui " + error);
      });
  }, []);

  return (
  <>
    <h1 className=''>hvgfffffffcv</h1>
    <div>{message}</div>
    </>
  );
}

export default Recent;

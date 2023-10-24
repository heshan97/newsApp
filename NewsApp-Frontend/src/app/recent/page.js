// 'use client';
// const { useState, useEffect } = require("react");

// function Recent (){
//     const [message, setMessage] = useState("Loading")
//     useEffect(()=>{
//         console.log("Test")
//         fetch("http://localhost:5000/api").then(
//           Response => Response.json()
//         ).then(
//           data=>{
//             console.log(data)
//             setMessage(data.message)
//           }
//         )
//       },[])
//       return(
//         <div>{message}</div>
//       )
// }
// export default Recent
'use client'
import axios from 'axios';
import { useState, useEffect } from "react";

function Recent() {
  const [message, setMessage] = useState("");
  console.log("Test");

  useEffect(() => {
    setMessage("Loading");
    const apiUrl = 'http://localhost:5000';

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
    <div>{message}</div>
  );
}

export default Recent;

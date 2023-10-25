"use client";
import { useState, useEffect } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
// import data from "./data";
// import cardList from "./data"
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

// This cpmponent use in Dashboard Screen
// List of all articles

export default function AdminNewsList() {
  const router = useRouter();

  const [data, setdata] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:5000/api/news";

    axios
      .get(apiUrl) // oyage numcll gnn ba data tynwa call wada na ne answer krnn
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
        setMessage("dsdsjghui " + error);
      });
  }, []);

  return (
    <div>
      {data.map((card) => (
        <div
          onClick={() => {
            // console.log(card._id)
            router.push(`/articlePage?${card._id}`, { scroll: false });
          }}
          key={card._id}
          className="flex flex-row border border-red-100 justify-evenly mx-14 mt-4 text-xs"
        >
          <div className="basis-1/4 flex flex-col items-center  ">
            <img src={card.image} className="h-20" />
          </div>
          <div className="basis-1/2 flex flex-col items-left mt-1 ">
            <h1 className="font-bold mb-1">{card.title}</h1>
            <p className="mb-1">{card.description}</p>
            <div className="flex justify-between font-bold text-gray-700 mb-1">
              <span className=" text-xs">{card.author}</span>
              <span className=" text-xs">{card.createdAt}</span>
            </div>
          </div>
          <div className="basis-1/4 flex flex-row items-center justify-center gap-4">
            <GrFormView size={33} className="text-black" />
            <HiPencilAlt size={22} className="text-black" />
            <MdOutlineDeleteOutline size={25} className="text" />
          </div>
        </div>
      ))}
    </div>
  );
}
//   <div >
//   {data.map((card) =>(
//   <div onClick={
//     ()=>{
//       // console.log(card._id)
//       router.push(`/articlePage?${card._id}`, { scroll: false })
//     }
//    } key={card._id} className="flex flex-row border border-red-100 justify-evenly mx-14 mt-4 text-xs">
//             <div className="basis-1/4 flex flex-col items-center  ">
//                 <img src={card.image} className="h-20"/>
//             </div>
//             <div className="basis-1/2 flex flex-col items-left mt-1 ">
//                 <h1 className="font-bold mb-1">{card.title}</h1>
//                 <p className="mb-1">{card.content}</p>
//                 <div className="flex justify-between font-bold text-gray-700 mb-1">
//                     <span className=" text-xs">Times of India</span>
//                     <span className=" text-xs">October 22, 2023   07:21 pm</span>
//                 </div>
//             </div>
//             <div className="basis-1/4 flex flex-row items-center justify-center gap-4">
//             <GrFormView size={33} className="text-black" />
//             <HiPencilAlt size={22} className="text-black" />
//             <MdOutlineDeleteOutline size={25} className="text" />

//             </div>
//         </div>
//         ))}
//         </div>

"use client";
import { useState, useEffect } from "react";
import data from "./data";
import cardList from "./data";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewsCard() {
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
    <div className="container mx-auto pb-6 px-8 ">
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {data.map((card) => (
          <div
            onClick={() => {
              router.push(`/articlePage?${card._id}`, { scroll: false });
            }}
            key={card._id}
            className="shadow-lg rounded-lg cursor-pointer"
          >
            <img className="rounded-t-lg " src={card.image} alt="" />
            <div className="p-5">
              <div className=" ">
                <h1 className="text-sm font-bold mb-3">{card.title}</h1>
                <p className="text-xs text-justify">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

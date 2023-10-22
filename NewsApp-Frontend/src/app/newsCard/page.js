import data from "./data";
import cardList from "./data"
import Image from "next/image";
export default function NewsCard (){
   return(
    <div className="container mx-auto py-6 px-8 ">
       <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
       {cardList.map(card =>(
           <div className="shadow-lg rounded-lg">
                <img className="rounded-t-lg " src={card.img} alt=""/>
                <div className="p-5">
                    <div className=" ">
                        <h1 className="text-sm font-bold mb-3">{card.title}</h1>
                    <p className="text-xs">{card.text}</p>
                </div>
                </div>
                
           </div>
        ))}
       </div>
    </div>
   )

}
import { HiPencilAlt } from "react-icons/hi";
import {MdOutlineDeleteOutline} from"react-icons/md"
import {GrFormView} from"react-icons/gr"
import Link from "next/link";
import AdminNewsList from "@/components/adminNewsList";

export default function DashboardScreen (){
    return(
        <>
        <div className="flex flex-row h-12 bg-yellow-100">
            <div className="basis-1/3 font-bold flex flex-col items-center justify-center">Dashboard</div>
            <div className="basis-1/3 flex flex-col items-center justify-center"></div>
            <div className="basis-1/3 flex flex-col items-center justify-center">
                <Link href="/dashboard/addArticles" className="rounded-full text-sm border-gray-200 bg-black-500 hover:bg-red-500 text-white font-bold bg-slate-900 px-5 py-2">
                    Add Articles
                </Link>
            </div>
            </div>
            {/* <div className="flex flex-row border border-red-100 justify-evenly mx-14 mt-4 text-xs">
                <div className="basis-1/4 flex flex-col items-center  ">
                    <img src="/logo/logo.png" className="h-20"/>
                </div>
                <div className="basis-1/2 flex flex-col items-left mt-1 ">
                    <h1 className="font-bold mb-1">India’s NIA arrests key accused in Sri Lankan human trafficking case - report</h1>
                    <p className="mb-1">The National Investigation Agency (NIA) of India sleuths nabbed the kingpin of a human trafficking racket involved in an attempt to send 61 Sri Lankan nationals abroad illegally after bringing them to India in 2021. MORE..</p>
                    <div className="flex justify-between font-bold text-gray-700 mb-1">
                        <span className=" text-xs">Times of India</span>
                        <span className=" text-xs">October 22, 2023   07:21 pm</span>
                    </div>
                </div>
                <div className="basis-1/4 flex flex-row items-center justify-center gap-4">
                <GrFormView size={33} className="text-black" />
                <HiPencilAlt size={22} className="text-black" />
                <MdOutlineDeleteOutline size={25} className="text" />
                
                
                </div>
            </div> */}

            <AdminNewsList/>
            </> 
    )
}
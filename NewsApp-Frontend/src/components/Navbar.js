"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Container } from "postcss";
// import Login from "@/app/login/page";
import Cookies from 'js-cookie';

const Navbar = () => {
const [MdGeneratingTokens,settoekn ]=useState(false);
  useEffect(()=>{
   const token= Cookies.get('loginToken');
  
   if (token) {
    settoekn(true);
  } else {
    settoekn(false);
  }
   

},[0])

const handleLogout = () => {
  // Clear the login token cookie and set isLoggedIn to false
  Cookies.remove('loginToken');
  setIsLoggedIn(false);
};

  return (
   // <header className="w-full h-28  py-8 border-b-[1px] border-gray-500 flex justify-between items-center text-black px-8 ">
          <div className=" w-full h-20  py-8 mb-6 border-b-[4px] border-rose-400 flex justify-between items-center text-black px-8 bg-white shadow-slate-500">
            <div className="basis-1/4 flex items-center justify-center">
              <Logo/>
            </div>
            <nav className="basis-1/2  flex items-center justify-center font-medium text-gray-800 ">
                <Link href="/recent" className="mr-4 hover:text-rose-500 active:text-red-700">Recent</Link>
                <Link href="/articlePage" className="mr-4 hover:text-rose-500 focus:text-red-700">Sports</Link>
                <Link href="" className="mr-4 hover:text-rose-500 focus:text-red-700">Foreign</Link>
                <Link href="/dashboard/addArticles" className="mr-4 hover:text-rose-500 focus:text-red-700">Local</Link>
                <Link href="/dashboard/dashboardScreen" className="mr-4 hover:text-rose-500 focus:text-red-700">Weather</Link>
            </nav>
            <div className="basis-1/4 flex items-center ">

            {MdGeneratingTokens ? (<>
              <Link onClick={handleLogout} className="mr-4 rounded-full border-gray-200 bg-red-900 hover:bg-red-500 text-white font-bold  px-5 py-2" href="/login">
                Logout
              </Link></>) : (<>
              <Link className="mr-4 rounded-full border-gray-200 bg-yellow-400 hover:bg-red-500 text-black  px-5 py-2" href="/login">
                Login
              </Link>
              <Link className="border border-dark rounded-full  bg-white hover:bg-red-500 text-black  px-5 py-2" href="/register">
                Register
              </Link>
              </>
              )}
            </div>
  
      {/* <Logo/>
     
      <nav className="ml-25" >
        <Link href="/" className="mr-4 ">Recent</Link>
        <Link href="/Sports" className="mr-4">Sports</Link>
        <Link href="/Foreign" className="mr-4">Foreign</Link>
        <Link href="/Local" className="mr-4">Local</Link>
        <Link href="/Weather" className="mr-4">Weather</Link>
      </nav>
      <div className="">
        <Link className="mr-4 rounded-full border-gray-200 bg-yellow-400 hover:bg-red-500 text-black  px-5 py-3" href={"/login"}>
          Login
        </Link>
        <Link className="border border-dark rounded-full  bg-white hover:bg-red-500 text-black  px-5 py-3" href={"/register"}>
          Register
        </Link>
      </div> */}

    </div>
  );
};

export default Navbar;

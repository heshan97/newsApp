import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Login from "@/app/login/page";

const Navbar = () => {
  return (
   // <header className="w-full h-28  py-8 border-b-[1px] border-gray-500 flex justify-between items-center text-black px-8 ">
          <header className=" w-full h-28  py-8 border-b-[1px] border-gray-500 flex justify-between items-center text-black px-8 bg-white shadow-slate-500">
            <div className="basis-1/4 flex items-center justify-center">
              <Logo/>
            </div>
            <nav className="basis-1/2  flex items-center justify-center">
            <Link href="/" className="mr-4 ">Recent</Link>
                <Link href="/articlePage" className="mr-4">Sports</Link>
                <Link href="/newsCard" className="mr-4">Foreign</Link>
                <Link href="/dashboard/addArticles" className="mr-4">Local</Link>
                <Link href="/dashboard/dashboardScreen" className="mr-4">Weather</Link>
            </nav>
            <div className="basis-1/4 flex items-center ">
              <Link className="mr-4 rounded-full border-gray-200 bg-yellow-400 hover:bg-red-500 text-black  px-5 py-3" href={"/login"}>
                Login
              </Link>
              <Link className="border border-dark rounded-full  bg-white hover:bg-red-500 text-black  px-5 py-3" href={"/register"}>
                Register
              </Link>
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

    </header>
  );
};

export default Navbar;

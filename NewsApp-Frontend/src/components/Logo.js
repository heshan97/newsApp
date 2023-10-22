import Image from "next/image";
import Link from "next/link";


const Logo =() =>{
    return(
        <Link href="/">
        <div className="w-24 h-auto flex items-center">
            <img src='/logo/logo.png' alt="C" className="w-full h-auto"/> 
            <span className="font-bold mr-auto">DailyPulse</span>
        </div>
    </Link>
     )
    }

export default Logo;
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className=" bg-[url('/images/bg-3.jpg')] bg-cover bg-center w-full h-screen">
       
        <div className=" flex justify-center gap-5 item-center flex-col mx-auto  h-screen ">
          <h1 className="text-white text-5xl  text-center">Welcome to RustBerry</h1>
          <p className=" text-center  mt-4 text-sm text-gray-400">A Rust-based web application for managing your daily tasks.</p>
          
          <Link href="/auth/login" className="text-center  mx-auto border w-[20%] border-white rounded-2xl text-white font-bold py-2 px-4 r mt-4">Get Started</Link>
           <Link href="/workspace" className="text-center  mx-auto border w-[20%] border-white rounded-2xl text-white font-bold py-2 px-4 r mt-4">Work Space</Link>
         <Image
            src="/icons/wired-outline-217-arrow-6-hover-pointing.svg"
            width={48}
            height={48}
            alt="Arrow icon"
            className="mx-auto mt-10"
          />
          
          


        </div>


      </div>

    </div>

  );
}

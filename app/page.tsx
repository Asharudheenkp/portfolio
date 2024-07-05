import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import heroImage from '@/public/template.jpg'
import Image from "next/image";
import productImages from '@/public/beef-pickle-transformed.jpeg'


export default function Home() {
  return (
    <>
      {/* <Navbar/>
      <HeroSection/> */}

      <div className="grid grid-cols-7 grid-rows-5">
        {/* vathas navbar */}
        <div className="col-span-7 row-span-1">
          <nav className="w-[80%] mx-auto flex justify-between items-center pt-8">
            <div>
              <Link href={'/'}>
                  <h1 className="text-3xl font-bold font-serif">
                      Vathas
                  </h1>
              </Link>
            </div>

            <div className="flex gap-6">
                <div className="bg-[#f2f0ea] flex items-center h-9 px-3 rounded-lg">
                  <IoSearchOutline />
                  <input className="bg-[#f2f0ea] ps-2 outline-none w-72 text-sm" type="text" placeholder="search"/>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div className=" relative">
                  <div className="flex flex-col justify-center items-center">
                    <IoBagHandleOutline className="text-xl"/>
                    <span className="text-xs pt-1">Cart</span>
                  </div>
                    <span className="bg-[#EDCF5D] rounded-full absolute -right-1 -top-1 px-1 text-xs">4</span>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <CiHeart className="text-xl"/>
                  <span className="text-xs pt-1">Favorites</span>
                </div>

                <div className="bg-[#f2f0ea] p-2 rounded-full ms-5 cursor-pointer">
                  <CiUser className="text-xl"/>
                </div>
            </div>
          </nav>
        </div>
        {/* end */}

        {/* vathas hero */}
          <div className="col-span-7 row-span-4 w-[80%]  h-50 mx-auto relative">
            <Image className="w-full rounded-lg h-[33rem]" src={heroImage} width={1920} height={1080} alt="hero image"></Image>
            <div className="bg-gray-500 w-full rounded-lg h-[33rem] opacity-45 absolute top-0">
            </div>
            <div className="absolute top-[40%] -translate-y-[40%] left-[50%] -translate-x-[50%] w-[70%] ">
              <h1 className="text-white text-7xl font-semibold  text-center animate-bounce">Vathas the best pickle in the world</h1>
              <div className="mt-7 text-center">
                  <Link href={'/'} className="bg-white px-5 py-3 rounded-lg mt-5">Shop now</Link>
              </div>
            </div>
          </div>
          {/* end */}

          <div className="w-[80%] mx-auto col-span-7 mt-16">
            <h3 className="text-2xl font-semibold">Our products</h3>

            <div className=" my-5 flex flex-wrap justify-between gap-3">
                <div className="w-[30%] cursor-pointer hover:scale-105 transition ease-in-out delay-100">
                    <Image className="w-full rounded-lg h-[22rem]" src={productImages} width={1080} height={1080} alt="category images"></Image>
                    <div className="text-center mt-3">
                      <p className="text-lg">Tasty & Healthy Edible Powders</p>
                    </div>
                </div>

                <div  className="w-[30%] cursor-pointer hover:scale-105 transition ease-in-out delay-100">
                    <Image className="w-full rounded-lg h-[22rem]" src={heroImage} width={1080} height={1080} alt="category images"></Image>
                    <div className="text-center mt-3">
                      <p className="text-lg">Non-Veg Pickles</p>
                    </div>
                </div>

                <div  className="w-[30%] cursor-pointer hover:scale-105 transition ease-in-out delay-100">
                    <Image className="w-full rounded-lg h-[22rem]" src={productImages} width={1080} height={1080} alt="category images"></Image>
                    <div className="text-center mt-3">
                      <p className="text-lg">Veg Pickles</p>
                    </div>
                </div>
            </div>
          </div>

          
      </div>


     
    </>
  );
}

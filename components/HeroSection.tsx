import Image from "next/image";
import personImage from '@/public/user_2.jpg'
import projectImage from '@/public/black_background.jpg'
import javascriptLogo from '@/public/javascript_logo.png'


import { LuArrowDownLeft, LuArrowUpRight } from "react-icons/lu";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
const HeroSection = () => {
  return (
    <div className="w-100 my-11">
        <div className="relative block lg:grid md:grid-rows-1 grid-flow-col gap-16 w-[80%] mx-auto">
            <div className="grid-cols-1">
              <h1 className="max-sm:text-5xl text-7xl max-lg:text-center leading-[5rem] font-semibold animate-bounce"><span className="text-orange-300">Asharudheen kp</span>  the <br /> Web <span className="text-orange-300">Developer</span></h1>
              <p className="mt-8 w-full lg:w-[27rem] text-sm text-gray-500 animate-fade-up">
                A passionate web developer skilled in PHP, Laravel, and JavaScript, dedicated to creating dynamic and user-friendly web applications. Experienced in full-stack development, with a keen eye for detail and a commitment to staying updated with the latest technologies.
              </p>

              <div className="flex gap-3 mt-7">
                <button className="px-5 py-2 rounded-full bg-gray-200 animate-fade-left">More</button>
                <button className="px-5 py-2 rounded-full bg-black text-white animate-fade-left">Get in touch</button>
              </div>

              <div className="mt-16 relative">
                <h3 className="flex gap-4 text-2xl items-center">
                  My Projects
                  <div className="bg-orange-300 rounded-full p-2">
                    <LuArrowUpRight />
                  </div>
                </h3>
                <div className="mt-5">
                  <Image className="mt-5 rounded-2xl w-[100%] object-cover h-52" src={projectImage} width={1080} height={1080} alt="project images"></Image>
                </div>

                <p className="absolute top-48 w-[80%] ps-3 text-white text-xs">Developed a comprehensive Laravel project designed to facilitate workshops, including speed reading and memory tests. The application features an intuitive </p>
              </div>

              <div className="flex items-center gap-3 mt-8">
                  <Image className="rounded-2xl w-[15%] object-cover h-20 me-3" src={javascriptLogo} width={1080} height={1080} alt="javascript logo"></Image>

                  <div>
                    <h5 className="font-bold text-gray-700">Java script</h5>
                    <p className="text-gray-500 text-sm w-[70%]">i have 2 plus year experience in javascript, and jquery</p>
                  </div>

                  <p>2/6</p>

                  <div className="flex gap-5 justify-center items-center">
                      <div className="border w-9 h-9 rounded-full flex justify-center items-center  text-xl cursor-pointer">
                        <MdOutlineKeyboardArrowLeft />
                      </div>
                      <div className="border w-9 h-9 rounded-full flex justify-center items-center text-xl cursor-pointer">
                        <MdOutlineKeyboardArrowRight />
                      </div>
                  </div>
              </div>
            </div>

            <div className="animate-flip-up max-md:mt-5 grid-cols-1  md:absolute md:right-[30%] lg:right-[27%] xl:right-[40%] top-[30%] z-10 md:w-[30%] lg:w-[20%] h-auto bg-gray-200 px-5 py-3 rounded-2xl">
                <div className="flex justify-between items-center border-b border-gray-300 text-gray-500 py-1">
                  <p>1</p>
                  <p>Laravel</p>
                </div>

                <div className="flex justify-between items-center border-b border-gray-300 text-gray-500 py-1">
                  <p >2</p>
                  <p>Next.js</p>
                </div>

                <div className="flex justify-between items-center text-gray-500 py-1">
                  <p>3</p>
                  <p>Tailwind</p>
                </div>
            </div>

            <div className="grid-cols-1 relative mt-14 lg:mt-0">
              <div className="bg-[#f0f0f0] w-33 -right-5 -top-5 absolute rounded-2xl">
                <div className="bg-orange-400 text-8xl w-33 m-5 rounded-2xl">
                    <LuArrowUpRight />
                </div>
              </div>
              <Image className="rounded-3xl object-cover h-[51rem]" src={personImage} width={1080} height={1080} alt="person image"></Image>
            </div>
        </div>
      </div>
  )
}

export default HeroSection

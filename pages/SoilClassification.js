import React from 'react'
import SignOut from '../components/SignOut'
import Image from 'next/image';
import soil from '.././components/soil.png'
import { useRouter } from "next/router";


function SoilClassification() {

  const currentYear = new Date().getFullYear();


    const router = useRouter();
  return (
    <div className="bg-blue-100 "> 
    <SignOut/>
    <div className="py-2 max-w-8xl mx-auto px-8 sm:px-16"> 

    <div onClick={() => router.push('/AASHTO') } className="flex justify-center mt-5 mb-5 cursor-pointer my-auto">
<button className='px-7 font-bold text-xl py-7 bg-[#e91e63] rounded-md text-white outline-none focus:ring-4 
shadow-lg transform active:scale-75 transition-transform hover:bg-[#ad1457]' type="button" >
                    Click to here classify a soil according to AASHTO flowchart</button></div>

    <div onClick={() => router.push('/Excavation') } className="flex justify-center mt-5 mb-5 cursor-pointer my-auto">
<button className='flex items-center gap-2 px-6 border-2 border-gray-800 py-3 text-xl font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20' type="button" >
                    Go to Trench and Excavation Construction Safety
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      className="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
    </svg>
</button></div>



    <h2 className="text-center font-bold text-4xl mb-2 py-5">
    Classify a soil using USCS flowchart : </h2>
    </div>

    <div className="py-1 max-w-4xl mx-auto px-8 sm:px-16 border-4 border-yellow-300">
    <h1 className="text-center font-bold text-xl mb-2 py-5">
    Are 50% of soil particles &#60; 0.075 mm : </h1>

    

    <div className=" flex justify-center space-x-10 mb-5">
<div onClick={() => router.push('/FineGrained') } className=" cursor-pointer my-auto">
<button className='px-7 py-7 bg-blue-600 rounded-md text-white outline-none focus:ring-4 
shadow-lg transform active:scale-75 transition-transform' type="button" >
                    YES</button></div>

                    <div onClick={() => router.push('/CourseGrained') } className=" cursor-pointer my-auto">
<button className='px-7 py-7 bg-red-600 rounded-md text-white outline-none focus:ring-4 
shadow-lg transform active:scale-y-75 transition-transform flex' type="button" >
                    NO</button>                    
</div>
</div>
</div>

<h1 className="text-center font-bold text-xl mt-4 mb-1">
    A typical grain-size distribution curve having three types of soils: A, B & C depicted below: </h1>
<div className=" py-2 max-w-8xl mx-auto px-8 sm:px-16"> 
<div className="flex relative justify-center items-center lg:h-full lg:w-full md:h-96 md:w-96 sm:h-96 sm:w-96 flex-shrink-0 ">
<Image
    src={soil}
    alt="soil"  
    fill
    priority
    className="rounded-2xl"
    />

</div>

<section className="flex justify-center items-center max-w-8xl rounded-lg  text-black-600">
    <div className="font-bold">&copy; {currentYear} OSP TELCO ALL RIGHTS RESERVED</div>
</section>

    </div>
    </div>
  )
}

export default SoilClassification
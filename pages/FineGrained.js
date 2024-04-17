import React, { useState } from 'react'
import SignOut from '../components/SignOut'
import { useRouter } from "next/router";



function FineGrained() {
    const router = useRouter();

    const [textColor, setTextColor] = useState('black');
    const [textColora, setTextColora] = useState('black');
    const [textColorb, setTextColorb] = useState('black');
    const [textColorc, setTextColorc] = useState('black');
    const [textColord, setTextColord] = useState('black');
    const [textColore, setTextColore] = useState('black');
    const [textColorf, setTextColorf] = useState('black');
    const [textColorg, setTextColorg] = useState('black');

    const [isBlack, setIsBlack] = useState(true);
    
    const handleChnageTextColor = (e) => {
      setIsBlack(!isBlack);
      setTextColor(isBlack ? '#CCCCCC' : 'black ');
    }
    const handleChnageTextColora = (e) => {
      setIsBlack(!isBlack);
      setTextColora(isBlack ? '#CCCCCC' : 'black ');
    }
    const handleChnageTextColorb = (e) => {
      setIsBlack(!isBlack);
      setTextColorb(isBlack ? '#CCCCCC' : 'black ');
    }
    const handleChnageTextColorc = (e) => {
      setIsBlack(!isBlack);
      setTextColorc(isBlack ? '#CCCCCC' : 'black ');
    }
    const handleChnageTextColord = (e) => {
      setIsBlack(!isBlack);
      setTextColord(isBlack ? '#CCCCCC' : 'black ');
    }

    const handleChnageTextColore = (e) => {
      setIsBlack(!isBlack);
      setTextColore(isBlack ? '#CCCCCC' : 'black ');
    }

    const handleChnageTextColorf = (e) => {
      setIsBlack(!isBlack);
      setTextColorf(isBlack ? '#CCCCCC' : 'black ');
    }
    const handleChnageTextColorg = (e) => {
      setIsBlack(!isBlack);
      setTextColorg(isBlack ? '#CCCCCC' : 'black ');
    }
      
  return (
    <div className="bg-green-100 "> 
    <SignOut/>
    <div className=" py-2 max-w-8xl mx-auto px-8 sm:px-16"> 
    <h2 className="text-center font-bold text-4xl mb-2 py-5 underline decoration-indigo-500">
    Fine-grained soil</h2>
    </div>



    <div className="py-1 max-w-2xl mx-auto px-8 sm:px-16 border-4 border-green-500 hover:border-8">
    <h1 className="text-center font-bold text-xl mb-2 py-5">
    Is (w<sub>LL</sub>oven dried) / (w<sub>LL</sub>not dried) &#60; 0.75% </h1>



    <div className="flex justify-center space-x-10 mb-5">

     <div className="flex items-center p-2 border border-gray-600 rounded dark:border-gray-700 bg-red-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5">
     <input type="checkbox" className=' bg-blue-600 rounded-md text-white outline-none focus:ring-4 
shadow-lg transform active:scale-75 transition-transform mr-2' value={isBlack} onChange={handleChnageTextColor} />
    <label for="bordered-checkbox-1" className="w-full text-lg font-medium text-gray-900 dark:text-gray-300"
    >YES</label> 
</div>

<div className="flex items-center p-2 border border-gray-600 rounded dark:border-gray-700 bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5">
     <input type="checkbox" className=' bg-blue-600 rounded-md text-white outline-none focus:ring-4 
shadow-lg transform active:scale-75 transition-transform mr-2' value={isBlack} onChange={handleChnageTextColora} />
    <label for="bordered-checkbox-1" className="w-full text-lg font-medium text-gray-900 dark:text-gray-300"
    >NO</label> 
</div>

</div>

</div>
<div className="flex justify-center max-w-xl mx-auto px-8 sm:px-16 space-x-2">
<div className='border-l-[2px] hover:border-l-[4px]   border-red-600  w-5/12' > <p className="py-10"></p></div>
<div className='border-r-[2px]  hover:border-r-[4px]   border-blue-600  w-5/12' > <p className="py-10"></p></div>
</div>

<div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 px-10 py-1  text-gray-700 rounded-lg">
          
<div className="space-y-2 mr-2 text-gray-800 border-2 border-red-500 hover:border-4" style={{ color:textColora}}>
<h1 className="text-center font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl mb-1 pt-5 switch-container_text" style={{ color:textColora}}>
    Organic soil. First letter is O </h1>
    <div className="grid justify-items-center">
<p className="font-light text-6xl text-red-500">l</p></div>


   <div className="space-y-2 mr-1 ml-1 p-6 text-gray-800 border-2 border-red-400 sm:mr-6 sm:ml-6 md:mr-6 md:ml-6 lg:mr-12 lg:ml-12 xlg:mr-12 xlg:ml-12">
    <h1 className="text-center font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl mb-2  switch-container_text" style={{ color:textColora}}>
    Is Liquid Limit &#62; 50% ? </h1>

    <div className=" flex justify-center space-x-1 mb-5 xlg:space-x-10 lg:space-x-10 md:space-x-1 sm:space-x-1">

     <div className="flex items-center p-2 border border-gray-600 rounded dark:border-gray-700 bg-red-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5">
     <input type="checkbox" className=' bg-blue-600 rounded-md text-white outline-none focus:ring-4 
shadow-lg transform active:scale-75 transition-transform mr-2' value={isBlack} onChange={handleChnageTextColorb} />
    <label for="bordered-checkbox-1" className="w-full text-lg font-medium text-gray-900 dark:text-gray-300"
    >YES</label> 
</div>

<div className="flex items-center p-2 border border-gray-600 rounded dark:border-gray-700
 bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5
 ">
     <input type="checkbox" className=' bg-blue-600 rounded-md text-white outline-none focus:ring-4 
shadow-lg transform active:scale-75 transition-transform mr-2' value={isBlack} onChange={handleChnageTextColorc} />
    <label for="bordered-checkbox-1" className="w-full text-lg font-medium text-gray-900 dark:text-gray-300"
    >NO</label> 
</div>
</div>
</div>
<div className="flex justify-center max-w-xl mx-auto px-8 sm:px-16 space-x-2">
<div className='border-l-[2px]  hover:border-l-[4px]  border-red-600  w-5/12' > <p className="py-10"></p></div>
<div className='border-r-[2px]  hover:border-r-[4px]   border-blue-600  w-5/12' > <p className="py-10"></p></div>
</div>
<div className=" flex justify-center space-x-10 mb-2">

<div className="flex items-center p-2">
<h1 className="text-center font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl mb-2  switch-container_text"  style={{ color:textColorc}}>
    High plasticity, 2nd letter is H. Soil is fat clay or elastic silt </h1>

</div>

<div className="flex items-center p-2 ">
<h1 className="text-center font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl mb-2  switch-container_text" style={{ color:textColorb}}>
  Low plasticity, 2nd letter is L. Soil is lean clay or silt </h1>

</div>
</div>

</div>
    
    


<div className="space-y-4 ml-2 border-2 border-blue-500 hover:border-4 text-gray-800">
<div className="space-y-2 mr-1 ml-1 mt-6 p-6 text-gray-800 border-2 border-blue-400 sm:mr-6 sm:ml-6 md:mr-6 md:ml-6 lg:mr-12 lg:ml-12 xlg:mr-12 xlg:ml-12">
<h1 className="text-center font-bold mb-2 py-2 switch-container_text
text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl" style={{ color:textColor}} >
    Is clay fraction &#62; silt fraction </h1>

    <div className=" flex justify-center space-x-1 mb-5 xlg:space-x-10 lg:space-x-10 md:space-x-1 sm:space-x-1">

     <div className="flex items-center p-2 border border-gray-600 rounded dark:border-gray-700 bg-red-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5">
     <input type="checkbox" className=' bg-blue-600 rounded-md text-white outline-none focus:ring-4 
shadow-lg transform active:scale-75 transition-transform mr-2' value={isBlack} onChange={handleChnageTextColord} />
    <label for="bordered-checkbox-1" className="w-full text-lg font-medium text-gray-900 dark:text-gray-300"
    >YES</label> 
</div>

<div className="flex items-center p-2 border border-gray-600 rounded dark:border-gray-700 bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5">
     <input type="checkbox" className=' bg-blue-600 rounded-md text-white outline-none focus:ring-4 
shadow-lg transform active:scale-75 transition-transform mr-2' value={isBlack} onChange={handleChnageTextColore} />
    <label for="bordered-checkbox-1" className="w-full text-lg font-medium text-gray-900 dark:text-gray-300"
    >NO</label> 
</div>
</div>
</div>
<div className="flex justify-center max-w-xl mx-auto px-8 sm:px-16 space-x-2">
<div className='border-l-[2px]  hover:border-l-[4px]  border-red-600  w-5/12' > <p className="py-10"></p></div>
<div className='border-r-[2px]  hover:border-r-[4px]   border-blue-600  w-5/12' > <p className="py-10"></p></div>
</div>



    <div className=" flex justify-center space-x-7 mb-5">
    <h1 className="text-center font-bold mb-2  switch-container_text
    text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl" style={{ color:textColore}} >
    Soil is Clay. First letter is C </h1>

    <h1 className="text-center font-bold mb-2  switch-container_text
    text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl" style={{ color:textColord}} >
    Soil is Silt. First letter is M </h1>
    </div>
    <div className="flex justify-center max-w-xl mx-auto px-8 sm:px-16 space-x-2">
<div className='border-l-[2px]  hover:border-l-[4px]  border-red-600  w-5/12' > <p className="py-10"></p></div>
<div className='border-r-[2px]  hover:border-r-[4px]   border-blue-600  w-5/12' > <p className="py-10"></p></div>
</div>
    <div className="space-y-2 mr-1 ml-1 p-6  text-gray-800 border-2 border-blue-400 sm:mr-6 sm:ml-6 md:mr-6 md:ml-6 lg:mr-12 lg:ml-12 xlg:mr-12 xlg:ml-12">
    <h1 className="text-center font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl mb-2  switch-container_text" style={{ color:textColor}}>
    Is Liquid Limit &#62; 50% ? </h1>

    <div className=" flex justify-center space-x-1 mb-5 xlg:space-x-10 lg:space-x-10 md:space-x-1 sm:space-x-1">

     <div class="flex items-center p-2 border border-gray-600 rounded dark:border-gray-700 bg-red-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5">
     <input type="checkbox" className=' bg-blue-600 rounded-md text-white outline-none focus:ring-4 
shadow-lg transform active:scale-75 transition-transform mr-2' value={isBlack} onChange={handleChnageTextColorg} />
    <label for="bordered-checkbox-1" className="w-full text-lg font-medium text-gray-900 dark:text-gray-300"
    >YES</label> 
</div>

<div class="flex items-center p-2 border border-gray-600 rounded dark:border-gray-700
 bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5
 ">
     <input type="checkbox" className=' bg-blue-600 rounded-md text-white outline-none focus:ring-4 
shadow-lg transform active:scale-75 transition-transform mr-2' value={isBlack} onChange={handleChnageTextColorf} />
    <label for="bordered-checkbox-1" className="w-full text-lg font-medium text-gray-900 dark:text-gray-300"
    >NO</label> 
</div>
</div>

</div>
<div className="flex justify-center max-w-xl mx-auto px-8 sm:px-16 space-x-2">
<div className='border-l-[2px]  hover:border-l-[4px]  border-red-600  w-5/12' > <p className="py-10"></p></div>
<div className='border-r-[2px]  hover:border-r-[4px]   border-blue-600  w-5/12' > <p className="py-10"></p></div>
</div>
<div className=" flex justify-center space-x-10 mb-5">

<div className="flex items-center p-2">
<h1 className="text-center font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl mb-2 py-1 switch-container_text"  style={{ color:textColorf}}>
    Plasticity is high, 2nd letter is H. Soil is fat clay or elastic silt </h1>

</div>

<div className="flex items-center p-2 ">
<h1 className="text-center font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl mb-2 py-1 switch-container_text" style={{ color:textColorg}}>
Plasticity is low, 2nd letter is L. Soil is lean clay or silt </h1>

</div>
</div>




</div>



</div>    


    
</div>


</div>
    
  )
}

export default FineGrained



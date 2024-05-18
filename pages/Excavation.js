import React, { useState } from 'react'
import SignOut from '../components/SignOut'
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";
import Image from 'next/image';
import trench from '.././components/trench.png'
import soiltype from '.././components/soiltype.png'
import ReactCardFlip from 'react-card-flip';
import img2 from '.././components/img2.png';
import img3 from '.././components/img3.png';
import img4 from '.././components/img4.png';
import img5 from '.././components/img5.png';
import img6 from '.././components/img6.png';
import img7 from '.././components/img7.png';

function Excavation() {

  const currentYear = new Date().getFullYear();

      function validateTextBox() {
        if (document.getElementById("textbox") !='') {
            
        } else {
            alert("Please enter a number");
        }
    }

      const [isFlipped, setIsFlipped] = useState(false);
      const handleClick = () => {
        setIsFlipped(!isFlipped);
      };

    const [soilType, setSoilType] = useState();
    const [trenchHeight, setTrenchHeight] = useState();
    const [trenchWidth, setTrenchWidth] = useState();
    const [result, setResult] = useState();
    const [resulta, setResulta] = useState();

    const [trenchWidtha, setTrenchWidtha] = useState();
    const [trenchHeighta, setTrenchHeighta] = useState();
    const [trenchHeightd, setTrenchHeightd] = useState();
    const [soilTypea, setSoilTypea] = useState();
    const [soilTypeb, setSoilTypeb] = useState();
    const [resultb, setResultb] = useState();
    const [resultc, setResultc] = useState();

    const handleCalculateb = () => {
      let calcResultb;
      if (soilTypea === 'A' && soilTypeb === 'B' && trenchWidtha <=70) {
        calcResultb =  parseFloat(trenchWidtha) + parseFloat((0.75 * trenchHeighta) * 2) + parseFloat((trenchHeightd) * 2);
      } else if (soilTypea === 'A' && soilTypeb === 'C' && trenchWidtha <=70) {
        calcResultb =  parseFloat(trenchWidtha) + parseFloat((0.75 * trenchHeighta) * 2) + parseFloat((1.5 * trenchHeightd) * 2);
      } else if (soilTypea === 'B' && soilTypeb === 'A' && trenchWidtha <=70) {
        calcResultb =  parseFloat(trenchWidtha) + parseFloat((trenchHeighta) * 2) + parseFloat((trenchHeightd) * 2);
      } else if (soilTypea === 'B' && soilTypeb === 'C' && trenchWidtha <=70) {
        calcResultb =  parseFloat(trenchWidtha) + parseFloat((trenchHeighta) * 2) + parseFloat((1.5 * trenchHeightd) * 2);  
      } else if (soilTypea === 'C' && soilTypeb === 'A' && trenchWidtha <=70) {
        calcResultb =  parseFloat(trenchWidtha) + parseFloat((1.5 * trenchHeighta) * 2) + parseFloat((1.5 * trenchHeightd) * 2); 
      } else if (soilTypea === 'C' && soilTypeb === 'B' && trenchWidtha <=70) {
        calcResultb =  parseFloat(trenchWidtha) + parseFloat((1.5 * trenchHeighta) * 2) + parseFloat((1.5 * trenchHeightd) * 2);        
      } else {
        calcResultb = "Consult with PE";
      }
      setResultb(calcResultb);
    };

    const handleCalculatec = () => {
      let calcResultc;
      if (trenchHeighta <=20 && trenchHeightd <=20) {
        calcResultc =  parseFloat(trenchHeighta) + parseFloat(trenchHeightd);
      } else {
        calcResultc = "Consult with PE";
      }
      setResultc(calcResultc);
    };

    const handleCalculate = () => {
      let calcResult;
      if (soilType === 'A' && trenchHeight <= 20 && trenchWidth <=100) {
        calcResult =  parseFloat(trenchWidth) + parseFloat((0.75 * trenchHeight) * 2) ;
      } else if (soilType === 'B' && trenchHeight <= 20 && trenchWidth <=100) {
        calcResult = parseFloat(trenchWidth) + parseFloat((1 * trenchHeight) * 2);
      } else if (soilType === 'C' && trenchHeight <= 20 && trenchWidth <=100) {
        calcResult = parseFloat(trenchWidth) + parseFloat((1.5 * trenchHeight) * 2);
      } else if (soilType === 'A short-term' && trenchHeight <= 20 && trenchWidth <=100) {
        calcResult = parseFloat(trenchWidth) + parseFloat((0.5 * trenchHeight) * 2);
      } else {
        calcResult = "";
      }
      setResult(calcResult);
    };

    const handleCalculatea = () => {
      let calcResulta;
      if (soilType === 'A' && trenchHeight <= 20 && trenchWidth <=100) {
        calcResulta = (parseFloat(trenchHeight*trenchHeight) +  parseFloat((0.75*trenchHeight)*(0.75*trenchHeight)))**0.5;
      } else if (soilType === 'A short-term' && trenchHeight <= 20 && trenchWidth <=100) {
        calcResulta = (parseFloat(trenchHeight*trenchHeight) +  parseFloat((0.5*trenchHeight)*(0.5*trenchHeight)))**0.5;
      } else if (soilType === 'B' && trenchHeight <= 20 && trenchWidth <=100) {
        calcResulta = (parseFloat(trenchHeight*trenchHeight) +  parseFloat((trenchHeight)*(trenchHeight)))**0.5;
      } else if (soilType === 'C' && trenchHeight <= 20 && trenchWidth <=100) {
        calcResulta = (parseFloat(trenchHeight*trenchHeight) +  parseFloat((1.5*trenchHeight)*(1.5*trenchHeight)))**0.5;
      } else {
        calcResulta = "";
      }
      setResulta(calcResulta);
    };

    const [show, toggleShow] = React.useState(true);
    
    const [showa, setShowa] = useState(false);
    const [showb, setShowb] = useState(false);
    const [showc, setShowc] = useState(false);
    const [showd, setShowd] = useState(false);
    const [showe, setShowe] = useState(false);
    const [showf, setShowf] = useState(false);

return (

    <div className="bg-purple-100 "> 
    <SignOut/>
<div className="mx-auto px-8 sm:px-16 max-w-7xl">

<h1 className="text-center text-4xl font-bold pt-10 pb-4">Trench and Excavation Construction Safety</h1>

<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-3 -ml-2">

<Popover
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 15 },
      }}
    >
      <PopoverHandler>
        <Button className='text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-5 rounded-full outline-none focus:outline-none mr-1 mb-1 mt-10 ease-linear transition-all duration-150' type="button">Rock</Button>
      </PopoverHandler>
      <PopoverContent>
      Stable Rock is natural solid mineral matter than can be excavated with vertical sides and remain intact while exposed.
It is usually identified by a rock name such as granite or sandstone. Determining whether a deposit is of this type may be
difficult unless it is known whether cracks exist and whether the cracks run into or away from the excavation.
      </PopoverContent>
    </Popover>


    <Popover
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 15 },
      }}
    >
      <PopoverHandler>
        <Button className='text-yellow-500 bg-transparent border border-solid border-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase px-8 py-5 rounded-full outline-none focus:outline-none mr-1 mb-1 mt-10 ease-linear transition-all duration-150' type="button">Type A</Button>
      </PopoverHandler>
      <PopoverContent>
      Type A Soils are cohesive soils with an unconfined compressive strength of 1.5 tons per square foot (tsf) (144 kPa) or
greater. Examples of Type A cohesive soils are often: clay, silty clay, sandy clay, clay loam, and, in some cases, silty clay
loam and sandy clay loam. No soil is Type A if it is fissured, is subject to vibration of any type, has previously been
disturbed, is part of a sloped, layered system where the layers dip into the excavation on a slope of 4 horizontal to 1
vertical (4H:1V) or greater, or has seeping water.
      </PopoverContent>
    </Popover>

    <Popover
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 15 },
      }}
    >
      <PopoverHandler>
        <Button className='text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase px-8 py-5 rounded-full outline-none focus:outline-none mr-1 mb-1 mt-10 ease-linear transition-all duration-150' type="button">Type B</Button>
      </PopoverHandler>
      <PopoverContent>
      Type B Soils are cohesive soils with an unconfined compressive strength greater than 0.5 tsf (48 kPa) but less than
1.5 tsf (144 kPa). Examples of other Type B soils are: angular gravel, silt, silt loam, previously disturbed soils unless
otherwise classified as Type C, soils that meet the unconfined compressive strength or cementation requirements of Type
A soils but are fissured or subject to vibration, dry unstable rock, and layered systems sloping into the trench at a slope less
than 4H:1V (only if the material would be classified as a Type B soil).
      </PopoverContent>
    </Popover>

    <Popover
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 15 },
      }}
    >
      <PopoverHandler>
        <Button className='text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase px-8 py-5 rounded-full outline-none focus:outline-none mr-1 mb-1 mt-10 ease-linear transition-all duration-150' type="button">Type C</Button>
      </PopoverHandler>
      <PopoverContent>
      Type C Soils are cohesive soils with an unconfined compressive strength of 0.5 tsf (48 kPa) or less. Other Type C soils
include granular soils such as gravel, sand and loamy sand, submerged soil, soil from which water is freely seeping, and
submerged rock that is not stable. Also included in this classification is material in a sloped, layered system where the layers
dip into the excavation or have a slope of four horizontal to one vertical (4H:1V) or greater.
      </PopoverContent>
    </Popover>
</div>

<h1 className="text-center text-xl font-bold pt-3 pb-3">SIMPLE SLOPE EXCAVATION</h1>

<div className="flex justify-center items-center p-1">
<form className="inline-block relative appearance-none  bg-white border-4 border-gray-500 hover:border-gray-500 p-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">
<Image 
src={trench} alt="trench" fill priority
className="rounded-2xl max-w-fit max-h-fit  shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-black/30"/>
</form>
</div>

<div className="text-center text-xl font-bold pt-1 pb-2">
  <div class="flex mt-4 md:mt-6 space-x-1 rounded-lg shadow-sm">
    
    <input type="text" placeholder="Soil type: A, B, C or A short-term" minlength="1" maxlength="18" id="hs-leading-button-add-on-with-icon" onkeydown="return /[a-zA-Z]/i.test(event.key)" name="hs-leading-button-add-on-with-icon" className="py-3 px-4 block  w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10
    focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
    value={soilType} onChange={evt => setSoilType(evt.currentTarget.value)}/>
  
  <input type="number" placeholder="Trench height 20' max" minlength="1" maxlength="5" id="hs-leading-button-add-on-with-icon" name="hs-leading-button-add-on-with-icon" className="py-3 px-4 block  w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10
  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
  required onblur={validateTextBox()} value={trenchHeight} onChange={evt => setTrenchHeight(evt.currentTarget.value)}/>

<input type="number" placeholder="Trench width 10.5'" minlength="1" maxlength="5" id="hs-leading-button-add-on-with-icon" name="hs-leading-button-add-on-with-icon" className="py-3 px-4 block  w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10
  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
  required onblur={validateTextBox()} value={trenchWidth} onChange={evt => setTrenchWidth(evt.currentTarget.value)}/>

</div>
</div>

<div className="flex justify-center py-2 max-w-7xl mx-auto px-8 sm:px-16"> 
<button className="rounded-xl bg-gradient-to-br from-[#133cf1] to-[#21fbff] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50"
onClick={() => {handleCalculate (); handleCalculatea (); toggleShow(!show );
                }}>Find Out Slope Configurations</button>
</div>

{!show && 
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-6 py-2">
          <div  className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">

          <p className="text-left text-sm font-bold sm:text-sm md:text-lg lg:text-xl xl:text-2xl py-1 ">Trench Slope [a] : {resulta}&apos;</p>
          <p className="text-left text-sm font-bold sm:text-sm md:text-lg lg:text-xl xl:text-2xl py-1 ">Trench Width [b] : {trenchWidth}&apos;</p>
          <p className="text-left text-sm font-bold sm:text-sm md:text-lg lg:text-xl xl:text-2xl py-1 ">Trench Height [h] : {trenchHeight}&apos;</p>      
          <p className="text-left text-sm font-bold sm:text-sm md:text-lg lg:text-xl xl:text-2xl py-1 ">Total Trench Width [c] : {result}&apos;</p>
          
          </div>
<form className="inline-block relative appearance-none bg-white border-2 border-gray-400 hover:border-gray-500 p-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">         
<Image 
src={soiltype}
alt="soiltype"  
fill
priority
className="rounded-xl max-w-96 max-h-96"/>
</form>
</div>
    }


<h1 className="text-center text-xl uppercase font-bold pt-3 pb-3">Excavations in Layered Soils</h1>

<div className="flex justify-center py-2 max-w-7xl mx-auto px-8 sm:px-16 space-x-4"> 

<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      
<div className="block rounded-lg bg-yellow-50 shadow-secondary-1 dark:bg-surface-dark">

  <div className="p-3 text-surface dark:text-white">

<div className="py-2">
  <input type="text" placeholder="Lower Soil type: A, B, C" minlength="1" maxlength="1" onkeydown="return /[a-zA-Z]/i.test(event.key)" className="py-1 px-1 block w-full border-gray-300 shadow-md rounded-e-lg text-md focus:z-10"
    value={soilTypea} onChange={evt => setSoilTypea(evt.currentTarget.value)}/>
</div>

<div className="py-2">
  <input type="text" placeholder="Upper Soil type: A, B, C" minlength="1" maxlength="1" onkeydown="return /[a-zA-Z]/i.test(event.key)" className="py-1 px-1 block w-full border-gray-300 shadow-md rounded-e-lg text-md focus:z-10"
    value={soilTypeb} onChange={evt => setSoilTypeb(evt.currentTarget.value)}/>
</div>


<div className="py-2">
<input type="number" placeholder="Trench width 6.5'" minlength="1" maxlength="5" className="py-1 px-1 block  w-full border-gray-300 shadow-md rounded-e-lg text-md focus:z-10"
  required onblur={validateTextBox()} value={trenchWidtha} onChange={evt => setTrenchWidtha(evt.currentTarget.value)}/>
</div>

<div className="py-2">
<input type="number" placeholder="Upper height 8'" minlength="1" maxlength="5" className="py-1 px-1 block  w-full border-gray-300 shadow-md rounded-e-lg text-md focus:z-10"
  required onblur={validateTextBox()} value={trenchHeighta} onChange={evt => setTrenchHeighta(evt.currentTarget.value)}/>
</div>

<div className="py-2">
<input type="number" placeholder="Lower height 12'" minlength="1" maxlength="5" className="py-1 px-1 block  w-full border-gray-300 shadow-md rounded-e-lg text-md focus:z-10"
  required onblur={validateTextBox()} value={trenchHeightd} onChange={evt => setTrenchHeightd(evt.currentTarget.value)}/>
</div>


    <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" 
    onClick={() => {handleClick (); handleCalculateb (); ; handleCalculatec ()}}>Result</button>
  </div>
</div>



    <div className="block rounded-lg w-40 xl:w-96 lg:w-96 bg-white shadow-secondary-1 dark:bg-surface-dark">
<form className="inline-block py-1 px-1 w-full  rounded-e-lg text-md focus:z-10 bg-white border-2 border-gray-300 hover:border-gray-500 p-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">
      <p className="text-center text-sm font-bold sm:text-sm md:text-lg lg:text-xl xl:text-xl py-1 ">Top Trench Width [c] : {resultb}&apos;</p> 
</form>
<form className="inline-block py-1 px-1 w-full  rounded-e-lg text-md focus:z-10 bg-white border-2 border-gray-300 hover:border-gray-500 p-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">
      <p className="text-center text-sm font-bold sm:text-sm md:text-lg lg:text-xl xl:text-xl py-1 ">Total Trench Height [h] : {resultc}&apos;</p>
</form>  
<form className="inline-block py-1 px-1 w-full  rounded-e-lg text-md focus:z-10 bg-white border-2 border-gray-300 hover:border-gray-500 p-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">   
      <p className="text-center text-sm font-bold sm:text-sm md:text-lg lg:text-xl xl:text-xl py-1 ">Bottom Trench Width [b] : {trenchWidtha}&apos;</p>
</form>  
<form className="inline-block py-1 px-1 w-full  rounded-e-lg text-md focus:z-10 bg-white border-2 border-gray-300 hover:border-gray-500 p-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">       
      <p className="text-center text-sm font-bold sm:text-sm md:text-lg lg:text-xl xl:text-xl py-1 ">Upper Trench Height [h<sub>2</sub>] : {trenchHeightd}&apos;</p>
</form>       
<form className="inline-block py-1 px-1 w-full  rounded-e-lg text-md focus:z-10 bg-white border-2 border-gray-300 hover:border-gray-500 p-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">       
      <p className="text-center text-sm font-bold sm:text-sm md:text-lg lg:text-xl xl:text-xl py-1 ">Lower Trench Height [h<sub>1</sub>] : {trenchHeighta}&apos;</p>
 </form>     
 <div className="p-2">
        <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={handleClick}>Edit</button>
</div> 
</div>

    </ReactCardFlip>

<form className="inline-block relative appearance-none w-60 xl:w-96 lg:w-96 bg-white border-2 border-gray-400 hover:border-gray-500 p-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">

      <div className="pb-3">
      <option className='px-2 cursor-pointer py-2 bg-red-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex' type="button" 
      onClick={() => setShowa(!showa)}>TYPE B SOIL OVER TYPE A SOIL {showa}</option>
      {showa ? (
      <Image 
      src={img7}
      alt="img7"  
      fill
      priority
      className="rounded-xl max-w-fit max-h-fit"/>
      ) : null}
      </div>
      <div className="pb-3">
      <option className='px-2 cursor-pointer py-2 bg-yellow-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex' type="button" 
      onClick={() => setShowb(!showb)}>TYPE C SOIL OVER TYPE A SOIL {showb}</option>
      {showb ? (
      <Image 
      src={img4}
      alt="img4"  
      fill
      priority
      className="rounded-xl max-w-fit max-h-fit"/>
      ) : null}
      </div>
      <div className="pb-3">
      <option className='px-2 cursor-pointer py-2 bg-green-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex' type="button" 
      onClick={() => setShowc(!showc)}>TYPE A SOIL OVER TYPE B SOIL {showc}</option>
      {showc ? (
      <Image 
      src={img6}
      alt="img6"  
      fill
      priority
      className="rounded-xl max-w-fit max-h-fit"/>
      ) : null}
      </div>
      <div className="pb-3">
      <option className='px-2 cursor-pointer py-2 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex' type="button" 
      onClick={() => setShowf(!showf)}>TYPE C SOIL OVER TYPE B SOIL {showf}</option>
      {showf ? (
      <Image 
      src={img3}
      alt="img3"  
      fill
      priority
      className="rounded-xl max-w-fit max-h-fit"/>
      ) : null}
      </div>    
      <div className="pb-3">
      <option className='px-2 cursor-pointer py-2 bg-purple-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex' type="button" 
      onClick={() => setShowd(!showd)}>TYPE A SOIL OVER TYPE C SOIL {showd}</option>
      {showd ? (
      <Image 
      src={img5}
      alt="img5"  
      fill
      priority
      className="rounded-xl max-w-fit max-h-fit"/>
      ) : null}
      </div>   
      <div className="pb-3">
      <option className='px-2 cursor-pointer py-2 bg-gray-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex' type="button" 
      onClick={() => setShowe(!showe)}>TYPE B SOIL OVER TYPE C SOIL {showe}</option>
      {showe ? (
      <Image 
      src={img2}
      alt="img2"  
      fill
      priority
      className="rounded-xl max-w-fit max-h-fit"/>
      ) : null}
      </div>       
    </form>

</div>

<section className="flex justify-center items-center max-w-8xl rounded-lg  text-black-600">
    <div className="font-bold">&copy; {currentYear} OSP TELCO ALL RIGHTS RESERVED</div>
</section>

</div>
</div>
  )
}

export default Excavation
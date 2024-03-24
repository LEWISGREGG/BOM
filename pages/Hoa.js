import React, {useState} from 'react';
import Image from 'next/image';
import SignOut from "../components/SignOut";




function Hoa() {

  const currentYear = new Date().getFullYear();

  const [catv, setCatv] = useState();
  const [catvInch, setCatvInch] = useState();
  const [lumen, setLumen] = useState();
  const [lumenInch, setLumenInch] = useState();
  const [difference, setDifference] = useState();
  const [differenceInch, setDifferenceInch] = useState();

  const [power, setPower] = useState();
  const [powerInch, setPowerInch] = useState();
  const [attchOne, setAttchOne] = useState();
  const [attchOneInch, setAttchOneInch] = useState();
  const [attchTwo, setAttchTwo] = useState();
  const [attchTwoInch, setAttchTwoInch] = useState();
  const [attchThree, setAttchThree] = useState();
  const [attchThreeInch, setAttchThreeInch] = useState();
  const [make, setMake] = useState();


  return (
<div className="bg-yellow-50"> 
<SignOut/>

<div className="py-5 max-w-8xl mx-auto px-8 sm:px-16"> 

<h2 className="text-center font-bold text-lg mb-2">
            Pole Attachement Calculator </h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 -ml-2">

<div className="space-y-4 text-xs ">

<p className="font-bold text-sm">· Power (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={power} onChange={evt => setPower(evt.currentTarget.value)} />
 <input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={powerInch} onChange={evt => setPowerInch(evt.currentTarget.value)} />
 </p>

<p className="font-bold text-sm">· LUMEN (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={catv} onChange={evt => setCatv(evt.currentTarget.value)} />
 <input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={catvInch} onChange={evt => setCatvInch(evt.currentTarget.value)} /></p>

<p className="font-bold text-sm">· CATV (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={lumen} onChange={evt => setLumen(evt.currentTarget.value)} /> 
<input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={lumenInch} onChange={evt => setLumenInch(evt.currentTarget.value)} /></p>

<p className="font-bold text-sm">· Attone (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchOne} onChange={evt => setAttchOne(evt.currentTarget.value)} /> 
<input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchOneInch} onChange={evt => setAttchOneInch(evt.currentTarget.value)} /></p>

<p className="font-bold text-sm">· Atttwo (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchTwo} onChange={evt => setAttchTwo(evt.currentTarget.value)} /> 
<input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchTwoInch} onChange={evt => setAttchTwoInch(evt.currentTarget.value)} /></p>

<p className="font-bold text-sm">· Attthree (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchThree} onChange={evt => setAttchThree(evt.currentTarget.value)} /> 
<input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchThreeInch} onChange={evt => setAttchThreeInch(evt.currentTarget.value)} /></p>

<button className=' shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none
                    text-white font-bold ml-2 py-2 px-2 rounded' type="button" 
                    onClick={() => {
                    setDifference((Math.floor((parseFloat(lumen*12) + parseFloat(lumenInch))/12)) + parseFloat(1))
                    setDifferenceInch(((parseFloat(lumen*12) + parseFloat(lumenInch))/12) - ((Math.floor(((parseFloat(lumen*12) + parseFloat(lumenInch)))/12))))
                    }}>
                      
                      Calculate</button>

<p className="font-bold text-sm" >· LUMEN HOA : {difference}&apos; {((differenceInch)*12)}&apos;</p>       

</div>

</div>





<section className="flex justify-center items-center max-w-8xl rounded-lg  text-black-600">
    <div className="font-bold">&copy; {currentYear} OSP TELCO ALL RIGHTS RESERVED</div>
</section>



</div>
</div>

  );
}

export default Hoa;



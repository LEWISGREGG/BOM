import React, { useState } from 'react'
import SignOut from '../components/SignOut'

function AASHTO() {
  const currentYear = new Date().getFullYear();

  const [soil, setSoil] = useState();
  const [ten, setTen] = useState();
  const [forty, setForty] = useState();
  const [twohun, setTwohun] = useState();
  const [LL, setLL] = useState();
  const [PL, setPL] = useState();
  const [PI, setPI] = useState();
  const [result, setResult] = useState(0);
  const [resulta, setResulta] = useState(0);

  function validateTextBox() {
    if (document.getElementById("textbox") !='') {
        
    } else {
        alert("Please enter a number");
    }
}


const handleCalculatea = () => {
  let calcResulta;
  if (ten <= '50' && forty <= '30' && twohun <= '15' && PI <=6) {
    calcResulta = "A-1-a stone fragments, gravel and sand " ;
  } else if (forty <= '50' && twohun <= '25' && PI <=6) {
    calcResulta = "A-1-b Stone fragments, gravel and sand";
  } else if (forty >= '51' && twohun <=10) {
    calcResulta = "A-3 fine sand";
  } else if (twohun <= '35' && LL <= '40' && PI <=10) {
    calcResulta = "A-2-4 silty or clayey gravel and sand";
  } else if (twohun <= '35' && LL >= '41' && PI <=10) {
    calcResulta = "A-2-5 silty or clayey gravel and sand";
  } else if (twohun <= '35' && LL <= '40' && PI >=11) {
    calcResulta = "A-2-6 silty or clayey gravel and sand"; 
  } else if (twohun <= '35' && LL >= '41' && PI >=11) {
    calcResulta = "A-2-7 silty or clayey gravel and sand";
  } else if (twohun >= '36' && LL <= '40' && PI <=10) {
    calcResulta = "A-4 silty soil";   
  } else if (twohun >= '36' && LL >= '41' && PI <=10) {
    calcResulta = "A-5 silty soil"; 
  } else if (twohun >= '36' && LL <= '40' && PI >=11) {
    calcResulta = "A-6 clayey soil";  
  } else if (twohun >= '36' && LL >= '41' && PI >=11 && PI <= parseFloat(LL) - parseFloat(30)) {
    calcResulta = "A-7-5 clayey soil";
  } else if (twohun >= '36' && LL >= '41' && PI >=11 && PI >= parseFloat(LL) - parseFloat(30)) {
    calcResulta = "A-7-6 clayey soil";     
  } else {
    calcResulta = "N/A";
  }
  setResulta(calcResulta);
};


const handleCalculate = () => {
  let calcResult;
  if (twohun <= '35' && LL <= '40' && PI >='11') {
    calcResult = 0.01 * (parseFloat(twohun) - parseFloat(16)) * (parseFloat(PI) - parseFloat(10));
  } else if (twohun <= '35' && LL >= '41' && PI >='11') {
    calcResult = 0.01 * (parseFloat(twohun) - parseFloat(16)) * (parseFloat(PI) - parseFloat(10));
  } else if (calcResult <= 0) {
    calcResult = 0;
  } else {
    calcResult = (parseFloat(twohun) - parseFloat(35)) * (parseFloat(0.2) +  parseFloat(0.005*(parseFloat(LL) - parseFloat(40)))) +  parseFloat(0.01*((parseFloat(twohun) - parseFloat(15)) * (parseFloat(PI) - parseFloat(10))));
  }
  setResult(calcResult);
};


  return (
    <div className="bg-red-100 "> 
    <SignOut/>
    <div className="py-2 max-w-7xl mx-auto px-8 sm:px-16"> 
    <h2 className="text-center font-bold text-4xl mb-2 py-2 underline decoration-indigo-500">
    AASHTO soil classification</h2>
    </div>
    <div className="flex justify-center space-x-10 mb-5 ">
    <div className="max-w-max px-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

    <div class="flex flex-col items-center pb-6 ">
    <h2 className="text-center text-md decoration-indigo-500">
    Please enter necessary values in the input field</h2>
        <div className="flex mt-4 md:mt-6 space-x-1 ">
          
        <div className="border-solid border-2 rounded-none border-gray-200 p-1" >
        Soil

        <input type="text" placeholder="A" className="flex w-6 items-center  border-solid border-2 rounded-none border-gray-200 focus:outline-none disabled:cursor-not-allowed 
      disabled:text-gray-200 py-1 px-1 leading-tight" name="user_input" onkeydown="return /[a-zA-Z]/i.test(event.key)"
        value={soil} onChange={evt => setSoil(evt.currentTarget.value)} /> 
      </div>
      <div className=" border-solid border-2 rounded-none border-gray-200 p-1" >
        % finer based on sieve analysis
        <div className="flex justify-center space-x-2">
        <div className=" border-solid border-2 rounded-none border-gray-200 p-1" >
        #10
        <input type="number" placeholder="49" min="0" oninput="this.value = Math.abs(this.value)" className="flex w-12 items-center  border-solid border-2 rounded-none border-gray-200 focus:outline-none disabled:cursor-not-allowed 
      disabled:text-gray-200 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
        value={ten} onChange={evt => setTen(evt.currentTarget.value)} /> 

        </div>
        <div className=" border-solid border-2 rounded-none border-gray-200 p-1" >
        #40
      <input type="number" placeholder="14" min="0" oninput="this.value = Math.abs(this.value)" className="flex w-12 items-center  border-solid border-2 rounded-none border-gray-200 focus:outline-none disabled:cursor-not-allowed 
      disabled:text-gray-200 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
        value={forty} onChange={evt => setForty(evt.currentTarget.value)} /> 

        </div>
        <div className=" border-solid border-2 rounded-none border-gray-200 p-1" >
        #200
      <input type="number" placeholder="26" min="0" oninput="this.value = Math.abs(this.value)" className="flex w-12 items-center  border-solid border-2 rounded-none border-gray-200 focus:outline-none disabled:cursor-not-allowed 
      disabled:text-gray-200 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
        value={twohun} onChange={evt => setTwohun(evt.currentTarget.value)} /> 

        </div>
        </div>
      </div>
      <div className="border-solid border-2 rounded-none border-gray-200 p-1" >
        LL
      <input type="number" placeholder="52" min="0" oninput="this.value = Math.abs(this.value)" className="flex w-12 items-center  border-solid border-2 rounded-none border-gray-200 focus:outline-none disabled:cursor-not-allowed 
      disabled:text-gray-200 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
        value={LL} onChange={evt => setLL(evt.currentTarget.value)} /> 

      </div>
      <div className=" border-solid border-2 rounded-none border-gray-200 p-1" >
        PL
      <input type="number" placeholder="30" min="0" oninput="this.value = Math.abs(this.value)" className="flex w-12 items-center  border-solid border-2 rounded-none border-gray-200 focus:outline-none disabled:cursor-not-allowed 
      disabled:text-gray-200 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
        value={PL} onChange={evt => setPL(evt.currentTarget.value)} /> 

      </div>
      <div className=" border-solid border-2 rounded-none border-gray-200 p-1" >
        PI
      <input type="number" placeholder="12" min="0" oninput="this.value = Math.abs(this.value)" className="flex w-12 items-center  border-solid border-2 rounded-none border-gray-200 focus:outline-none disabled:cursor-not-allowed 
      disabled:text-gray-200 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
        value={PI} onChange={evt => setPI(evt.currentTarget.value)} /> 

      </div>
        </div>
    </div>
</div>
</div>
<p className="text-center font-bold text-xl mb-1 py-1 ">GI formula for A-2-6 and A-2-7 : GI = 0.01 (F – 15) (PI – 10)</p>
<p className="text-center font-bold text-xl mb-1 py-1 ">GI formula : GI = (F – 35) [0.2 + 0.005(LL – 40)] + 0.01(F – 15)(PI – 10)</p>

<div className="flex justify-center py-2 max-w-7xl mx-auto px-8 sm:px-16"> 
<button className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50"
onClick={handleCalculatea}> Find Out AASHTO Soil Group</button>
</div>

<div className="flex justify-center py-2 max-w-7xl mx-auto px-8 sm:px-16"> 
<button className="rounded-xl bg-gradient-to-br from-[#23eb23] to-[#fff021] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50"
onClick={handleCalculate}>Find Out Group Index</button>
</div>

    <p className="text-center font-bold text-4xl mb-2 py-2 ">Group classification : {resulta}</p>
    <p className="text-center font-bold text-4xl mb-2 py-2 ">Group Index : {Math.round(result)}</p>


    <section className="flex justify-center items-center max-w-8xl rounded-lg  text-black-600">
    <div className="font-bold">&copy; {currentYear} OSP TELCO ALL RIGHTS RESERVED</div>
    </section>


    </div>
  )
}

export default AASHTO
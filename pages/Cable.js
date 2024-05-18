import React, {useState} from 'react';
import Image from 'next/image';
import capture from '.././components/capture.png'
import capturea from '.././components/capturea.png'
import captureaa from '.././components/captureaa.png'
import SignOut from "../components/SignOut";

function Cable () {
    const currentYear = new Date().getFullYear();

    const [totalLength, setTotalLength] = useState();
    const [lowerF, setLowerF] = useState();
    const [upperF, setUpperF] = useState();
    const [linearEx, setLinearEx] = useState();
    const [newLength, setNewLength] = useState(0);

    const [tapeWeight, setTapeWeight] = useState();
    const [tapeLength, setTapeLength] = useState();
    const [tapeTension, setTapeTension] = useState();
    const [newSag, setNewSag] = useState(0);

    const [uniformLoad, setUniformLoad] = useState();
    const [uniformLength, setUniformLength] = useState();
    const [uniformSag, setUniformSag] = useState();
    const [newUniformLength, setNewUniformLength] = useState(0);

    const [horizontalForce, setHorizontalForce] = useState(0);
    const [verticalForce, setVerticalForce] = useState(0);
    const [uniformForce, setUniformForce] = useState(0);
    const [resultantForce, setResultantForce] = useState(0);
    const [resultantLength, setResultantLength] = useState(0);
    const [resultantSag, setResultantSag] = useState(0);
    const [angle, setAngle] = useState(0);
    const [trueLength, setTrueLength] = useState(0);

    const [uniformWeight, setUniformWeight] = useState(0);
    const [heightOne, setHeightOne] = useState(0);
    const [heightTwo, setHeightTwo] = useState(0);
    const [spanLength, setSpanLength] = useState(0);

    const [spanA, setSpanA] = useState(0);
    const [spanB, setSpanB] = useState(0);
    const [spanSA, setSpanSA] = useState(0);
    const [spanSB, setSpanSB] = useState(0);
    const [spanTotal, setSpanTotal] = useState(0);

    const [spanRone, setSpanRone] = useState(0);
    const [spanRonex, setSpanRonex] = useState(0);
    const [spanRoney, setSpanRoney] = useState(0);
    const [spanAngleOne, setSpanAngleOne] = useState(0);

    const [spanRtwo, setSpanRtwo] = useState(0);
    const [spanRtwox, setSpanRtwox] = useState(0);
    const [spanRtwoy, setSpanRtwoy] = useState(0);
    const [spanAngleTwo, setSpanAngleTwo] = useState(0);

    const [unevenWeight, setUnevenWeight] = useState(0);
    const [unevenSpanone, setUnevenSpanone] = useState(0);
    const [unevenSpantwo, setUnevenSpantwo] = useState(0);
    const [unevenHeightone, setUnevenHeightone] = useState(0);
    const [unevenHeighttwo, setUnevenHeighttwo] = useState(0);
    const [unevenTensionone, setUnevenTensionone] = useState(0);
    const [unevenTensiontwo, setUnevenTensiontwo] = useState(0);
    const [unevenSpan, setUnevenSpan] = useState(0);

    function validateTextBox() {
        if (document.getElementById("textbox") !='') {
            
        } else {
            alert("Please enter a number");
        }
    }

    return (

<div className="bg-pink-50">
    <SignOut/>
        <div className="py-5 max-w-8xl mx-auto px-8 sm:px-16"> 
            <h2 className="text-center font-bold text-lg mb-2">
            FORCE AND TENSION IN FLEXNAP CABLES WITH UNIFORM LOADS </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 px-32 py-10 bg-pink-50 text-gray-700 rounded-lg">

<div className="space-y-4 text-xs text-gray-800 border-r-2  border-purple-300 mr-2 ">
    <h5 className="font-bold text-base text-decoration-line: underline ">Cable Temperature Fluctuation </h5>
    <p className="font-bold text-sm">· L=l*Δ*(T<sub>u</sub>-T<sub>l</sub>)</p>
    <p className="font-bold text-sm">· Lower °C (T<sub>l</sub>) :  <input type="number" placeholder="23" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
 value={lowerF} onChange={evt => setLowerF(evt.currentTarget.value)} /> </p>

    <p className="font-bold text-sm">· Upper °C (T<sub>u</sub>) :  <input type="number" placeholder="34" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
 value={upperF} onChange={evt => setUpperF(evt.currentTarget.value)} /> </p>


<p className="font-bold text-sm" >· Initial Length (l) m :  <input type="number"  placeholder="256" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
 value={totalLength} onChange={evt => setTotalLength(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm">· Linear Expansion (Δ) :  <input type="number" placeholder="0.0000005" className="bg-gray-50 w-24 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
 value={linearEx} onChange={evt => setLinearEx(evt.currentTarget.value)} /> </p>

<button className=' shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none
                    text-white font-bold ml-6 py-2 px-2 rounded' type="button" 
                    onClick={() => setNewLength((parseFloat(totalLength) + parseFloat((totalLength*linearEx*(parseFloat(upperF)-parseFloat(lowerF))))))}>Calculate</button>

<p className="font-bold text-sm" >· Final Length (L) : {newLength.toFixed(2)} m</p>       

</div>

<div className="space-y-4 text-xs text-gray-800  border-r-2 mr-2 border-green-300 ">
    <h5 className="font-bold text-base text-decoration-line: underline">Cable Sag Correction</h5>
    <p className="font-bold text-sm">· ΔL=w<sup>2</sup>*L<sup>3</sup> / 24*P<sup>2</sup></p>

<p className="font-bold text-sm">· Cable Length (L) m :  <input type="number" placeholder="156" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
 value={tapeLength} onChange={evt => setTapeLength(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm">· Cable Tension (P) N :  <input type="number" placeholder="67" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
 value={tapeTension} onChange={evt => setTapeTension(evt.currentTarget.value)} /> </p>

    <p className="font-bold text-sm">· Cable Weight (w) N/m :  <input type="number" placeholder="1.6" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
 value={tapeWeight} onChange={evt => setTapeWeight(evt.currentTarget.value)} /> </p>
<p className="font-bold text-sm"> <input type="hidden"/>Note: Sag correction is negative</p>

<button className=' shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none
                    text-white font-bold ml-6 py-2 px-2 rounded' type="button" onClick={() => setNewSag ((tapeWeight*tapeWeight*(tapeLength*tapeLength*tapeLength))/(24*(tapeTension*tapeTension)))}>Calculate</button>

<p className="font-bold text-sm" >· Sag correction (ΔL) : {newSag.toFixed(2)} m</p>  

</div>

<div className="space-y-4 text-xs text-gray-800  ">

    <h5 className="font-bold text-base text-decoration-line: underline">Length of Uniformly Loaded Cables</h5>
    <p className="font-bold text-sm">· s=L + 8*h<sup>2</sup>/(3*L) </p>

 <p className="font-bold text-sm">· Sag (h) ft :  <input type="number" placeholder="2" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
 value={uniformSag} onChange={evt => setUniformSag(evt.currentTarget.value)} /> </p>  

    <p className="font-bold text-sm">· Uniform Load lb/ft :  <input type="number" placeholder="1.4" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
 value={uniformLoad} onChange={evt => setUniformLoad(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm">· Cable Length (L) ft :  <input type="number" placeholder="235" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" id="textbox" required onblur={validateTextBox()}
 value={uniformLength} onChange={evt => setUniformLength(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm"> <input type="hidden"/>Note that the equation is not valid when h {">"} L / 4</p>


<button className=' shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none
                    text-white font-bold ml-6 py-2 px-2 rounded' type="button" 
                    onClick={() => setNewUniformLength (((parseFloat(uniformLength)+(parseFloat(8*(uniformSag*uniformSag)))/(3*uniformLength))))}>Calculate</button>

<p className="font-bold text-sm" >· Parabola Cable Length (s): {newUniformLength.toFixed(2)} ft</p>  

</div>

</div>
<h5 className="font-bold text-lg text-decoration-line: text-center">Uniformly Loaded Cables With Horizontal Loads</h5>
<div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-y-10 px-32 py-10 bg-pink-50 text-gray-700 rounded-lg">

<div className="space-y-4 text-xs text-gray-800 ">
    
    <p className="font-bold text-sm">· R<sub>1x</sub>=R<sub>2x</sub>=q*L<sup>2</sup>/(8*h) </p>
    <p className="font-bold text-sm">· R<sub>1y</sub>=R<sub>2y</sub>=q*L/2 </p>
    <p className="font-bold text-sm">· R<sub>1</sub>=R<sub>2</sub>=(R<sub>1x</sub><sup>2</sup> + R<sub>1y</sub><sup>2</sup>)<sup>0.5</sup></p>
    <p className="font-bold text-sm">· R<sub>1</sub>=R<sub>2</sub>=(R<sub>2x</sub><sup>2</sup> + R<sub>2y</sub><sup>2</sup>)<sup>0.5</sup></p>
    <p className="font-bold text-sm">· θ<sub>1</sub>=tan<sup>-1</sup>*(R<sub>1y</sub>/R<sub>1x</sub>)</p>
    <p className="font-bold text-sm">· θ<sub>2</sub>=tan<sup>-1</sup>*(R<sub>2y</sub>/R<sub>2x</sub>)</p>
    <p className="font-bold text-sm">· s=L + 8*h<sup>2</sup>/(3*L) </p>

<p className="font-bold text-sm">· Sag (h) ft :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={resultantSag} onChange={evt => setResultantSag(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm">· Cable Length (L) ft :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={resultantLength} onChange={evt => setResultantLength(evt.currentTarget.value)} /> </p>
    <p className="font-bold text-sm">· Uniform Load lb/ft (q):  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={uniformForce} onChange={evt => setUniformForce(evt.currentTarget.value)} /> </p>


<button className=' shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none
                    text-white font-bold ml-6 py-2 px-2 rounded' type="button" 
                    onClick={() => {
                    setHorizontalForce ((uniformForce*(resultantLength*resultantLength))/(8*resultantSag));
                    setVerticalForce ((uniformForce*resultantLength)/(2));
                    setResultantForce ((parseFloat(horizontalForce*horizontalForce)+parseFloat(verticalForce*verticalForce))**0.5);
                    setTrueLength((parseFloat(resultantLength)+(parseFloat(8*(resultantSag*resultantSag)))/(3*resultantLength)));
                    setAngle (((Math.atan(verticalForce/horizontalForce))*180)/3.14);
                    }}> Calculate</button>
                        
                
<p className="font-bold text-sm" >· Horizontal Support Force (R<sub>1x</sub>=R<sub>2x</sub>) : {horizontalForce.toFixed(2)} lb</p> 
<p className="font-bold text-sm" >· Vertical Support Force (R<sub>1y</sub>=R<sub>2y</sub>) : {verticalForce.toFixed(2)} lb</p> 
<p className="font-bold text-sm" >· Resultant Support Force (R<sub>1</sub>=R<sub>2</sub>) : {resultantForce.toFixed(2)} lb</p> 
<p className="font-bold text-sm" >· True Cable Length (s) : {trueLength.toFixed(2)} lb</p>
<p className="font-bold text-sm" >· Angle (θ) : {angle.toFixed(2)} °</p>
</div> 

<div className="flex relative justify-center items-center lg:h-full  lg:w-full md:h-96 md:w-96 sm:h-96 sm:w-96 flex-shrink-0 ">
<Image
    src={capture}
    alt="Cable"  
    fill
    priority
    className="rounded-2xl"
    />
</div>
</div>

<h5 className="font-bold text-lg text-decoration-line: text-center">Uniformly Loaded Cables with Inclined Chords</h5>
<div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-y-10 px-32 py-10 bg-pink-50 text-gray-700 rounded-lg">

<div className="space-y-4 text-xs text-gray-800 ">
    
    <p className="font-bold text-sm">· R<sub>1x</sub>=R<sub>2x</sub>=q*a<sup>2</sup>/(2*h<sub>1</sub>)
    =q*b<sup>2</sup>/(2*h<sub>2</sub>) </p>
    <p className="font-bold text-sm">· R<sub>1</sub>=(R<sub>1x</sub><sup>2</sup> + (q*a<sup>2</sup>))<sup>0.5</sup></p>
    <p className="font-bold text-sm">· R<sub>2</sub>=(R<sub>2x</sub><sup>2</sup> + (q*b<sup>2</sup>))<sup>0.5</sup></p>
    <p className="font-bold text-sm">· R<sub>1y</sub>=(R<sub>1</sub><sup>2</sup> - R<sub>1x</sub><sup>2</sup>)<sup>0.5</sup></p>
    <p className="font-bold text-sm">· R<sub>2y</sub>=(R<sub>2</sub><sup>2</sup> - R<sub>2x</sub><sup>2</sup>)<sup>0.5</sup></p>
    <p className="font-bold text-sm">· θ<sub>1</sub>=cos<sup>-1</sup>*(R<sub>1x</sub>/R<sub>1</sub>)</p>
    <p className="font-bold text-sm">· θ<sub>2</sub>=cos<sup>-1</sup>*(R<sub>2x</sub>/R<sub>2</sub>)</p>

    <p className="font-bold text-sm">· s<sub>a</sub>=a*(1+ 0.67*(h<sub>1</sub>/a)<sup>2</sup>)</p>
    <p className="font-bold text-sm">· s<sub>b</sub>=b*(1+ 0.67*(h<sub>2</sub>/b)<sup>2</sup>)</p>
    <p className="font-bold text-sm">· S=s<sub>a</sub> + s<sub>b</sub></p>


<p className="font-bold text-sm">· Span (s<sub>a</sub>) ft :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={spanA} onChange={evt => setSpanA(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm">· Span (s<sub>b</sub>) ft :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={spanB} onChange={evt => setSpanB(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm">· Height (h<sub>1</sub>) ft :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={heightOne} onChange={evt => setHeightOne(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm">· Height (h<sub>2</sub>) ft :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={heightTwo} onChange={evt => setHeightTwo(evt.currentTarget.value)} /> </p>


<p className="font-bold text-sm">· Cable Length (L) ft :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={spanLength} onChange={evt => setSpanLength(evt.currentTarget.value)} /> </p>
    <p className="font-bold text-sm">· Uniform Load lb/ft (q):  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={uniformWeight} onChange={evt => setUniformWeight(evt.currentTarget.value)} /> </p>


<button className=' shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none
                    text-white font-bold ml-6 py-2 px-2 rounded' type="button" 
                    onClick={() => {
                    setSpanRonex ((uniformWeight*(spanA*spanA))/(2*heightOne));
                    setSpanRone ((parseFloat(spanRonex*spanRonex) + parseFloat(uniformWeight*(spanA))**2)**0.5);
                    setSpanRoney ((parseFloat(spanRone*spanRone) - parseFloat(spanRonex*spanRonex))**0.5);

                    setSpanRtwox ((uniformWeight*(spanB*spanB))/(2*heightTwo));
                    setSpanRtwo ((parseFloat(spanRtwox*spanRtwox) + parseFloat(uniformWeight*(spanB))**2)**0.5);
                    setSpanRtwoy ((parseFloat(spanRtwo*spanRtwo) - parseFloat(spanRtwox*spanRtwox))**0.5);

                    setSpanAngleOne (((Math.acos(spanRonex/spanRone))*180)/3.14);
                    setSpanAngleTwo (((Math.acos(spanRtwox/spanRtwo))*180)/3.14);

                    setSpanSA (spanA*(parseFloat(1) + parseFloat(0.678*((heightOne/spanA)**2))));
                    setSpanSB (spanB*(parseFloat(1) + parseFloat(0.678*((heightTwo/spanB)**2))));
                    setSpanTotal (parseFloat(spanSA) + parseFloat(spanSB));
                    }}> Calculate</button>
                        

<p className="font-bold text-sm" >· Horizontal Force (R<sub>1x</sub>) : {spanRonex.toFixed(2)} lb</p> 
<p className="font-bold text-sm" >· Vertical Force (R<sub>1y</sub>) : {spanRoney.toFixed(2)} lb</p> 
<p className="font-bold text-sm" >· Resultant Force (R<sub>1</sub>) : {spanRone.toFixed(2)} lb</p> 

<p className="font-bold text-sm" >· Horizontal Force (R<sub>2x</sub>) : {spanRtwox.toFixed(2)} lb</p> 
<p className="font-bold text-sm" >· Verical Force (R<sub>2y</sub>) : {spanRtwoy.toFixed(2)} lb</p> 
<p className="font-bold text-sm" >· Resultant Force (R<sub>2</sub>) : {spanRtwo.toFixed(2)} lb</p> 

<p className="font-bold text-sm" >· Angle (θ<sub>1</sub>) : {spanAngleOne.toFixed(2)} °</p>
<p className="font-bold text-sm" >· Angle (θ<sub>2</sub>) : {spanAngleTwo.toFixed(2)} °</p>

<p className="font-bold text-sm" >· Span a (s<sub>a</sub>) : {spanSA.toFixed(2)} ft</p> 
<p className="font-bold text-sm" >· Span b (s<sub>b</sub>) : {spanSB.toFixed(2)} ft</p> 
<p className="font-bold text-sm" >· Total Span (S) : {spanTotal.toFixed(2)} ft</p> 

</div> 

<div className="flex relative justify-center items-center lg:h-full lg:w-full md:h-96 md:w-96 sm:h-96 sm:w-96  flex-shrink-0 ">
<Image
    src={capturea}
    alt="Cable"  
    fill
    priority
    className="rounded-2xl"
    />
</div>
</div>

<h5 className="font-bold text-lg text-decoration-line: text-center">Uniformly Loaded Cables with Inclined Chords</h5>
<div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-y-10 px-32 py-10 bg-pink-50 text-gray-700 rounded-lg">

<div className="space-y-4 text-xs text-gray-800 ">
    
<p className="font-bold text-sm">· L - span of a cable</p>
<p className="font-bold text-sm">· T - cable tension</p>
<p className="font-bold text-sm">· h - difference in height level between two supports</p>

<p className="font-bold text-sm">· h<sub>1</sub> - distance between attachment and sag centerpoint</p>
<p className="font-bold text-sm">· h<sub>2</sub> - distance between attachment and sag centerpoint</p>

<p className="font-bold text-sm">· s<sub>1</sub> - distance of support at the lower level point A from O</p>
<p className="font-bold text-sm">· s<sub>2</sub> - distance of support at the upper-level point B from O</p>

<p className="font-bold text-sm">· w - weight per unit length of the fiber cable (1/2 pound per foot)</p>

<p className="font-bold text-sm">· T<sub>1</sub>=(w*s<sub>1</sub><sup>2</sup>) / (2*h<sub>1</sub>)</p>
<p className="font-bold text-sm">· T<sub>2</sub>=(w*s<sub>2</sub><sup>2</sup>) / (2*h<sub>2</sub>)</p>

<p className="font-bold text-sm">· Span (s<sub>1</sub>) ft :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={unevenSpanone} onChange={evt => setUnevenSpanone(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm">· Span (s<sub>2</sub>) ft :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={unevenSpantwo} onChange={evt => setUnevenSpantwo(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm">· Height (h<sub>1</sub>) ft :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={unevenHeightone} onChange={evt => setUnevenHeightone(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm">· Height (h<sub>1</sub>) ft :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={unevenHeighttwo} onChange={evt => setUnevenHeighttwo(evt.currentTarget.value)} /> </p>

<p className="font-bold text-sm">· Cable Weight (w) lbs :  <input type="number" className="bg-gray-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={unevenWeight} onChange={evt => setUnevenWeight(evt.currentTarget.value)} /> </p>

<button className=' shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none
                    text-white font-bold ml-6 py-2 px-2 rounded' type="button" 
                    onClick={() => {
                    setUnevenSpan (parseFloat(unevenSpanone) + parseFloat(unevenSpantwo));

                    setUnevenTensionone ((unevenWeight*(unevenSpanone*unevenSpanone))/(2*unevenHeightone));
                    setUnevenTensiontwo ((unevenWeight*(unevenSpantwo*unevenSpantwo))/(2*unevenHeighttwo));

                    }}> Calculate</button>
                        
<p className="font-bold text-sm" >· Total Span (L) : {unevenSpan.toFixed(2)} ft</p> 
<p className="font-bold text-sm" >· Cable tension in the first span (T<sub>1</sub>) : {unevenTensionone.toFixed(2)} lb</p> 
<p className="font-bold text-sm" >· Cable tension in the second span (T<sub>2</sub>) : {unevenTensiontwo.toFixed(2)} lb</p> 

</div> 

<div className="flex relative justify-center items-center lg:h-full lg:w-full md:h-96 md:w-96 sm:h-96 sm:w-96  flex-shrink-0 ">
<Image
    src={captureaa}
    alt="Cable"  
    fill
    priority
    className="rounded-2xl"
    />
</div>
</div>

    <section className="flex justify-center items-center max-w-8xl rounded-lg  text-black-600">
    <div className="font-bold">&copy; {currentYear} OSP TELCO ALL RIGHTS RESERVED</div>
    </section>

    </div>
</div>

);
}

export default Cable


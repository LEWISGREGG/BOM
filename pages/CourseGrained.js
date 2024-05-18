import React, { useState, Component } from 'react'
import SignOut from '../components/SignOut'
import { useRouter } from "next/router";

function CourseGrained() {
    const router = useRouter();

    const View1 = ({onClick}) => (

    <div className=" flex justify-center space-x-10 mb-5">
    <div className="w-full max-w-sm bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
          I
        </button>
    
    </div>
    <div class="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Is gravel fraction &#62; sand fraction?</h5>

        <div className="flex mt-4 md:mt-6">
        <button className="button" onClick={() => SetView(2)}>
        YES
      </button>
      <button className="button" onClick={() => SetView(3)}>
        NO
      </button>
        </div>
    </div>
</div>
</div>
    );

    const View2 = ({onClick}) => (
      <div className=" flex justify-center space-x-10 mb-5">
      <div className="w-full max-w-sm bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
          <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            II
          </button>
      
      </div>
      <div class="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Soil is gravel. First letter is G.</h5>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Is clay + silt fraction : </h5>
          <div className="flex mt-4 md:mt-6">
          <button className="button" onClick={() => SetView(4)}>
          &#62; 12%
        </button>
        <button className="button" onClick={() => SetView(5)}>
          &#60; 5%
        </button>
        <button className="button" onClick={() => SetView(6)}>
          between 5% & 12%
        </button>
          </div>
      </div>
  </div>
  </div>
    );

    const View3 = ({onClick}) => (
      <div className=" flex justify-center space-x-10 mb-5">
      <div className="w-full max-w-sm bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
          <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            III
          </button>
      
      </div>
      <div class="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Soil is gravel. First letter is S.</h5>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Is clay + silt fraction : </h5>
          <div className="flex mt-4 md:mt-6">
          <button className="button" onClick={() => SetView(4)}>
          &#62; 12%
        </button>
        <button className="button" onClick={() => SetView(5)}>
          &#60; 5%
        </button>
        <button className="button" onClick={() => SetView(6)}>
          between 5% & 12%
        </button>
          </div>
      </div>
  </div>
  </div>
    );


    const View4 = ({onClick}) => (
      <div className=" flex justify-center space-x-10 mb-5">
      <div className="w-full max-w-sm bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
          <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            IV
          </button>
      
      </div>
      <div class="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Is clay fraction &#62; silt fraction</h5>
          <div className="flex mt-4 md:mt-6">
          <button className="button" onClick={() => SetView(7)}>
          YES
        </button>
        <button className="button" onClick={() => SetView(8)}>
          NO
        </button>
          </div>
      </div>
  </div>
  </div>
    );

    const View5 = ({onClick}) => (
      <div className=" flex justify-center space-x-10 mb-5 ">
      <div className="w-full px-1 max-w-sm bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
          <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            V
          </button>
      
      </div>
      <div class="flex flex-col items-center pb-10">
          
          <div className="flex mt-4 md:mt-6 space-x-1">
          <button className="button border-solid border-2 rounded-none border-gray-300" >
          If 1st letter is G, UC &#8925; 4 & 1 &#8924; CC &#8924; 3 2nd letter is W, otherwise 2nd letter is P.
        </button>
        <button className="button border-solid border-2 rounded-none border-gray-300" >
        If 1st letter is S, UC &#8925; 6 & 1 &#8924; CC &#8924; 3 2nd letter is W, otherwise 2nd letter is P.
        </button>
          </div>
      </div>
  </div>
  </div>
    );


    const View6 = ({onClick}) => (
      <div className=" flex justify-center space-x-10 mb-5">
      <div className="w-full max-w-sm bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
          <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            VI
          </button>
      
      </div>
      <div class="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Is clay fraction &#62; silt fraction</h5>
          <div className="flex mt-4 md:mt-6">
          <button className="button" onClick={() => SetView(9)}>
          YES
        </button>
        <button className="button" onClick={() => SetView(10)}>
          NO
        </button>
          </div>
      </div>
  </div>
  </div>
    );

    const View7 = ({onClick}) => (
      <div className=" flex justify-center space-x-10 mb-5">
      <div className="w-full max-w-sm bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
          <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            VII
          </button>
      
      </div>
      <div class="flex flex-col items-center pb-10">
        
          <div className="flex mt-4 md:mt-6">
          <button className="button border-none">
          Plastic clayey fines. 2nd letter is C.
        </button>
        
          </div>
      </div>
  </div>
  </div>
    );

    const View8 = ({onClick}) => (
      <div className=" flex justify-center space-x-10 mb-5">
      <div className="w-full max-w-sm bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
          <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            VIII
          </button>
      
      </div>
      <div class="flex flex-col items-center pb-10">
          
          <div className="flex mt-4 md:mt-6">
          <button className="button border-none">
          Non-plastic silty fines. 2nd letter is M.
        </button>
        
          </div>
      </div>
  </div>
  </div>
    );


    const View9 = ({onClick}) => (
      <div className=" flex justify-center space-x-10 mb-5">
      <div className="w-full px-1 max-w-sm bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
          <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            IX
          </button>
      
      </div>
      <div class="flex flex-col items-center pb-10">
        
          <div className="flex mt-4 md:mt-6 space-x-1">
          <button className="button border-solid border-2 rounded-none border-gray-300">
          If 1st letter is G, UC &#8925; 4 & 1 &#8924; CC &#8924; 3. Classification is: GW-GC. 
          Otherwise, classification is GP-GC.
        </button>
        <button className="button border-solid border-2 rounded-none border-gray-300">
          If 1st letter is S, UC &#8925; 6 & 1 &#8924; CC &#8924; 3. Classification is: SW-SC. 
          Otherwise, classification is SP-SC.
        </button>
          </div>
      </div>
  </div>
  </div>
    );


    const View10 = ({onClick}) => (
      <div className="flex justify-center space-x-10 mb-5">
      <div className="w-full px-1 max-w-sm bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
          <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            X
          </button>
      
      </div>
      <div class="flex flex-col items-center pb-10">
        
          <div className="flex mt-4 md:mt-6 space-x-1">
          <button className="button border-solid border-2 rounded-none border-gray-300">
          If 1st letter is G, UC &#8925; 4 & 1 &#8924; CC &#8924; 3. Classification is: GW-GM. 
          Otherwise, classification is GP-GM.
        </button>
        <button className="button border-solid border-2 rounded-none border-gray-300">
          If 1st letter is S, UC &#8925; 6 & 1 &#8924; CC &#8924; 3. Classification is: SW-SM. 
          Otherwise, classification is SP-SM.
        </button>
          </div>
      </div>
  </div>
  </div>
    );


    const [active, setActive] = React.useState(1);
    const SetView = (active) => {
      setActive(active);
    };
  
    const ActiveView = () => {
      switch (active) {
        case 1:
          return <View1 />;
        case 2:
          return <View2 />;
        case 3:
          return <View3 />;
        case 4:
            return <View4 />;
        case 5:
            return <View5 />;
        case 6:
              return <View6 />;    
        case 7:
              return <View7 />;   
        case 8:
              return <View8 />;   
        case 9:
              return <View9 />;   
        default:
          return <View10 />;
      }
    };

  return (

<div className="bg-purple-0 "> 

<SignOut/>
<div className=" py-2 max-w-8xl mx-auto px-8 sm:px-16"> 
    <h2 className="text-center font-bold text-4xl mb-2 py-5 underline decoration-indigo-500">
    Course-grained soil</h2>
    </div>

    {ActiveView()}

    </div>
  )
}

export default CourseGrained


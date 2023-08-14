import React,{ useRef, useState} from 'react';
import { ref } from '.././pages/index';
import {v4 as uuidv4} from "uuid";

function FirebaseCreate() {

const [name, setname] = useState("")
const [area, setarea] = useState("")

function createDoc(newDataObj){
    console.log("ok");
    ref
    .doc(newDataObj.id)
    .set(newDataObj)
    .catch((err) => {
        alert(err)
        console.error(err);
        
    })
}
const inputRef = useRef("");
if (inputRef.value) return;


return (
    <div>
            <input className="placeholder-indigo-500 p-2.5 m-1 rounded-lg italic 
                    border-2 border-gray-400 bg-green-50 text-sm" type="text" id="name1" placeholder="Project: N.927808" required onChange={(e) => setname(e.target.value)} />
            <input className="placeholder-indigo-500 p-2.5 m-1 rounded-lg italic  
                    border-2 border-gray-400 bg-green-50 text-sm" type="text" id="area1" placeholder="Area: OCALFLXA" required onChange={(e) => setarea(e.target.value)} />

            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ' 
                onClick={() => {
                createDoc({name, area,  id: uuidv4()})
                document.getElementById("name1").value = ""
                document.getElementById("area1").value = ""
            }} >Add New Project</button>
    </div>
)
}

export default FirebaseCreate
import React,{useState} from 'react'
import { ref } from '.././pages/index';

function FirebaseEdit({bom,seteditbox}) {

    const [name, setname] = useState("")
    const [area, setarea] = useState("")

    function editDoc(updtedDoc){
        ref
        .doc(updtedDoc.id)
        .update(updtedDoc)
        .catch((err) => {
            alert(err)
            console.error(err);
        })
    }

    return (
        <div>
            <p className="flex items-center justify-center text-sm font-bold">Edit Box</p>
            <div className="flex flex-auto items-center p-1">
            <input className=' placeholder-red-300 border border-red-400 rounded-md ' type="text" placeholder="Project #" onChange={(e) => setname(e.target.value)} />
            <input className=' placeholder-red-300 border border-red-400 rounded-md' type="text" placeholder="Area" onChange={(e) => setarea(e.target.value)} />
            </div>
            <div className='flex items-center p-1 justify-center  border-b-2 border-gray-200'>
            <button className="inline-flex items-center justify-center p-1 bg-transparent hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded" 
                onClick={() => {
                editDoc({name: name, area: area, id: bom.id})
                seteditbox(false)
            }}>Update</button>
        </div>
        </div>
        
    )
}

export default FirebaseEdit
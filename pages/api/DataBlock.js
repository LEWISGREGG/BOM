import { useState } from "react";
import { ref } from '.././pages/index';
import FirebaseEdit from './FirebaseEdit'
import { useRouter } from "next/router";
import 'firebase/firestore';
import Storage from "./Storage";

function DataBlock({bom}) {
    
    const [editbox, seteditbox] = useState(false)
    const router = useRouter();

    function deleteDoc(docx){
        if (
            window.confirm("Are you sure you want to delete")
        ) {
        ref
        .doc(docx.id)
        .delete()
        .catch((err) => {
            alert(err)
            console.error(err);
        })}
    }

    return (
        <div className='-full mr-3 mb-3 max-w-sm p-2 bg-green-100 border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-blue-100 hover:scale-101' key={bom.id}>
        <h1 className='font-bold text-xl p-1 mb-2 border-b-2' >Project# : {bom.name}</h1>

        <p className="mb-2 border-b-2 p-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Area : {bom.area}</p>
        <div className="flex flex-row gap-2 p-2 pt-2">
            
        <button className="block w-full select-none rounded-lg bg-pink-500 py-1 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
        onClick={() => deleteDoc(bom)} >Remove</button>
        <button className="block w-full select-none rounded-lg bg-pink-500 py-1 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => seteditbox(true)} >Edit</button>

        <button className="block w-full select-none rounded-lg bg-pink-500 py-1 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
        onClick={() => router.push( `/project/${bom.id}`)} >Go To</button>
        </div>
        {editbox === true && <FirebaseEdit bom={bom} seteditbox={seteditbox} />}
        <Storage/>
        </div>
    )
}

export default DataBlock
import styled from "styled-components";
import { useRouter } from "next/router";
import firebase from '.././firebase';
import { db } from ".././firebase";
import {firestore, updateDoc, doc, deleteField, deleteDoc} from "firebase/firestore";
import { useState, useEffect, docRef, useRef } from "react";





function Message({ item, qty, items, id , bom}) {

  const ref = firebase.firestore().collection("items");

const router = useRouter();




function deleteDoc(docx){
  if (
      window.confirm("Are you sure you want to delete")
  ) {
  ref
  db.collection('bom')
  .doc(docx.id)
  .collection('items')
  .doc(docx.id)
  .delete()
  .catch((err) => {
      alert(err)
      console.error(err);
  })}
}



function updateDoac(updateDoc){
  ref
  .doc(updateDoc.id)
  .update(updateDoc)
  .catch((err) => {
      alert(err)
      console.error(err);
  })
}


function deleteDoca(docx){
  
  ref
  .doc(docx.id)
  .delete().then(() => {
    console.log("Successfully deleted!");
})
  .catch((err) => {
      alert(err)
      console.error(err);
  })}





  return (
    <div>
      <form className=" flex border-b shadow-lg">
        <div className="w-96 font-bold p-2">{item.item}</div>  <div className="w-60 font-bold p-2">{item.qty} </div> 
       
       <br/>

   <br/>
   <br/>
 <button  type="submit" onClick={() => removeEventId(items)}> Remove</button>
   <br/>
   <br/>



   <br/>
  
   <button className="inline-flex items-center justify-center p-1 bg-transparent hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded" 
                onClick={() => {
                updateDoc({item: item, qty: qty, id: item.id})
            
            }}>Update</button>
        </form>
       
    </div>
  );
}

export default Message;


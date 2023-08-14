import styled from "styled-components";
import { useRouter } from "next/router";
import firebase from '.././firebase';
import { db } from ".././firebase";
import {getFirestore, doc, updateDoc, deleteField, deleteDoc} from "firebase/firestore";
import { useState, useEffect, useRef } from "react";


function Message({ item, qty, items, id , bom}) {

const ref = firebase.firestore().collection("bom").doc(id).collection("items");

const router = useRouter();

const handleDel = (docx) => {
  db.collection('bom')
  .doc(docx.id)
  .collection('items')
  .doc(docx.id).delete().then(() => {
      console.log("Successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
}

function updateDoc(updateDoc){
  ref
  .doc(updateDoc.id)
  .update(updateDoc)
  .catch((err) => {
      alert(err)
      console.error(err);
  })
}


function deleteDoc(docx){
  if (
      window.confirm("Are you sure you want to delete")
  ) {
  ref
  .doc(docx.id)
  .delete().then(() => {
    console.log("Successfully deleted!");
})
  .catch((err) => {
      alert(err)
      console.error(err);
  })}
}



const favoriteButtonUnlikeHandler = () => {
  db.collection("bom")
  .doc()
  .collection("items")
  .doc().delete()
}

const onDelete = (id) => {
  if (
    window.confirm("Are you sure you want to delete")
  ) {
    db.child(`bom/${id}`).remove((err) => {
      if (err) {
        toast.error(err);
      } else {
        toast.sucess("contact dele");
      }
    })
  }
}



  return (
    <div>
      <form className=" flex border-b shadow-lg">
        <div className="w-96 font-bold p-2">{item.item}</div>  <div className="w-60 font-bold p-2">{item.qty} </div> 
       
       <br/>
 <button  type="submit" onClick={handleDel}> Del</button>
   <br/>
   <br/>
 <button  type="submit" onClick={() => deleteDoc(item)}> Rem</button>
   <br/>
   <br/>
 <button  type="submit" onClick={onDelete}> udal</button>
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


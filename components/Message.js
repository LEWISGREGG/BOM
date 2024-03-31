import styled from "styled-components";
import { useRouter } from "next/router";
import firebase from '.././firebase';
import { db, storage } from ".././firebase";
import {firestore, updateDoc, doc, deleteField, deleteDoc} from "firebase/firestore";
import { useState, useEffect, docRef, useRef } from "react";
import { set, ref, onValue, remove, update } from "firebase/database";
import {v4 as uuidv4} from "uuid";
import toast from "react-hot-toast";
import { deleteObject } from "firebase/storage";

function Message({ item, qty, itemId, id , bom}) {







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




  const handleDel = (item) => {
    ref
    db.collection('bom')
    .doc(bom)
    .collection('items')
    .doc(item.id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}






async function deleteFile() {
  if (!bom || !itemId) return;

  const toastId = toast.loading("Deleting...");

  const fileRef = ref( `bom/${bom.id}/items/${itemId}`);

  try {
    deleteObject(fileRef)
      .then(async () => {
        deleteDoc(doc(db, "bom", bom.id, "items", itemId)).then(() => {
          toast.success("Deleted Successfully", {
            id: itemId,
          });
        });
      })
      .finally(() => {
        setIsDeleteModalOpen(false);
      });
  } catch (error) {
    setIsDeleteModalOpen(false);

    toast.error("Error deleting document", {
      id: toastId,
    });
  }
}






  return (
    <div>
      <form className=" flex border-b shadow-lg">
        <div className="w-96 font-bold p-2">{item.item}</div>  <div className="w-60 font-bold p-2">{item.qty} </div> 
        <div className="w-60 font-bold p-2">{item.id} </div> 
       
       <br/>

   <br/>
   <br/>
 <button  type="submit" onClick={() => deleteFile()}> Remove</button>
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


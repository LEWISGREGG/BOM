import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { auth, db } from "../firebase";
import firebase from "../firebase";
import Message from "./Message";
import SignOut from "./SignOut";
import {ref, remove} from 'firebase/database';
import {v4 as uuidv4} from "uuid";



function ChatScreen({ items, qtys, bom, id }) {
  const [name, setname] = useState("")
  const router = useRouter();

  const [endOfItemsRef, endOfQtysRef] = useRef(null);

  const [input, setInput] = useState("");
  const [inputa, setInputa] = useState("");

  const [itemsSnapshot, qtysSnapshot] = useCollection(
    db
      .collection("bom")
      .doc(router.query.id)
      .collection("items")
      .orderBy("timestamp", "asc")
  );

  const showItems = () => {
    if (itemsSnapshot) {
      return itemsSnapshot.docs.map((item, qty) => (
        <Message
          key={item.id}
          user={item.data().user}
          qty={{
          ...qty.data}}
          item={{
            ...item.data()}}
          
        />
      ));
    } else {
      return JSON.parse(items, qtys).map((item, qty) => (
        <Message key={item.id} user={item.user} item={item} qty={qty}/>
      ));
    }
  };



  const sendItem = (e) => {
    e.preventDefault();
    db.collection("bom").doc(router.query.id).collection("items").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      item: input,
      id: uuidv4(),
      qty: inputa,
    });
    setInput("");
    setInputa("");
  };


  const handleDel = (item) => {
    db.collection('bom')
    .doc(item.id)
    .collection('items')
    .doc(item.id).delete().then(() => {
        console.log("Successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className=' bg-white-100'>
    <SignOut/>
    
      
    <div className='flex items-center justify-between flex-wrap border-b shadow-lg p-2' >
        

        <form className="inline-block relative appearance-none w-80 bg-white border-2 border-gray-400 hover:border-gray-500 p-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">
        <select  value={input} onChange={(e) => setInput(e.target.value)}>
        <option>FIB TERM 12 PORT 100ft CON DIE</option>
        <option>FIB TERM 8 PORT 100ft CON DIE</option>
        <option>FIB TERM 6 PORT 100ft CON DIE</option>
        <option>FIB TERM 4 PORT 100ft CON DIE</option>
        <option>FIB 24 FLX NAP 1JKT 1ARMOR LT</option>
        <option>FIB 144 1JKT 1ARMOR LT</option>
        <option>ANCHOR - SCREW</option>
        <option>DOWN GUY</option>
        <option>STRAND 6.6M</option>
        <option>POLE U-GUARD</option>
        <option>HH 17x30x24in</option>
        <option>GROUND ROD 5/8in-8ft</option>
        <option>BORE = 2.5in CABLE-HDPE</option>
        <option>BORE 3-4in CABLE-HDPE</option>
        <option>INRDCT 2.5 SDR 11 BLACK UG</option>
        <option>LOCATE WIRE ONLY IN CONDUIT</option>
        <option>XBOX FIB 432 LS</option>
        <option>FIBER PL IN CONDUIT</option>
        <option>SPLITTER 32 HARDENED LS CABINET</option>
        <option>PED FIB 10IN INTEGRAL STAKE MOUNT</option>
        <option>HH 10X10 ROUND</option>
        <option>RISER U-GUARD 2 in PLASTIC</option>
        </select>
        </form>
        <input className="placeholder-green-500 w-80 p-1 m-1 font-bold rounded-lg italic border-2 border-gray-400 bg-white text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text" placeholder="FIB TERM 12 PORT 25ft CON DIE" >
        </input>

        <input className="placeholder-green-500 p-1 m-1 w-40 font-bold rounded-lg italic border-2 border-gray-400 bg-white text-sm"
          value={inputa}
          onChange={(e) => setInputa(e.target.value)}
          type="number" placeholder="Quantity: 7" >
        </input>
    

        <button className="bg-transparent hover:bg-green-500 border-2 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"  
        disabled={!input} type="submit" onClick={sendItem}> Add Item</button>
        
      </div> 
      <h2 className="text-center font-bold text-2xl mb-2">
           Quantities {id} </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 ">
        {showItems()}

        <EndOfMessage ref={endOfQtysRef} />
        <EndOfMessage ref={endOfItemsRef} />
      
      </div>

      <section className="flex justify-center items-center max-w-8xl rounded-lg  text-black-600">
    <div className="font-bold">&copy; {currentYear} OSP TELCO ALL RIGHTS RESERVED</div>
      </section>

    </div>
  );
}

export default ChatScreen;

const EndOfMessage = styled.div`
  margin-bottom: 10px;
`;
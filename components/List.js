import { useState } from "react";
import 'firebase/firestore';
import { getStorage, ref, listAll } from "firebase/storage";
import Link from 'next/link';
import { useRouter } from "next/router";

function List(props, file) {
    const storage = getStorage();
    const [data, setData] = useState([]);
    const listRef = ref(storage, `files/${file.id}${file.name}`);
    listAll(listRef)
    .then((res) => {
        res.prefixes.forEach((fileRef) => {
            fileRef.getDownloadURL().then((url) => {
                //4.
                setImages((allFiles) => [...allFiles, url])})
      });
      res.items.forEach((item) => {
        setData(arr => [...arr, item.name]);
      })
    })
    .catch(err => {
      alert(err.message);
    }); 
    const router = useRouter()
    const [count, setCount] = useState(0)
  

  return (
    <div>
<center>
     
<div>
      <h1>Page: {router.query.slug}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <button onClick={() => setCount(count - 1)}>Decrease count</button>
      <h1>Page: {router.query.slug}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <button onClick={() => setCount(count - 1)}>Decrease count</button>
      <Link href="/one">one</Link> <Link href="/two">two</Link>
    </div>
     
        <button onClick={listRef}>List Item</button>
        <br /><br />
        {
          data.map((listAll) => {
            <h2>{listAll}</h2>
})
        }
      </center>


    </div>
  )
}

export default List
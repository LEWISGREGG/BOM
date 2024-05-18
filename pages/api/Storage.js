import { useEffect, useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from ".././firebase";
import Link from 'next/link';


function Storage() {

    localStorage.setItem('url', JSON.stringify({
      url: url,
  }))
    const [url, setUrl] = useState('')
    JSON.parse(localStorage.getItem('url'))
    ;
    const [progress, setProgress] = useState(0);
    const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
    };

    const uploadFiles = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `files/${file.id}${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
              const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(prog);
            },
            (error) => console.log(error),
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setUrl(url);
                console.log("File available: ", url);
                
              });
            }
          );
        };
        
        useEffect(()=>{
          localStorage.setItem('url', url)
        }, [url])

return (
    <div className="border-t-2 border-gray-100 p-1">

    <form className="flex flex-row justify-evenly pb-1" onSubmit={formHandler}>
        <input type="file" className="input "/>
        <button className="p-1 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white  border border-purple-500 hover:border-transparent rounded" type="submit">Upload</button>
    <Link id="link" href={url}><a className="flex flex-row justify-center ml-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-1 rounded" target="_blank">Download</a></Link>
      </form>
      <h2 className="font-bold border-t-2 border-gray-100">Uploading {progress}%</h2>
    </div>
  )
}

export default Storage
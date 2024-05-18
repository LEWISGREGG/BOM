import React from 'react'
import { auth, provider } from "../firebase";


function SignIn() {
    const currentYear = new Date().getFullYear();
    const signIn = () => {
        auth.signInWithPopup(provider).catch(console.error);
    };

    return (
        <div className='h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full px-4'>
        <div className='flex flex-col items-center justify-center'> 
        
        <div className='h-screen m-auto flex flex-col items-center justify-center text-center pt-10 pb-40 max-w-2xl mx-auto '>
            <h1 className='text-purple-900 font-bold text-5xl underline uppercase py-16'>Bill of Materials</h1>
            <button className="middle none center rounded-lg bg-yellow-600 py-6 px-6 font-sans text-lg font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={signIn}>Sign In With Google</button>
            <section className="flex justify-center items-center mt-20 max-w-8xl rounded-lg  text-black-600">
    <div className="font-bold">&copy; {currentYear} OSP TELCO ALL RIGHTS RESERVED</div>
    </section>
        </div>
        </div> </div>
    )
}

export default SignIn
import React from 'react'
import { auth } from '.././firebase'
import Image from "next/image";
import { useRouter } from "next/router";


function SignOut() {
    const router = useRouter();
    return (
        <div className="sticky top-0 left-0 z-50 grid grid-flow-col gap-2 border-b shadow-lg p-2 md:px-5" >
    <div onClick={() => router.push('/') } className="relative flex items-center col-span-5 h-14 cursor-pointer my-auto">
<Image src="https://uploads.turbologo.com/uploads/design/hq_preview_image/3055644/draw_svg20210625-19886-1te2nks.svg.png" alt="" layout="fill" objectFit='contain' objectPosition="left" className='rounded '/>
</div>

<div onClick={() => router.push('/TerminalCount') } className="relative flex items-center col-span-5 h-14 cursor-pointer my-auto">
<Image src="https://uploads.turbologo.com/uploads/design/hq_preview_image/3055208/draw_svg20210713-19572-1ba8efu.svg.png" alt="" layout="fill" objectFit='contain' objectPosition="left" className='rounded'/>
</div>

<div onClick={() => router.push('/Cable') } className="relative flex items-center col-span-5 h-14 cursor-pointer my-auto">
<Image src="https://www.svgrepo.com/show/420135/cable-device-electronic.svg" alt="" layout="fill" objectFit='contain' objectPosition="left" className='rounded'/>
</div>

<div onClick={() => router.push('/SoilClassification') } className="relative flex items-center col-span-5 h-14 cursor-pointer my-auto">
<Image src="https://www.svgrepo.com/show/235213/robot-ai.svg" alt="" layout="fill" objectFit='contain' objectPosition="left" className='rounded'/>
</div>


<div onClick={() => router.push('/Hoa') } className="relative flex items-center col-span-5 h-14 cursor-pointer my-auto">
<Image src="https://www.svgrepo.com/show/420104/device-electronic-machine-21.svg" alt="" layout="fill" objectFit='contain' objectPosition="left" className='rounded'/>
</div>
            <button className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900' 
            objectposition="right" onClick={() => auth.signOut()}>Sign Out</button>

        </div>
    )
}

export default SignOut
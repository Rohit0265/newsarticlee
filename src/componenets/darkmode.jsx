// import { Moon } from 'lucide-react'
import { useState,useEffect } from 'react'
import React from 'react'
import {Sun , Moon} from "lucide-react"
function datrkmode() {
    const [dark,setDark] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const root = document.documentElement;
            if(dark){
                root.classList.add('dark');
            }
            else{
                root.classList.remove('dark');
            }
        }
    }, [dark])
    return <div className='cursor-pointer' onClick={ ()=> setDark(!dark)}>
        {dark?<Sun/>:<Moon/>}
    </div>

}

export default datrkmode
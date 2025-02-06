import React, { useEffect, useState } from 'react'

function Footer() {
    const[visible,setvisible]=useState(true);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setvisible((p)=>!p);
        },2000)
        return ()=>clearInterval(interval)
    },[])
  return (
    <div className='h-20'>
     <div className='border-t-[1px] text-gray-200 mt-10 '>
     {
        visible&& <p className='text-xs mt-3 text-gray-400'>© 2025 Ahnika</p>  
     }
    </div> 
    </div>
  )
}

export default Footer

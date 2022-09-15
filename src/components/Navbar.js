import React from 'react'
import Icon from './Icon'



const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg'>
  
       <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND</div>
       </div>


<Icon />
    </div>
  )
}

export default Navbar
import React from 'react'

const Navbar = () => {
  return (
    <div>
    

<nav className='w-[100%] h-[100px] flex justify-evenly  bg-[#222222] pt-10 '>
<logo><h2 className='text-[#F1601E] text-2xl font-bold -ml-20'>SKATER</h2></logo>
    <ul className='list-none flex items-start gap-10 text-white text-xl font-semibold'>
        <li className='text-[#F1601E]'>Home</li>
        <li>Service</li>
        <li>About</li>
        <li>Testimonals</li>
        <li>Blog</li>
        <li>Contact</li>
    </ul>
</nav>
    </div>
  )
}

export default Navbar


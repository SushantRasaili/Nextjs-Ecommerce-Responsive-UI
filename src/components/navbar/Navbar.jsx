import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {

  const [menuOpened,setMenuOpened] = useState(false);

const handleClick =(e) => {
  e.preventDefault();
    setMenuOpened(!menuOpened);
}

  return (
    <div className='flex flex-row justify-between items-center px-10 h-10 bg-customColor '>
        
        <p className='text-5 font-bold text-white'>Online Store</p>

    <div className={`flex md:flex-row md:h-full md:bg-inherit md:items-center 
    md:justify-between mr-10 md:text-white
   flex-col h-32  justify-start z-20 bg-customColor
   max-[768px]:w-full max-[768px]:absolute top-10 left-0
   max-[768px]:border-t-2 border-white
   text-white ${menuOpened?" max-[768px]:visible ":" max-[768px]:invisible "}
   `}>
        <Link onClick={() => setMenuOpened(false)} href="/" className='mx-2'>Home</Link>
        <Link onClick={() => setMenuOpened(false)} href="/search" className='mx-2'>Search</Link>
        <Link onClick={() => setMenuOpened(false)} href="/search" className='mx-2'>Sign In</Link>
        <Link onClick={() => setMenuOpened(false)} href="/search" className='mx-2'>Sign Up</Link>
        <Link onClick={() => setMenuOpened(false)} href="/search" className='mx-2'>Offers</Link>
    </div>

    <div className='block md:hidden cursor-pointer' onClick={handleClick}>
    <Image 
        src="https://img.icons8.com/ios-filled/50/ffffff/menu--v6.png" 
        alt="menu"
        height={30}
        width={30}
        />
    </div>

    </div>
  )
}

export default Navbar
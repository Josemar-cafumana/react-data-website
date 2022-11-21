import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(prev => !prev)
  }

  useEffect(() => {
    const setNavFalse = (event) => {
      if (nav && window.innerWidth > 768) {
        setNav(false)
      }
    }

    window.addEventListener('resize', setNavFalse);
    return () => window.removeEventListener("resize", setNavFalse);
  }, [nav]);

  return (
    <div className='flex justify-between items-center px-4 h-24 max-w-[1240px] mx-auto text-white'>

      <h1 className="w-full text-3xl font-bold text-PRIMARY cursor-pointer">REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='nav-link'>Home</li>
        <li className='nav-link'>Company</li>
        <li className='nav-link'>Resources</li>
        <li className='nav-link'>About</li>
        <li className='nav-link'>Contact</li>
      </ul>

      <div className='md:hidden cursor-pointer' onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-PRIMARY m-4 pt-[14px] cursor-pointer">REACT.</h1>
        <ul className='pt-24 uppercase'>
          <li className='nav-link border-b border-b-gray-600'>Home</li>
          <li className='nav-link border-b border-b-gray-600'>Company</li>
          <li className='nav-link border-b border-b-gray-600'>Resources</li>
          <li className='nav-link border-b border-b-gray-600'>About</li>
          <li className='nav-link'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

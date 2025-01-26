import React from 'react'
import logo from '../images/logo.svg'
function NavHome() {
  return (
    <div>
      <nav className='flex justify-around items-center'>
        <button className='bg-yellow-400 px-4 py-2  rounded-full'> contact us </button>

        <a href="">الرئيسية</a>
        <a href="">القائمة</a>
        <a href="">عن مشوار</a>
        <a href="">الفروع</a>
        <a href="">تواصل معنا </a>
        <img src={logo} alt="" />

      </nav>
    </div>
  )
}

export default NavHome
import React from 'react'

function NavHome() {
  return (
      <div>
          <nav className='flex justify-around items-center'>
              <a href="">الرئيسية</a>
              <a href="">القائمة</a>
              <a href="">عن مشوار</a>
              <a href="">الفروع</a>
              <a href="">تواصل معنا </a>
              <button className='bg-yellow-500 px-4 py-2  rounded-md'> contact us </button>
          </nav> 
    </div>
  )
}

export default NavHome
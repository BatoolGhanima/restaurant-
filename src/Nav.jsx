import React from 'react'

function  Nav () {
    return (
        
            <div className='bg-orange-700 flex justify-around text-white p-2'>

            
      <div className='flex justify-between text-[15px]'>
          <p className='px-2 '>batool@gmail.com</p>
          <p>+30 699 333 0647</p>
            </div>
            
      <div>
                <select name="lang" id="" className='bg-none text-orange-600 outline-none'>
                <option value="en">English</option>
                <option value="tr">Turkish</option>
                <option value="ar">Arabic</option>
                </select> 
                </div>
            </div>
        
  )
}
export default Nav;
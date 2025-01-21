import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

import firstcook from '../images/firstcook.svg'

function FirstDep() {
    return (
        <>
            <div className='flex  items-center p-2'>
                <div className='w-[30%] items-center text-center'>
                    <p className='text-[30px] font-semibold' >
                        <span className='text-red-500'>مشروبات</span>
                        &
                        <span className='text-yellow-500'>شاورما</span>
                        <p>خبرة 30 عام  </p>
                    </p>
                    <p>نقدم الطعام الطيب بشغف لكل محبي الاطايب والنكهات المميزة</p>
                    <div
                        className=" h-8 py-3 my-4 flex justify-between items-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-50 dark:border-yellow-600" >
                    
                        <input type="text" id="first_name"className='outline-none ' placeholder='search'/>
                        <IoSearchSharp />
                        

                    </div>
                    <button className='bg-red-600 px-4 py-2 rounded-[50px] text-white'>اطلب الآن</button>
                </div>
                <img src={firstcook} alt=""  className='w-[70%]'/>

            </div>





        </>
    )
}

export default FirstDep 
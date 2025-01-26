import React from 'react'
import offer from '../images/offer.png'
import food from '../images/food.svg'
import delevery from '../images/delevery.svg'


function Second() {
  return (
      <div className='flex p-2 px-4 m-4 justify-center items-center'>
          <div className='mx-2 border border-gray-200 rounded-md '>
              <img src={offer} alt="" />
              <div className='py-4 px-2 '>
                  <h2 className='text-[25px] font-semibold '>العروض الحالية</h2>
                  <p>أقوى العروض </p>
                  <button className='bg-yellow-500 px-4 py-2  rounded-md m-2'> اكتشف المزيد </button>
              </div>
          </div>
          <div className='mx-2 border border-gray-200 rounded-md '>
              <img src={delevery} alt="" />
              <div className='py-4 px-2 '>
                  <h2 className='text-[25px] font-semibold'>تواصل مشوار </h2>
                  <p>أكبر أسطول توصيل بالشرقية</p>
                  <button className='bg-yellow-500 px-4 py-2  rounded-md m-2'> اطلب الآن</button>
              </div>
          </div>
          <div className='mx-2 border border-gray-200 rounded-md '>
              <img src={food} alt="" />
              <div className='py-4 px-2 '>
                  <h2 className='text-[25px] font-semibold'> البوفيه مفتوح</h2>
                  <p> بوفيه غداء أسبوعي </p>
                  <button className='bg-yellow-500 px-4 py-2  rounded-md m-2'> اطلب الآن </button>
              </div>
          </div>
    </div>
  )
}

export default Second
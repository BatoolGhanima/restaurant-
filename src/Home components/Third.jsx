import React from 'react'
import secondcook from '../images/secondcook.svg'
function Third() {
  return (
      <div >
          <div className='flex justify-between items-center'>
              
          
          <img src={secondcook} alt="" className='w-[45%]' />
          <div className='w-[60%]'>
          <h2 className='text-[25px] font-semibold text-red-600 my-3'>  نخدمكم بكل <span className='text-yellow-500'> الحب</span></h2>
             <p className=''>مشوار متخصص في المشاوى والشاورما والمقبلات والبروستد 
             نخدمكم بأكثر من 10  فروع داخل المنطقة الشرقية بالخبر والدمام</p>
                  <div className='flex  font-medium my-6'>
                      <div className='mr-14' >
                         <p  className='py-3 '>📲 الطلب أونلاين</p>
                      <p className='py-3 '> 🕙الحجز المسبق </p>
                      <p className='py-3 '> 👩‍🍳شيفات محترفة </p>  
                      </div>
                      <div>
                         <p className='py-3 '>🛒 من 10 حتى 2ص</p>
                      <p className='py-3 '>🎉 تنظيم حفلات </p>
                      <p className='py-3 '>✨مطابخ احترافية</p>  
                     </div>
                     
              </div>
              </div>
          </div>
    </div>
  )
}

export default Third
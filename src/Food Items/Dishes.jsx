import React from 'react'
import text from '../images/text.svg'

function Dishes({ product,setCartProduct }) {
    const handleClick = (pc) => {
        setCartProduct((prev) => {
            return [...prev,pc]
            
        })
    }
    return (
    <div>
      <center><img src={text} alt="" className='mt-20 w-[1000px]' /> </center>  
     
   
        <div className='grid  grid-cols-2 md:grid-cols-3 lg:flex'>
            {product.map((p) => (
                <div
                    key={p.id}
                    className='flex justify-center items-end relative my-3'>
                    <div className= " bg-gradient-to-b from-orange-500/50 via-white via-25% via-50% to-red-50  shadow-lg p-6 max-w-sm mr-4 mt-2 rounded-t-full h-[600px]  overflow-auto">
                        <div className="relative ">
                            <img src={p.image_url} alt="p.name" className="w-full rounded-lg" />
                            <div className="absolute buttom-2 right-2 bg-orange-400 text-white rounded-[50%] w-[50px] h-[50px] px-3 py-1 text-sm hover:bg-orange-500 text-center">{p.price}</div>
                      

                        </div>
                        
                        <div className="mt-4  items-center justify-center text-center ">
                            <button className="mt-4 bg-red-600 text-white rounded-2xl px-6 py-1 mb-2 hover:bg-red-700 "
                            onClick={()=>{handleClick(p)}}
                            >+</button>

                            <div className="flex items-center justify-center">
                                <span className="text-yellow-500 text-lg">★</span>
                                <span className="ml-1 text-gray-700">{p.rating }</span>

                            </div>
                            <h2 className="text-xl font-bold text-red-600" >{ p.name}</h2>
                        </div>
                        <p className="mt-2 text-gray-600 text-end">{p.description}</p>
     

                    </div>
                    <div className='absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2  shadow-lg"'> 
                        <button className=" mt-4 bg-red-500 text-white rounded-full px-6 py-3 mb-2 hover:bg-red-700 ">order now</button>

                        </div>
                </div>


            ))}
            </div>
        </div>
    )
}

export default Dishes
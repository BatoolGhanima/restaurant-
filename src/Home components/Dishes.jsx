import React from 'react'

function Dishes({ product }) {
    return (
        <div className='grid  grid-cols-2 md:grid-cols-3 lg:flex'>

            {product.map((p) => (
                <div className='flex justify-center items-end relative my-3'>
                    <div className= " bg-gradient-to-b from-white via-white via-70% to-red-100 rounded-lg shadow-lg p-6 max-w-sm m-2 ">
                        <div className="relative ">
                            <img src={p.image_url} alt="p.name" className="w-full rounded-lg" />
                            <div className="absolute buttom-2 right-2 bg-orange-400 text-white rounded-[50%] w-[50px] h-[50px] px-3 py-1 text-sm hover:bg-orange-500">{p.price}</div>
                      

                        </div>
                        
                        <div className="mt-4  items-center justify-center text-center ">
                        <button className="mt-4 bg-red-600 text-white rounded-2xl px-6 py-1 mb-2 hover:bg-red-700 ">+</button>

                            <div className="flex items-center justify-center">
                                <span className="text-yellow-500 text-lg">★</span>
                                <span className="ml-1 text-gray-700">(4.5)</span>

                            </div>
                            <h2 className="text-xl font-bold">{ p.name}</h2>
                        </div>
                        <p className="mt-2 text-gray-600 text-end">{p.description}</p>
     

                    </div>
                    <div className='absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2  shadow-lg"'> 
                        <button className=" mt-4 bg-red-500 text-white rounded-full px-6 py-3 mb-2 hover:bg-red-700 ">order now</button>

                        </div>
                </div>


            ))}
        </div>
    )
}

export default Dishes
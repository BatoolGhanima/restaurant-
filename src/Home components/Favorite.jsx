import React from 'react'

function Favorite({cartProduct , setIsOpen }) {
  return (
    <div>
      <h1 className='font-extrabold text-orange-600 text-2xl'>Favorite Foods</h1>
          { cartProduct &&
              cartProduct.map((p) => (
                  <div className='border border-orange-400 m-2 p-4 ' key={p.id}>
      <h2> Food Name : {p.name}</h2>
      <p>Price: {p.price}</p>
      <p>Status: {p.status}</p>
      <p>Rating: {p.rating}</p>
      <img src={p.image_url} alt={p.name} width="200" />
    </div>  
             ))
          }
  

  </div>
  )
}

export default Favorite
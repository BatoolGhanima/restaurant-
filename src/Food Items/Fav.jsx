// import React, { useEffect, useState } from 'react'
// import Popup from './Popup'
// import apiClient from '../../serveses/apiClient'

// function Fav({ id , setCartProduct }) {
//     // const [cartProduct,setCartProduct]=useState([])
//   useEffect(() => {
//     apiClient.get(`/items/${id}`)
//       .then((res) => setCartProduct(res.data))

//   }, [id])
//     return (
//         <>
//                 <div>
//       <div>
//         <h2> Food Name {cartProduct.name}</h2>
//         <p>Price: {cartProduct.price}</p>
//         <p>Status: {cartProduct.status}</p>
//         <p>Rating: {cartProduct.rating}</p>
//         <img src={cartProduct.image_url} alt={cartProduct.name} width="200" />
//       </div>

//     </div>
//         </>
//   )
// }

// export default Fav
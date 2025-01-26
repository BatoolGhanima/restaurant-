import React, { useEffect } from 'react'
import { useState } from 'react'
import apiClient from '../../serveses/apiClient'
import UseProduct from '../hooks/UseProduct'

function Show({ id }) {
  const [data, setData] = useState({})

  useEffect(() => {
    apiClient.get(`/items/${id}`)
      .then((res) => setData(res.data))

  }, [id])




  return (
    <div>
      <div>
        <h2> Food Name : {data.name}</h2>
        <p>Price: {data.price}</p>
        <p>Status: {data.status}</p>
        <p>Rating: {data.rating}</p>
        <img src={data.image_url} alt={data.name} width="200" />
      </div>

    </div>
  )
}

export default Show
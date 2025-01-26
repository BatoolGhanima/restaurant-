import React from 'react'
import { useState, useEffect } from 'react'
import apiClient from '../../serveses/apiClient'


function UseProduct() {
  const [product, setProduct] = useState([])
  const [productItem, setProductItems] = useState([])
  const [error, setError] = useState([])

  useEffect(() => {
    const getData = async () => {
      return await apiClient
        .get("/items")
        .then((res) => setProduct(res.data))
        .catch((err) => setError(err.message))

    }
    getData();

  }, [])


  const post = async (data) => {
    const respose = await apiClient.post('/items', data)
    return response.data
  }

   const deleteItem =  async (id) => {
    return await apiClient.delete('/items', id)
  }

  useEffect(() => {
    const getItem = async (id) => {
     
      const response = await apiClient.get("/items" , id);
      return response.data;

    }

  })

  return {
    product,
    error,
    getItem,
  };
}

export default UseProduct
import React, { useState, useEffect } from 'react';
import apiClient from '../../serveses/apiClient';

function UseProduct() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null); // ✅ تغيير القيمة الافتراضية إلى null (أفضل من [])
  const [search, setSearch] = useState(""); // ✅ إضافة قيمة افتراضية لنفاذ البحث

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await apiClient.get("/items");
        setProduct(res.data);
      } catch (err) {
        setError(err.message);
      }
    };
    getData();
  }, []);

  const post = async (data) => {
    try {
      const response = await apiClient.post('/items', data);
      return response.data;
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteItem = async (id) => {
    try {
      await apiClient.delete(`/items/${id}`);
      setProduct((prevProducts) => prevProducts.filter((item) => item.id !== id)); // ✅ تحديث الحالة بعد الحذف
    } catch (err) {
      setError(err.message);
    }
  };

  const getItem = async (id) => {
    try {
      const response = await apiClient.get(`/items/${id}`);
      return response.data;
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    product,
    error,
    search,
    setSearch,
    post,
    deleteItem,
    getItem,
  };
}

export default UseProduct;

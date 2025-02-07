import { useState, useEffect } from "react"
import Table from "./Food Items/Table";
import apiClient from "../serveses/apiClient";
import Popup from "./Food Items/Popup";
import Nav from "./Nav";
import Add from "./Food Items/Add";
import Home from "./Home components/Home";
import UseProduct from "./hooks/UseProduct";




function App() {

  const [product, setProduct] = useState([])
  const [Error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        await apiClient
          .get("/items")
          .then((res) => setProduct(res.data))
        setLoading(false)

      }
      catch (err) {
        setError(err.message);
        setLoading(false)

      }
    }
    getData();

  }, [])
  const show = (id) => {
    const [data, setData] = useState({})
    apiClient.get(`/items/${id}`)
      .then((res) => setData(res.data))
    { console.log(data) }
  }

  const onDelete = async (id) => {
    { confirm("are you sure") }
    await apiClient
      .delete(`/items/${id}`);
    setProduct(product.filter((item) => item.id !== id));

  };


  return (
    <>
      <Nav />
      <br />
      <div className="items-center ml-10">
        <Popup title="Add new Food ">
          {({ setIsOpen }) => <Add product={product} setProduct={setProduct} setIsOpen={setIsOpen} />}
        </Popup>


      </div>
      <br /><br />

      <Table product={product} setProduct={setProduct} onDelete={onDelete} loading={loading} ></Table>
      <br /><br /><br />
      <Home product={product}></Home>

    </>
  )
}

export default App

import { useState, useEffect } from "react"
import Table from "./Food Items/Table";
import apiClient from "../serveses/apiClient";
import Popup from "./Food Items/Popup";
import Nav from "./Nav";
import Add from "./Food Items/Add";
import Home from "./Home components/Home";




function App() {

  const [product, setProduct] = useState([])
  const [Error, setError] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [lodaing,setLodaing] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLodaing(true)
      await apiClient
        .get("/items")
        .then((res) => {
          setLodaing(false)
        //  setTimeout(() => {
        //   setLodaing(false)
        //  }, 2000); 
         setProduct(res.data)
        })
        .catch((err) => {
          setError(err.message);
          setLodaing(false)
        })

    }
    getData();

  }, [])




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
      <Table product={product} setProduct={setProduct} onDelete={onDelete} lodaing={lodaing} ></Table>
      <br /><br /><br />


      <Home product={product}></Home>



    </>
  )
}

export default App

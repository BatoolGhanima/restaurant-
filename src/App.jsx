import { useState , useEffect } from "react"
import Table from "./Table";
import apiClient from "../serveses/apiClient";
import Popup from "./Popup";
import Nav from "./Nav";
import Home from "./Home";



function App() {
const [product,setProduct]=useState([])
  const [Error, setError] = useState([])
  const [isOpen, setIsOpen] = useState(false)

 useEffect(() => {
  const getData = async () => {
    await apiClient
      .get("/items")
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err.message))

  }
  getData();
 
}, [])
  
  
  
  const onDelete = async (id) => {
    // await apiClient
    //   .delete(`/items/${id}`);
  setProduct(product.filter((item) => item.id !== id));
 
  };
  // const update = (id) => {
  //   <UpdatePop product={product} setProduct={setProduct} isOpen={isOpen} setIsOpen={setIsOpen}  id={id}></UpdatePop>
    
  // }

  return (
    <>
      <Nav />
      <br />
      <div className="items-center ml-10">
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} product={product} setProduct={setProduct}></Popup>
      </div> 
  <br /><br />
      <Table product={product} onDelete={onDelete} ></Table>
   <br /><br /><br />
      
      
      <Home></Home>
   
   
   
    </>
  )
}

export default App

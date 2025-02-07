import React from 'react'
import NavHome from './NavHome'
import FirstDep from './FirstDep'
import Second from './Second'
import Third from './Third'
import Dishes from '../Food Items/Dishes'
import Footer from './Footer'

function Home({product}) {
  return (
    <div>
       <div className='m-8 p-4'>
      <NavHome></NavHome>
      <FirstDep></FirstDep>
      <Second></Second>
      <Third></Third>
      <Dishes product={product}></Dishes>
     

    </div>
      <div>
 <Footer></Footer>
      </div>
    </div>
   
  )
}

export default Home
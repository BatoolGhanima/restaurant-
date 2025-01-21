import React from 'react'
import NavHome from './NavHome'
import FirstDep from './FirstDep'
import Second from './Second'
import Third from './Third'
import Dishes from './Dishes'

function Home({product}) {
  return (
    <div className='m-4 p-4'>
      <NavHome></NavHome>
      <FirstDep></FirstDep>
      <Second></Second>
      <Third></Third>
<Dishes product={product}></Dishes>

    </div>
  )
}

export default Home
import React from 'react'

function ButtonAdd({ product, setCartProduct }) {
    const handleClick(product) => {
        setCartProduct((prev) => {
            return [...prev , product]
        })
        
    }
    return (
        <button className="mt-4 bg-red-600 text-white rounded-2xl px-6 py-1 mb-2 hover:bg-red-700 " onClick={handleClick}>+</button>
    )
}

export default ButtonAdd
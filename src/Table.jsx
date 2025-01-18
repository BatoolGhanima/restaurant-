import React from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";
function Table({ onDelete,product}) {
  
  
    return (
      <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-800">
          <thead className="text-xs text-orange-500 upercase bg-white text-[25px] ">
            
              <tr>
                  <th scope="col" className="px-6 py-3">
                    image
                  </th>
                  <th scope="col" className="px-6 py-3">
                      name
                  </th>
                  <th scope="col" className="px-6 py-3">
                      status
                  </th>
               
              <th scope="col" className="px-6 py-3">
                      price
              </th>
              <th scope="col" className="px-6 py-3">
                      action
                  </th>
              </tr>
          </thead>
          <tbody>
  {product.map((p) => (
    <tr key={p.id} className="bg-white border-b dark:border-orange-700 text-[#333333]">
      <td scope="row" className="px-6 py-4 font-medium text-black  whitespace-nowrap ">
        <img src={p.image_url} alt={p.name} className="w-16 h-16 object-cover" />
      </td>
      <td className="px-6 py-4 text-gray-800 text-[20px]">{p.name}</td>
      <td 
      className={`"px-6 py-4 text-[17px]  ${p.status==="okey" ? "text-green-600" : ""}  ${p.status==='warning'? "text-red-600 ":""}`}> {p.status}</td>

      <td  className="px-6 py-4"> {p.price}</td>
      <td className="px-6 py-4 flex">
      <button 
                  onClick={() => onEdit(p.id)} 
                  className="text-blue-600 hover:text-blue-800 transition duration-200"
                >
                  <FaEdit size={20} />
                </button>
        <button 
                  onClick={() => onDelete(p.id)}
                  className="text-red-600 hover:text-red-800 transition duration-200 m-3"
                >
                  <FaTrash size={20} />
                </button>
      </td>
    </tr>
  ))}
</tbody>

          </table>
    </div>
  )
}

export default Table
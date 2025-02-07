import React from 'react'

function Skeleton() {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-800">
                <thead className="text-[20px] text-orange-500  bg-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">

                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                        <th scope="col" className="px-6 py-3">  </th>
                        <th scope="col" className="px-6 py-3">  </th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="bg-white border-b dark:border-orange-700 text-[#333333]">
                        <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                            <div className="w-16 h-16 bg-gray-300 rounded"></div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="h-4 bg-gray-300 rounded w-2/4"></div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="w-12 h-4 bg-gray-300 rounded"></div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="w-12 h-4 bg-gray-300 rounded"></div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}



export default Skeleton
// import { useForm } from "react-hook-form";
// import apiClient from '../serveses/apiClient';

// function Update({ product, setProduct,close,id }) {
//     const { register, handleSubmit, formState: { errors }, reset } = useForm();

//     const onSubmit = async (data) => {
       
//         console.log(data);
//             await apiClient.put(`/items/${id}`, data); 
//             setProduct(product.map((p)=>(p.id == id ? [...p ,... data] : p))); 
//             reset({...data}); 
//       console.log(data);
//     };

//     return (
//         <div>
//             <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
              
//                 <div className="relative z-0 w-full mb-5 group">
//                     <input
//                         type="text"
//                         {...register("image_url")}
//                         id="image_url_input"
//                         className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
//                         placeholder=" "
//                     />
//                     <label htmlFor="image_url_input"
//                         className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//                         Image URL
//                     </label>
//                 </div>

               
//                 <div className="relative z-0 w-full mb-5 group">
//                     <input
//                         type="text"
//                         {...register("name")}
//                         id="name_input"
//                         className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
//                         placeholder=" "
//                     />
//                     <label htmlFor="name_input"
//                         className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//                         Product Name
//                     </label>
//                 </div>

             
//                 <div className="relative z-0 w-full mb-5 group">
//                     <input
//                         type="text"
//                         {...register("status")}
//                         id="status_input"
//                         className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
//                         placeholder=" "
//                     />
//                     <label htmlFor="status_input"
//                         className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//                         Status
//                     </label>
//                 </div>

              
//                 <div className="relative z-0 w-full mb-5 group">
//                     <input
//                         type="text"
//                         {...register("price")}
//                         id="price_input"
//                         className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
//                         placeholder=" "
//                     />
//                     <label htmlFor="price_input"
//                         className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//                         Price
//                     </label>
//                 </div>

//                 <button
//                     type="submit"
//                     className="rounded-md bg-orange-500 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-orange-600 data-[focus]:outline-1 data-[focus]:outline-white hover:bg-orange-600"
//                     onClick={close}
//                                >
//                                Update
//                                </button>
               
//             </form>
//         </div>
//     );
// }

// export default Update;

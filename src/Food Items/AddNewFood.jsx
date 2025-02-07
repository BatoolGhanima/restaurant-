import { useForm } from "react-hook-form";
import apiClient from '../../serveses/apiClient';

function Add({ product, setProduct, setIsOpen }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {

        console.log(data);
        await apiClient.post("/items", data);
        setProduct([...product, { ...data, id: product.length + 1 }]);
        reset();
        setIsOpen(false)

    };

    return (
        <div>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        {...register("image_url", { required: "Image URL is required" })}
                        id="image_url_input"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                    />
                    <label htmlFor="image_url_input"
                        className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Image URL
                    </label>
                </div>


                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        id="name_input"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                    />
                    <label htmlFor="name_input"
                        className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Product Name
                    </label>
                </div>


                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        {...register("status", { required: "Status is required" })}
                        id="status_input"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                    />
                    <label htmlFor="status_input"
                        className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Status
                    </label>
                </div>


                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        {...register("price", { required: "Price is required" })}
                        id="price_input"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                    />
                    <label htmlFor="price_input"
                        className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Price
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        {...register("rating")}
                        id="rating_input"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                    />
                    <label htmlFor="rating_input"
                        className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Rating
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        {...register("description")}
                        id="description"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                    />
                    <label htmlFor="description"
                        className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        description
                    </label>
                </div>

                <button
                    type="submit"
                    className="rounded-md bg-orange-500 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-orange-600 data-[focus]:outline-1 data-[focus]:outline-white hover:bg-orange-600"

                >
                    Add
                </button>

            </form>
        </div>
    );
}

export default Add;

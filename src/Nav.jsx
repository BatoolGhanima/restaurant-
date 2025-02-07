
import React from 'react';

import { AiOutlineSend, AiFillPhone } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import Popup from './Food Items/Popup';
import Favorite from './Home components/Favorite';

function Nav({cartProduct} ) {
    return (

        <div className='bg-orange-700 flex justify-around text-white p-2'>


            <div className='flex justify-between text-[15px]'>

                <a href="batool00gh@gmail.com">
                    <p className='px-2  flex justify-center items-center'> <AiOutlineSend  className='mx-2'/>  batool@gmail.com</p>
                </a>
                <p className='px-2  flex justify-center items-center'> <AiFillPhone className='mx-2' /> +30 699 333 0647</p>
            </div>

            <div className='flex '>
                <select name="lang" id="" className='bg-transparent text-white  outline-none mx-3'>
                    <option value="en" className='text-orange-500'>English</option>
                    <option value="tr" className='text-orange-500'>Turkish</option>
                    <option value="ar" className='text-orange-500'>Arabic</option>
                </select>
                <select name="lang" id="" className='bg-transparent text-white outline-none mx-3'>
                    <option value="en" className='text-orange-500'>USD</option>
                    <option value="tr" className='text-orange-500'>TL</option>
                    <option value="ar" className='text-orange-500'>Arabic</option>
                </select>
                
                <p className='flex justify-center items-center'> Login
                <GrUserExpert className='mx-2' />
                </p>
                <Popup title={"Favorit"}>
                  {({ setIsOpen }) => <Favorite cartProduct={cartProduct} setIsOpen={setIsOpen}></Favorite>}
                </Popup>
            
            </div>
        </div>

    )
}
export default Nav;
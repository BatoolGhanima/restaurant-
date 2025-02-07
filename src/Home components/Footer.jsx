import React from 'react'
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import insta1 from '../images/insta1.svg'
import insta2 from '../images/insta2.svg'
import insta3 from '../images/insta3.svg'
import insta4 from '../images/insta4.svg'
import insta5 from '../images/insta5.svg'
import insta6 from '../images/insta6.svg'
import logo from '../images/logo.svg'


function Footer() {
    return (
        <div className=''>
            <div className='grid grid-cols-1  m-16 md:grid-cols-3 lg:grid-cols-4'>
                <div className='mt-10'>
                    <h2 className='text-[28px] font-semibold '>contact us  </h2>
                    <p className=' mt-6 flex items-center text-[16px] '> <span className='text-blue-500 mr-2'><FaPhone /> </span> <a href=""> Tel : 920007749</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '> <span className='text-green-500 mr-2'><FaWhatsapp /> </span>  <a href="">Whatsapp : 0557765501</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '> <span className='text-red-500 mr-2'><MdEmail /> </span> <a href="">info@mishwarksa.com</a></p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-[28px] font-semibold '> Information  </h2>
                    <p className=' mt-6 flex items-center text-[16px] '>  <a href="">about us</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '>  <a href="">Terms & Conditions</a></p>
                    <p className=' mt-6 flex items-center text-[16px] font-semibold '>  <a href="">Our Branches</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '>  <a href="">Aqrabia - Khobar</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '>  <a href="">North Khobar - Khobar</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '>  <a href="">Thoqpa - Khobar</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '>  <a href="">Azizia - Khobar</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '>  <a href="">Doha - Khobar</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '>  <a href="">Faisalia - Dammam</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '>  <a href="">Al-Rawda - Dammam</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '>  <a href="">Uhud - Dammam</a></p>
                    <p className=' mt-6 flex items-center text-[16px] '>  <a href="">AlShifa -Dammam</a></p>


                </div>
                <div className='mt-10'>
                    <h2 className='text-[28px] font-semibold '>Open Hour </h2>
                    <p className=' mt-6 flex items-center text-[16px] '> Saturday - Friday : 11 am to 2 am. </p>

                </div>
                <div className='mt-10'>
                    <h2 className='text-[28px] font-semibold '>Instagram </h2>
                    <div className='grid grid-cols-3 grid-rows-2'>
                        <img src={insta1} alt="" />
                        <img src={insta2} alt="" />
                        <img src={insta3} alt="" />
                        <img src={insta4} alt="" />
                        <img src={insta5} alt="" />
                        <img src={insta6} alt="" />

                    </div>

                </div>

            </div>
            <div className='bg-red-600 w-full h-12 mt-8 flex justify-around items-center'>
                <img src={logo} alt="" />
                <p className='text-white'>Copyright © Mishwar Restaurant 2023. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
// import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
// import { useState } from 'react'
// import {  FaEdit } from "react-icons/fa";


// import Update from './Update'

// export default function UpdatePop({isOpen,setIsOpen,product,setProduct ,id }) {

//   function open() {
//     setIsOpen(true)
//   }

//   function close() {
//     setIsOpen(false)
//   }

//   return (
//     <>
//       <Button
//         onClick={()=>setIsOpen(true)}
//         className=" font-medium text-blue-600 hover:text-blue-800"
//       >
     
//      <FaEdit size={20} />
//           </Button>
        
      
//       <Dialog open={isOpen} as="div"
//         className="relative z-10 focus:outline-none"
//         onClose={() => setIsOpen(false)}>
//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4">
//             <DialogPanel
//               transition
//               className="w-full max-w-md rounded-xl bg-orange-500/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
//             >
//              <Update product={product} setProduct={setProduct} close={close} id={id}> </Update>
            
            
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//     </>
//   )
// }

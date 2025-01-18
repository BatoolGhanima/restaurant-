import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

import Add from './Add'

export default function Popup({isOpen,setIsOpen,product,setProduct}) {

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={()=>setIsOpen(true)}
        className="rounded-md bg-orange-500/50 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-orange-500 data-[focus]:outline-1 data-[focus]:outline-white"
      >
       Add new food 
          </Button>
        
      
      <Dialog open={isOpen} as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-orange-500/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
             <Add product={product} setProduct={setProduct} close={close}> </Add>
            
              {/* <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-orange-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-orange-700 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div> */}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

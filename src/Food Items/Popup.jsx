import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'


export default function Popup({  children, title }) {
  const [isOpen, setIsOpen] = useState(false)
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
        className="rounded-md bg-orange-500/75 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-orange-500 data-[focus]:outline-1 data-[focus]:outline-white"
      >
     {title}
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
                        {typeof children === "function" ? children({ setIsOpen }) : children}  

            
            </DialogPanel>
          </div>
          <Button
                  onClick={close}
                >
                 
                </Button>
        </div>
      </Dialog>
    </>
  )
}

import React from 'react'
import { IoMdCloseCircle, IoMdCloseCircleOutline } from 'react-icons/io'
import Button from './Button'

const Popup = ({ orderPopup, serOrderPopup, handlePopup }) => {
  return (
    <>
      {
        orderPopup && (
          <div>
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
              <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 
              dark:text-white duration-300 rounded-xl'>
                {/* Header section */}
                <div className='flex items-center justify-between'>
                  <h1>Order Now</h1>
                  <div>
                    <IoMdCloseCircleOutline className='text-2xl cursor-pointer' onClick={handlePopup}/>
                  </div>
                </div>
                {/* Form section */}
                <div className='pt-5 space-y-3'>
                  <input type="text" placeholder='Enter Name' className='form-input' />
                  <input type="email" placeholder='Enter Email' className='form-input' />
                  <input type="text" placeholder='Enter Address' className='form-input' />
                  <div className='flex justify-center'>
                    <Button text={"Order Now"} bgColor={"bg-primary"} textColor={"text-white"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Popup
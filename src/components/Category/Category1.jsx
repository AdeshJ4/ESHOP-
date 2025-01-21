import React from 'react'
import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/category/watch.png'
import Image3 from '../../assets/category/macbook.png'
import Button from '../shared/Button'

const Category1 = () => {
    return (

        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* 1st col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-72 flex items-start overflow-hidden'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400 '>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-8 '>Earphone</p>
                            <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
                        </div>
                    </div>
                    <img src={Image1} alt="" className='w-[320px] absolute bottom-0 -right-6' />
                </div>
                {/* 2nd col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-72 flex items-start overflow-hidden'>
                    {/* text */}
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-8'>Gadget</p>
                        <Button text="Browse" bgColor="bg-white" textColor="text-brandYellow" />
                    </div>
                    {/* image */}
                    <img src={Image2} alt="" className='w-80 absolute top-11 -right-20' />
                </div>
                {/* 3rd col */}
                <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-72 flex items-start overflow-hidden'>
                    {/* text */}
                    <div className='mb-4 sm:absolute sm:left-24 lg:left-12'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-8'>Laptop</p>
                        <Button text="Browse" bgColor="bg-white" textColor="text-primary" />
                    </div>
                    {/* image */}
                    <img src={Image3} alt="" className='w-48 sm:w-64 absolute top-1/2 -translate-y-1/2 right-0 sm:right-24 lg:right-4' /> 
                </div>
            </div>
        </div>

    )
}

export default Category1
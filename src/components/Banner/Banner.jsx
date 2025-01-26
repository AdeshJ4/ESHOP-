import React from 'react'

import Button from '../shared/Button';




const Banner = ({ bannerData }) => {
  return (
    <div className="min-h-[450px] flex justify-center items-center">
        <div className="container">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl ${bannerData.bgColor}`} >
                {/* 1st col */}
                <div className='p-6 sm:p-8'>
                    <p className='text-sm' data-aos="slide-right">{bannerData.discount}</p>
                    <h1 className='uppercase text-4xl lg:text-7xl font-bold' data-aos="zoom-out">{bannerData.title}</h1>
                    <p className='text-sm' data-aos="fade-up">{bannerData.date}</p>
                </div>
                {/* 2nd col */}
                <div data-aos="zoom-in" className='h-full flex items-center'>
                    <img src={bannerData.image} alt="" className='scale-125 w-[250px] md:w-[340px] mx-auto object-cover drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' />
                </div>
                {/* 3rd col */}
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                    <p className='font-bold text-xl' data-aos="zoom-out">{bannerData.title2}</p>
                    <p className='text-3xl sm:text-5xl font-bold' data-aos="fade-up">{bannerData.title3}</p>
                    <p className='text-sm tracking-wide leading-5' data-aos="fade-up">{bannerData.title4}</p>
                    <div data-aos="fade-up" data-aos-offset="0">
                        <Button text={bannerData.btnTxt} bgColor={bannerData.btnBgColor} textColor={bannerData.btnTextColor} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
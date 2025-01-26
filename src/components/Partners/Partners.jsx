import React from 'react'

import b1 from '../../assets/brand/br-1.png';
import b2 from '../../assets/brand/br-2.png';
import b3 from '../../assets/brand/br-3.png';
import b4 from '../../assets/brand/br-4.png';
import b5 from '../../assets/brand/br-5.png';

const brands = [b1, b2, b3, b4, b5];

const Partners = () => {
    return (
        <div className='py-8 mt-24  md:block bg-gray-200 dark:bg-white/10' data-aos="zoom-in">
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-5 gap-6 place-items-center opacity-50'>
                    {
                        brands.map((b, i) => <img src={b} className='w-[80px] dark:invert' key={i} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Partners
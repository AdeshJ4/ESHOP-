import React from 'react'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const footerLinks = [
    {
        id: 1,
        title: "Home",
        link: "/#"
    },
    {
        id: 2,
        title: "About",
        link: "/#about"
    },
    {
        id: 3,
        title: "Contact",
        link: "/#contact"
    },
    {
        id: 4,
        title: "Blog",
        link: "/#blog"
    },
];


const Footer = () => {
    return (
        <div className=''>
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-20 pt-5'>
                    {/* company details */}
                    <div>
                        <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
                        <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum</p>
                        <p className='text-gray-500 mt-4'>Made with 💖 by The Adesh Jadhav</p>
                    </div>
                    {/* links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        {/* Important Links */}
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important links</h1>
                            <ul className='space-y-3'>
                                {
                                    footerLinks.map(link => <li key={link.id}>
                                        <a href={link.link} className='text-gray-600 hover:text-black dark:text-gray-400 hover:dark:text-white duration-300'>{link.title}</a>
                                    </li>)
                                }
                            </ul>
                        </div>
                        {/* Quick Links */}
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Quick links</h1>
                            <ul className='space-y-3'>
                                {
                                    footerLinks.map(link => <li key={link.id}>
                                        <a href={link.link} className='text-gray-600 hover:text-black dark:text-gray-400 hover:dark:text-white duration-300'>{link.title}</a>
                                    </li>)
                                }
                            </ul>
                        </div>
                        {/* Address */}
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow className='' />
                                    <p>Pune, Maharashtra</p>
                                </div>

                                <div className='flex items-center gap-3 mt-6'>
                                    <FaMobileAlt />
                                    <p>+91 9527370288</p>
                                </div>

                                {/* social links */}
                                <div className='flex items-center gap-5 mt-5'>
                                    <a href="#">
                                        <FaInstagram className='text-3xl  hover:text-primary duration-300' />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className='text-3xl  hover:text-primary duration-300' />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className='text-3xl  hover:text-primary duration-300' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
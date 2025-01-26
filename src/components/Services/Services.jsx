import React from 'react'
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from 'react-icons/fa'

const serviceData = [
  { 
    id:1,
    icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
    title: "Free Shipping",
    description: "Free AShiping on all orders"
  },
  {
    id: 2,
    icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
    title: "Safe Money",
    description: "30 days Money back"
  },
  {
    id: 3,
    icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
    title: "Secure Payment",
    description: "App Payments Secure"
  },
  {
    id:4,
    icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
    title: "Online Support 24/7",
    description: "technical Supoort 24/7"
  }
];

const Services = () => {
  return (
    <div className='container my-16'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
        {
          serviceData.map(service => (
            <div key={service.id} className='flex flex-col items-start sm:flex-row gap-4'>
              {service.icon}
              <div>
                <h1 className='lg:text-xl font-bold'>{service.title}</h1>
                <h1 className='text-gray-400 text-sm'>{service.description}</h1>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services
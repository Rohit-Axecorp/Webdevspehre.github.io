import React from 'react'
import { FaHandshake, FaShoppingCart, FaUniversity, FaBuilding, FaRocket, FaUsers } from 'react-icons/fa';

export default function Solutions() {
  const services = [
    {
      title: 'B2B',
      description: 'We have developed websites satisfying every essential requirement for B2B companies.',
      icon: <FaHandshake size={40} />,
      bgColor: 'bg-red-500',
      textColor: 'text-white',
    },
    {
      title: 'B2C',
      description: 'We help Business-to-consumer to create eye-catching Web Designs to meet their requirements.',
      icon: <FaUsers size={40} />,
      bgColor: 'bg-black',
      textColor: 'text-white',
    },
    {
      title: 'E-COMMERCE',
      description: 'We created several E-commerce websites that guarantee easy shopping experiences.',
      icon: <FaShoppingCart size={40} />,
      bgColor: 'bg-red-500',
      textColor: 'text-white',
    },
    {
      title: 'EDUCATION',
      description: 'We have delivered quality websites for educational sectors for secure and easy management.',
      icon: <FaUniversity size={40} />,
      bgColor: 'bg-black',
      textColor: 'text-white',
    },
    {
      title: 'ENTERPRISE',
      description: 'We provide services to connect your enterprise to consumers and help you become a recognized brand.',
      icon: <FaBuilding size={40} />,
      bgColor: 'bg-red-500',
      textColor: 'text-white',
    },
    {
      title: 'STARTUPS',
      description: 'We have developed affordable web designs for startups.',
      icon: <FaRocket size={40} />,
      bgColor: 'bg-black',
      textColor: 'text-white',
    },
  ];
  return (
    <>
      <section className='bg-gray-100'>
        <div className="py-12 container ">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Serving Excellent Solutions for All Industries</h2>
            <p className="text-lg text-gray-600 mb-8">
              Want to grow your business with trendy web designs that drive traffic? Forget unprofessional companies and join us for a remarkable web experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 ">
            {services.map((service, index) => (
              <div key={index} className={`${service.bgColor} p-6 shadow-md`}>
                <div className="flex items-center mb-4 text-white gap-3">
                  {service.icon}
                  <h3 className={`text-xl font-medium ${service.textColor} mb-2`}>{service.title}</h3>
                </div>
                <p className={`${service.textColor}`}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

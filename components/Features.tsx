import React from 'react'
import { Features } from '@/constants/'

const FeaturesContent = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-white ">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {Features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300  mt-4">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full p-4 flex justify-center items-center mb-4">
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.label}</h3>
            <p className="text-sm text-gray-300 text-center px-12">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesContent
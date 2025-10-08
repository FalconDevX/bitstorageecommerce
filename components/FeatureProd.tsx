import React from 'react'
import Image from 'next/image'

const FeatureProd = () => {
  return (
    <section className='w-full py-10 flex justify-center px-4 sm:px-6 md:px-8 mt-20'>
      <div className='max-w-7xl w-full bg-[#9CA3AF19] shadow-lg p-6 sm:p-10 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10rounded-lg'>
        <div className='flex flex-col gap-4'>
            <h3 className='text-orange-500'>Limited Time Offer 40% Off</h3>
            <h1 className="text-4xl font-semibold">
                Experience Next-Level Graphics –<br />
                Power Meets Precision!
            </h1>
            <div className="flex flex-row gap-4 items-center">
                <button className='bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-3 w-40 rounded-md font-medium cursor-pointer '>
                    Buy Now
                </button>   
                <button className="text-pink-500 font-medium cursor-pointer border-2 border-pink-500 rounded-lg text-pink-500 px-6 py-3 w-40">
                    Explore Deals
                </button>
            </div>
        </div>
        <div className="relative w-[300px] h-[400px] min-w-[200px] min-h-[250px]">
        
            <Image src="/graphic-card.png" alt="Graphic Card" fill className='object-contain'></Image>
        </div>
      </div>
    </section>
  )
}

export default FeatureProd

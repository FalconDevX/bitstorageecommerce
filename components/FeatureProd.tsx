import React from 'react'
import Image from 'next/image'

const FeatureProd = () => {
  return (
    <section className='w-full py-24 flex justify-center'>
      <div className='max-w-7xl w-full bg-[#9CA3AF19] shadow-lg p-10 px-8 flex justify-between items-center rounded-lg'>
        <div className='flex flex-col gap-4'>
            <h3 className='text-orange-500'>Limited Time Offer 40% Off</h3>
            <h1 className="text-4xl font-semibold">
                Experience Next-Level Graphics –<br />
                Power Meets Precision!
            </h1>
            <button className='bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-3 rounded-md font-medium w-fit hover:opacity-90 transition'>
                Buy Now
            </button>

        </div>
        <div className="relative w-[300px] h-[400px]">
        
            <Image src="/graphic-card.png" alt="Graphic Card" fill className='object-contain'></Image>
        </div>
      </div>
    </section>
  )
}

export default FeatureProd

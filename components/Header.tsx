import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-[#16181C] backdrop-blur-md ">
        <div className="max-w-7xl h-24 mx-auto w-full flex justify-between items-center px-6">
            <div className="flex items-center gap-3">
                <Image src="/bitstorage-logo.png" alt="BitStorage" width={60} height={60} className='rounded-md'></Image>
                <span className="text-white font-light text-3xl tracking-wide">BitStorage</span>
            </div>
            <nav className="absolute left-1/2 -translate-x-1/2 flex gap-6 text-[#9CA3AF] font-light">
                <Link href="/" className="hover:text-[#ffffff] transition-colors duration-300">Home</Link>
                <Link href="/shop" className="hover:text-[#ffffff] transition-colors duration-300">About</Link>
                <Link href="/aboutus" className="hover:text-[#ffffff]">About Us</Link>
                <Link href="/contact" className="hover:text-[#ffffff]">Contact</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header